import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {segmentsFrom, mediaHref, playerHtml, isVideo, stamp} from '../lib/player.mjs';
const template = readFileSync(new URL('../templates/transcript-player.html', import.meta.url), 'utf8');

test('segmentsFrom prefers segments, groups words, falls back to one line', () => {
  assert.deepEqual(segmentsFrom({segments: [{start: 0, end: 2.55, text: ' hi '}, {start: 2.55, end: 4, text: ''}]}), [{s: 0, e: 2.6, t: 'hi'}]);
  const grouped = segmentsFrom({words: [{start: 0, end: 1, word: 'a'}, {start: 1, end: 2, word: 'b'}, {start: 9, end: 10, word: 'c'}]});
  assert.deepEqual(grouped, [{s: 0, e: 2, t: 'a b'}, {s: 9, e: 10, t: 'c'}]);
  assert.deepEqual(segmentsFrom({text: 'all of it', duration: 12.34}), [{s: 0, e: 12.3, t: 'all of it'}]);
  assert.deepEqual(segmentsFrom({}), []);
});

test('mediaHref is relative to the page and uses forward slashes', () => {
  assert.equal(mediaHref('/r/output/transcript/run/player.html', '/r/_media/clip.mp4'), '../../../_media/clip.mp4');
  assert.equal(mediaHref('/r/player.html', '/r/clip.mp4'), 'clip.mp4');
});

test('playerHtml embeds segments, escapes the title, and picks video or audio', () => {
  const html = playerHtml(template, {title: 'a <b> "c"', mediaHref: 'x.mp4', video: true, segments: [{s: 0, e: 1, t: 'hi'}], model: 'm'});
  assert.match(html, /<video id="media"[^>]*src="x\.mp4"/);
  assert.match(html, /<title>a &lt;b&gt; &quot;c&quot;<\/title>/);
  assert.match(html, /const SEGMENTS = \[\{"s":0,"e":1,"t":"hi"\}\]/);
  assert.match(playerHtml(template, {title: 't', mediaHref: 'x.mp3', video: false, segments: [], model: ''}), /<audio id="media"/);
  assert.ok(isVideo('a.MOV') && !isVideo('a.mp3'));
  assert.equal(stamp(3661), '01:01:01'); assert.equal(stamp(75.9), '01:15');
  assert.doesNotMatch(html, /\{\{[A-Z_]+\}\}/, 'no placeholder survives');
  assert.doesNotMatch(html, /^<!--/, 'the template comment is stripped from the output');
  assert.throws(() => playerHtml('{{NOPE}}', {title: 't', mediaHref: 'x', video: false, segments: [], model: ''}), /unfilled placeholder/);
});
