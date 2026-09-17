import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync, writeFileSync, readFileSync, realpathSync, existsSync, symlinkSync, cpSync, mkdirSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {buildRequest, textResult, imageResults, providers} from '../lib/providers.mjs';
import {loadConfig, scrub, execute, falResult, REPO_ROOT} from '../lib/runtime.mjs';
import {run, argumentsFor} from '../lib/cli.mjs';

const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/l9sAAAAASUVORK5CYII=', 'base64');
const json = body => new Response(JSON.stringify(body), {headers: {'content-type': 'application/json'}});
function temporary(t) { const dir = mkdtempSync(join(tmpdir(), 'tdm155ai-utils-')); t.after(() => rmSync(dir, {recursive: true, force: true})); return dir; }
const env = Object.fromEntries(Object.values(providers).map(p => [p.key, `test-${p.key}`]));
const config = {env, file: '/not-a-real-env'};

test('both text providers map model, prompt, system and token limit', () => {
  for (const provider of Object.keys(providers)) {
    const r = buildRequest('text', provider, 'test-model', 'Tell a story', {system: 'Be brief', 'max-tokens': 42, temperature: 0});
    assert.match(JSON.stringify(r.body), /Tell a story/);
    assert.match(JSON.stringify(r.body), /Be brief/);
    assert.match(JSON.stringify(r.body), /42/);
    assert.ok(r.url.startsWith(providers[provider].base));
  }
  assert.throws(() => buildRequest('text', 'not-a-provider', 'm', 'p'), /Unknown provider/);
});

test('image adapters preserve references and provider parameters', () => {
  const refs = [{data: png, mime: 'image/png', url: 'data:image/png;base64,' + png.toString('base64')}];
  const router = buildRequest('image', 'openrouter', 'model', 'p', {aspect: '2:3', n: 2}, refs);
  assert.equal(router.url, 'https://openrouter.ai/api/v1/images');
  assert.equal(router.body.input_references[0].image_url.url, refs[0].url);
  assert.equal(router.body.n, 2);
  const fal = buildRequest('image', 'fal', 'fal-ai/nano-banana/edit', 'p', {}, refs, {seed: 7});
  assert.deepEqual(fal.body.image_urls, [refs[0].url]); assert.equal(fal.body.seed, 7);
  assert.throws(() => buildRequest('image', 'not-a-provider', 'm', 'p'), /Unknown provider/);
  assert.throws(() => buildRequest('image', 'fal', 'fal-ai/flux/dev', 'p', {size: '1024x1024'}), /not mapped/);
  assert.throws(() => buildRequest('image', 'fal', 'https://elsewhere.test', 'p'), /endpoint ID/);
});

test('credentials select one explicit file, process values win, previews scrub secrets', t => {
  const dir = temporary(t), other = join(dir, 'other.env');
  writeFileSync(join(dir, '.env'), 'FAL_API_KEY=local-key\n');
  writeFileSync(other, 'FAL_API_KEY="other:key"\nOPENROUTER_API_KEY=router-secret\n');
  assert.equal(loadConfig({}, {}, dir).env.FAL_API_KEY, 'local-key');
  const selected = loadConfig({'env-file': other}, {FAL_API_KEY: 'process-key'}, dir);
  assert.equal(selected.env.FAL_API_KEY, 'process-key');
  assert.equal(selected.env.OPENROUTER_API_KEY, 'router-secret');
  const preview = JSON.stringify(scrub({x: 'router-secret', photo: 'data:image/png;base64,AAAA'}, selected.env));
  assert.ok(!preview.includes('router-secret')); assert.ok(!preview.includes('AAAA'));
  assert.throws(() => loadConfig({'env-file': join(dir, 'absent')}, {}, dir), /not found/);
});

test('copied utilities and symlink entrypoints find their physical root from another cwd', t => {
  const dir = temporary(t), pack = join(dir, 'copied-repo'); mkdirSync(pack);
  cpSync(join(REPO_ROOT, 'utils'), join(pack, 'utils'), {recursive: true});
  writeFileSync(join(pack, '.env'), 'FAL_API_KEY=dummy-copied-key\n');
  const link = join(dir, 'text.mjs'); symlinkSync(join(pack, 'utils/generate-text.mjs'), link);
  const childEnv = {...process.env};
  delete childEnv.AI_LAB_ENV_FILE; delete childEnv.AI_LAB_CONTEXT_REPO_ROOT; delete childEnv.FAL_API_KEY;
  const r = spawnSync(process.execPath, [link, 'fal', 'Hello', '--model', 'google/gemini-2.5-flash-lite', '--dry-run'], {cwd: tmpdir(), env: childEnv, encoding: 'utf8'});
  assert.equal(r.status, 0, r.stderr);
  const parsed = JSON.parse(r.stdout);
  assert.equal(parsed.env_file, realpathSync(join(pack, '.env'))); assert.equal(parsed.key_available, true);
  assert.ok(!r.stdout.includes('dummy-copied-key'));
  assert.ok(!existsSync(join(pack, 'output')));
});

test('text extraction omits reasoning and handles both provider schemas', () => {
  assert.equal(textResult({output: 'fal answer', reasoning: 'hidden'}), 'fal answer');
  assert.equal(textResult({choices: [{message: {content: 'router answer'}}]}), 'router answer');
  assert.equal(textResult({choices: [{message: {content: [{type: 'text', text: 'router parts'}]}}]}), 'router parts');
  assert.deepEqual(imageResults({images: [{url: 'https://cdn.fal.media/x'}]}), [{url: 'https://cdn.fal.media/x'}]);
  assert.deepEqual(imageResults({}), []);
});

test('mocked generation uses provider auth, saves PNG bytes, and rejects overwrite before network', async t => {
  const dir = temporary(t), out = join(dir, 'run'); let calls = 0;
  const request = buildRequest('image', 'openrouter', 'model', 'A pencil');
  const fetcher = async (url, init) => {
    calls++; assert.equal(init.headers.Authorization, 'Bearer test-OPENROUTER_API_KEY');
    assert.equal(init.redirect, 'error'); assert.equal(JSON.parse(init.body).prompt, 'A pencil');
    return json({data: [{b64_json: png.toString('base64')}], usage: {cost: 0.01}});
  };
  await execute('image', request, config, out, {}, {fetcher});
  assert.deepEqual(readFileSync(join(out, 'image-01.png')), png);
  assert.ok(!readFileSync(join(out, 'request.json'), 'utf8').includes('test-OPENROUTER_API_KEY'));
  await assert.rejects(() => execute('image', request, config, out, {}, {fetcher}), /EEXIST/);
  assert.equal(calls, 1);
});

test('fal queues once, saves receipt, resumes with GET only, downloads without auth', async t => {
  const dir = temporary(t), methods = [];
  const receipt = {request_id: 'one', status_url: 'https://queue.fal.run/status', response_url: 'https://queue.fal.run/result'};
  const fetcher = async (url, init) => {
    methods.push(init.method || 'GET');
    if (url === 'https://cdn.fal.media/image') { assert.equal(init.headers, undefined); return new Response(png); }
    assert.equal(init.headers.Authorization, 'Key test-FAL_API_KEY');
    if (init.method === 'POST') return json(receipt);
    if (url.endsWith('/status')) return json({status: 'COMPLETED'});
    return json({images: [{url: 'https://cdn.fal.media/image'}]});
  };
  const req = buildRequest('image', 'fal', 'fal-ai/flux/dev', 'p');
  await execute('image', req, config, join(dir, 'first'), {}, {fetcher, progress: () => {}});
  const saved = JSON.parse(readFileSync(join(dir, 'first/fal-request.json'), 'utf8'));
  assert.equal(saved.kind, 'image'); assert.equal(saved.request_id, 'one');
  await execute('image', {provider: 'fal', model: saved.model}, config, join(dir, 'resumed'), {receipt: saved}, {fetcher});
  assert.equal(methods.filter(m => m === 'POST').length, 1);
  await assert.rejects(() => falResult({...receipt, status_url: 'https://attacker.example/status'}, {}), /Invalid fal/);
});

test('failed requests are not retried', async t => {
  const dir = temporary(t);
  let count = 0;
  await assert.rejects(() => execute('text', buildRequest('text', 'openrouter', 'm', 'p'), config, join(dir, 'failure'), {}, {fetcher: async () => {count++; return new Response('secret text', {status: 429});}}), /HTTP 429/);
  assert.equal(count, 1);
});

test('CLI validates arguments and dry run cannot call fetch or write output', async t => {
  const dir = temporary(t), out = join(dir, 'never');
  for (const invalid of ['0', '-2', 'NaN']) assert.throws(() => argumentsFor('image', [`--n=${invalid}`]), /positive integer/);
  const preview = await run('text', ['fal', 'hello', '--model', 'm', '--out', out, '--dry-run'], {env: {}, stdout: () => {}, fetcher: () => assert.fail('network in dry run')});
  assert.equal(preview.network, false); assert.ok(!existsSync(out));
  await assert.rejects(() => run('text', ['fal', 'hello', '--model', 'm', '--input', 'file'], {env: {}}), /not both/);
});
