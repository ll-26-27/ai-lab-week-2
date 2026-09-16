#!/usr/bin/env node
// Build a web page that plays a video or audio file beside its transcript, with every line clickable.
//
//   node utils/transcript-player.mjs output/transcript/<run> --media _media/clip.mp4
//
// Reads response.json from a transcript run folder (made by utils/transcribe.mjs --verbose, so it has segments)
// and fills utils/templates/transcript-player.html, writing player.html into that folder by default. --out picks another location; the media path in the page is
// written relative to wherever the HTML lands, so keep the two where they are afterwards, or move both.
//   --media FILE   the video or audio the transcript came from (required)
//   --out FILE     where to write the page (default: <run>/player.html)
//   --title TEXT   heading (default: the media filename)
//   --dry-run      print what would be written, without writing
import {readFileSync, existsSync, writeFileSync, statSync} from 'node:fs';
import {resolve, join, basename, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {parseArgs} from 'node:util';
import {segmentsFrom, mediaHref, playerHtml, isVideo} from './lib/player.mjs';

const {values: o, positionals} = parseArgs({args: process.argv.slice(2), allowPositionals: true, options: {
  media: {type: 'string', short: 'm'}, out: {type: 'string', short: 'o'}, title: {type: 'string'}, 'dry-run': {type: 'boolean'}, help: {type: 'boolean', short: 'h'},
}});
if (o.help || positionals.length !== 1 || !o.media) {
  console.log('Usage: node utils/transcript-player.mjs TRANSCRIPT_RUN_FOLDER --media VIDEO_OR_AUDIO [--out FILE] [--title TEXT] [--dry-run]\nThe run folder is one made by utils/transcribe.mjs --verbose (it needs response.json with segments).');
  process.exit(o.help ? 0 : 1);
}
try {
  const run = resolve(positionals[0]);
  const responseFile = statSync(run).isDirectory() ? join(run, 'response.json') : run;
  if (!existsSync(responseFile)) throw new Error(`No response.json in ${run}. Transcribe first with utils/transcribe.mjs --verbose.`);
  const result = JSON.parse(readFileSync(responseFile, 'utf8'));
  const segments = segmentsFrom(result);
  if (!segments.length) throw new Error('The transcript has no text. Check response.json.');
  if (!Array.isArray(result.segments) || !result.segments.length) console.error('Note: no timestamped segments in this transcript; the page will have one line. Re-run transcribe.mjs with --verbose for clickable lines.');
  const media = resolve(o.media);
  if (!existsSync(media)) throw new Error(`Media file not found: ${media}`);
  const out = resolve(o.out || join(statSync(run).isDirectory() ? run : resolve(run, '..'), 'player.html'));
  if (existsSync(out)) throw new Error(`${out} already exists; pass --out to write somewhere else.`);
  let model = '';
  try { model = JSON.parse(readFileSync(join(resolve(responseFile, '..'), 'request.json'), 'utf8')).model || ''; } catch { model = ''; }
  const template = readFileSync(join(dirname(fileURLToPath(import.meta.url)), 'templates', 'transcript-player.html'), 'utf8');
  const html = playerHtml(template, {title: o.title || basename(media), mediaHref: mediaHref(out, media), video: isVideo(media), segments, model});
  if (o['dry-run']) { console.log(JSON.stringify({out, media, mediaHref: mediaHref(out, media), video: isVideo(media), segments: segments.length, bytes: html.length}, null, 2)); process.exit(0); }
  writeFileSync(out, html, {flag: 'wx'});
  console.error(`Wrote ${out} (${segments.length} segments). Open it in a browser; it plays ${mediaHref(out, media)}.`);
} catch (error) { console.error(error.message); process.exitCode = 1; }
