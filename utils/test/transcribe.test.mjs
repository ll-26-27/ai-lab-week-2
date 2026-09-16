import test from 'node:test';
import assert from 'node:assert/strict';
import {describeFile, buildFields, transcriptMarkdown, stamp, MAX_BYTES} from '../lib/transcribe.mjs';

test('describeFile accepts known formats and rejects the rest', () => {
  assert.deepEqual(describeFile('/x/talk.mp3', 100), {name: 'talk.mp3', mime: 'audio/mpeg', size: 100});
  assert.equal(describeFile('/x/talk.M4A', 5).mime, 'audio/mp4');
  assert.throws(() => describeFile('/x/talk.txt', 5), /Audio must be one of/);
  assert.throws(() => describeFile('/x/talk.wav', 0), /empty/);
  assert.throws(() => describeFile('/x/talk.wav', MAX_BYTES + 1), /25 MB/);
});

test('buildFields maps options to the endpoint fields', () => {
  assert.deepEqual(buildFields('openai/whisper-1'), {model: 'openai/whisper-1', response_format: 'json'});
  const f = buildFields('openai/whisper-1', {language: 'es', verbose: true, timestamps: 'word', temperature: 0});
  assert.equal(f.response_format, 'verbose_json'); assert.equal(f.language, 'es'); assert.equal(f['timestamp_granularities[]'], 'word'); assert.equal(f.temperature, '0');
  assert.equal(buildFields('m', {timestamps: 'word'})['timestamp_granularities[]'], undefined, 'timestamps only apply with --verbose');
  assert.throws(() => buildFields(''), /--model is required/);
});

test('transcriptMarkdown writes the text and optional segments with timestamps', () => {
  const md = transcriptMarkdown({text: ' hello there ', language: 'english', duration: 65.25, segments: [{start: 0, end: 2.5, text: ' hello'}, {start: 62.5, end: 65.25, text: 'there '}]}, {name: 'a.mp3'}, 'openai/whisper-1');
  assert.match(md, /^# Transcript of a\.mp3/);
  assert.match(md, /Model: openai\/whisper-1 · Language: english · Duration: 65\.3 s/);
  assert.match(md, /\n\nhello there\n/);
  assert.match(md, /- \[00:00\.0 → 00:02\.5\] hello/);
  assert.match(md, /- \[01:02\.5 → 01:05\.3\] there/);
  assert.doesNotMatch(transcriptMarkdown({text: 'x'}, {name: 'b.wav'}, 'm'), /Segments/);
});

test('stamp formats seconds as mm:ss.s and adds hours when needed', () => {
  assert.equal(stamp(0), '00:00.0'); assert.equal(stamp(75.04), '01:15.0'); assert.equal(stamp(3725.5), '01:02:05.5'); assert.equal(stamp(-3), '00:00.0');
});
