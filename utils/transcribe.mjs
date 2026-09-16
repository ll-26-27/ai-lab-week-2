#!/usr/bin/env node
// Speech to text through OpenRouter's transcription endpoint.
//
//   node utils/transcribe.mjs recording.mp3 --model openai/whisper-large-v3
//
// Options:
//   --model ID         Required. Examples: openai/whisper-large-v3, openai/whisper-1, microsoft/mai-transcribe-2
//   --language CODE    Hint the spoken language (en, es, zh, …); otherwise detected.
//   --verbose          Ask for segments with timestamps (verbose_json); adds a Segments list to the transcript.
//   --timestamps KIND  With --verbose: segment (default) or word.
//   --temperature N    Optional sampling setting.
//   --out DIRECTORY    New output folder (default output/transcript/<timestamp>-<id>).
//   --env-file FILE    Credential file (default: repo root .env). Needs OPENROUTER_API_KEY.
//   --dry-run          Show the request without sending anything.
//
// Writes transcript.md, request.json (audio bytes omitted), and response.json into the run folder. Audio up to 25 MB;
// WAV, MP3, FLAC, M4A, OGG, WebM, AAC. Nothing is overwritten; the key is redacted from everything saved or printed.
import {readFileSync, statSync, mkdirSync, writeFileSync} from 'node:fs';
import {resolve, join} from 'node:path';
import {parseArgs} from 'node:util';
import {randomUUID} from 'node:crypto';
import {loadConfig, scrub, saveJson} from './lib/runtime.mjs';
import {ENDPOINT, describeFile, buildFields, transcriptMarkdown} from './lib/transcribe.mjs';

const {values: o, positionals} = parseArgs({args: process.argv.slice(2), allowPositionals: true, options: {
  model: {type: 'string', short: 'm'}, language: {type: 'string'}, verbose: {type: 'boolean'}, timestamps: {type: 'string'},
  temperature: {type: 'string'}, out: {type: 'string', short: 'o'}, 'env-file': {type: 'string'}, 'dry-run': {type: 'boolean'}, help: {type: 'boolean', short: 'h'},
}});
if (o.help || positionals.length !== 1) {
  console.log('Usage: node utils/transcribe.mjs AUDIO_FILE --model ID [--language en] [--verbose [--timestamps segment|word]] [--out DIR] [--env-file FILE] [--dry-run]\nModels: openai/whisper-large-v3, openai/whisper-1, microsoft/mai-transcribe-2 (see openrouter.ai/collections/speech-to-text-models)');
  process.exit(o.help ? 0 : 1);
}
try {
  const file = resolve(positionals[0]);
  const info = describeFile(file, statSync(file).size);
  if (o.timestamps && !['segment', 'word'].includes(o.timestamps)) throw new Error('--timestamps must be segment or word.');
  if (o.temperature !== undefined && !(Number(o.temperature) >= 0)) throw new Error('--temperature must be a nonnegative number.');
  const fields = buildFields(o.model, {language: o.language, verbose: o.verbose, timestamps: o.timestamps || (o.verbose ? 'segment' : undefined), temperature: o.temperature});
  const config = loadConfig(o, process.env);
  const out = o.out ? resolve(o.out) : join(config.root, 'output', 'transcript', `${new Date().toISOString().replace(/[:.]/g, '-')}-${randomUUID().slice(0, 8)}`);
  const record = {kind: 'transcript', created: new Date().toISOString(), provider: 'openrouter', model: o.model, url: ENDPOINT, file, audio: info, fields};
  if (o['dry-run']) {
    console.log(JSON.stringify(scrub({...record, out, env_file: config.file, key_available: Boolean(config.env.OPENROUTER_API_KEY), network: false}, config.env), null, 2));
    process.exit(0);
  }
  const key = config.env.OPENROUTER_API_KEY;
  if (!key) throw new Error(`Missing OPENROUTER_API_KEY; set it in ${config.file} or the process environment.`);
  mkdirSync(resolve(out, '..'), {recursive: true});
  mkdirSync(out, {mode: 0o700});
  saveJson(join(out, 'request.json'), record, config.env);
  const form = new FormData();
  form.append('file', new Blob([readFileSync(file)], {type: info.mime}), info.name);
  for (const [k, v] of Object.entries(fields)) form.append(k, v);
  let response;
  try { response = await fetch(ENDPOINT, {method: 'POST', headers: {Authorization: `Bearer ${key}`}, body: form, redirect: 'error', signal: AbortSignal.timeout(600_000)}); }
  catch { throw new Error('Network request failed or timed out; nothing was resubmitted.'); }
  if (!response.ok) throw new Error(`API HTTP ${response.status}. Check the model id, the key, and the audio format. Run directory: ${out}`);
  const result = await response.json();
  if (result.error) throw new Error(`Provider reported an error. Run directory: ${out}`);
  saveJson(join(out, 'response.json'), result, config.env);
  if (!String(result.text || '').trim()) throw new Error(`Provider returned no text; inspect ${join(out, 'response.json')}.`);
  writeFileSync(join(out, 'transcript.md'), transcriptMarkdown(result, info, o.model), {flag: 'wx', mode: 0o600});
  console.log(String(result.text).trim());
  const cost = result.usage?.cost;
  console.error(`Saved ${out}` + (cost !== undefined ? ` (cost reported: $${cost})` : ''));
} catch (error) {
  console.error(error.message); process.exitCode = 1;
}
