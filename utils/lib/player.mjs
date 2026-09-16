// Builds a self-contained HTML player for a media file plus a timestamped transcript. Pure functions; no I/O.
import {relative, dirname, extname, basename} from 'node:path';

const VIDEO = new Set(['.mp4', '.mov', '.m4v', '.webm', '.mkv', '.ogv']);
export function isVideo(file) { return VIDEO.has(extname(file).toLowerCase()); }

// Accepts a transcription response (verbose_json) and returns [{s, e, t}]; falls back to one segment for plain json.
export function segmentsFrom(result) {
  if (Array.isArray(result?.segments) && result.segments.length) {
    return result.segments.map(seg => ({s: round(seg.start), e: round(seg.end), t: String(seg.text || '').trim()})).filter(seg => seg.t);
  }
  if (Array.isArray(result?.words) && result.words.length) {
    // Word-level only: group into ~8-second lines so the page stays readable.
    const out = []; let cur = null;
    for (const w of result.words) {
      if (!cur || w.start - cur.s >= 8) { if (cur) out.push(cur); cur = {s: round(w.start), e: round(w.end), t: String(w.word || '').trim()}; }
      else { cur.e = round(w.end); cur.t += ' ' + String(w.word || '').trim(); }
    }
    if (cur) out.push(cur);
    return out;
  }
  const text = String(result?.text || '').trim();
  return text ? [{s: 0, e: round(result?.duration || 0), t: text}] : [];
}
const round = n => Math.round((Number(n) || 0) * 10) / 10;

export function stamp(seconds) {
  const s = Math.max(0, Number(seconds) || 0);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = Math.floor(s % 60);
  return (h ? String(h).padStart(2, '0') + ':' : '') + String(m).padStart(2, '0') + ':' + String(r).padStart(2, '0');
}

export function mediaHref(outFile, mediaFile) {
  return relative(dirname(outFile), mediaFile).split('\\').join('/');
}

const esc = s => String(s).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));

export function playerHtml({title, mediaHref: href, video, segments, model}) {
  const duration = segments.length ? segments[segments.length - 1].e : 0;
  const tag = video
    ? `<video id="media" controls preload="metadata" playsinline src="${esc(href)}"></video>`
    : `<audio id="media" controls preload="metadata" src="${esc(href)}"></audio>`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<link rel="icon" href="data:,">
<style>
  :root { --bg: #faf9f6; --fg: #1d1d1b; --muted: #6b6a66; --accent: #b5462a; --accent-soft: #f6e4dd; --line: #e4e2dc; --bar-bg: #ffffffee; }
  @media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { --bg: #17171a; --fg: #ececea; --muted: #9b9a95; --accent: #f08a68; --accent-soft: #3a2721; --line: #2c2c31; --bar-bg: #17171aee; } }
  :root[data-theme="dark"] { --bg: #17171a; --fg: #ececea; --muted: #9b9a95; --accent: #f08a68; --accent-soft: #3a2721; --line: #2c2c31; --bar-bg: #17171aee; }
  * { box-sizing: border-box; }
  html, body { margin: 0; background: var(--bg); color: var(--fg); }
  body { font: 17px/1.55 Georgia, "Iowan Old Style", "Times New Roman", serif; }
  .bar { position: sticky; top: 0; z-index: 2; background: var(--bar-bg); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line); padding: 12px 16px; }
  .bar-inner { max-width: 760px; margin: 0 auto; }
  h1 { font: 600 15px/1.3 -apple-system, system-ui, sans-serif; margin: 0 0 8px; letter-spacing: .01em; }
  h1 span { color: var(--muted); font-weight: 400; }
  video, audio { width: 100%; display: block; background: #000; border-radius: 6px; }
  audio { background: none; }
  .hint { font: 12px/1.4 -apple-system, system-ui, sans-serif; color: var(--muted); margin: 8px 0 0; }
  kbd { font: 11px/1 ui-monospace, Menlo, monospace; border: 1px solid var(--line); border-radius: 4px; padding: 2px 5px; background: var(--bg); }
  main { max-width: 760px; margin: 0 auto; padding: 24px 16px 60vh; }
  .seg { display: grid; grid-template-columns: 56px 1fr; gap: 12px; padding: 4px 8px; margin: 0 -8px; border-radius: 6px; cursor: pointer; border: 0; background: none; color: inherit; font: inherit; text-align: left; width: calc(100% + 16px); }
  .seg:hover, .seg.active { background: var(--accent-soft); }
  .seg.active .t { color: var(--accent); font-weight: 600; }
  .t { font: 12px/1.9 ui-monospace, Menlo, monospace; color: var(--muted); }
  .seg:focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }
</style>
</head>
<body>
<div class="bar"><div class="bar-inner">
  <h1>${esc(title)} <span>· ${stamp(duration)} · ${segments.length} segments${model ? ' · ' + esc(model) : ''}</span></h1>
  ${tag}
  <p class="hint">Click any line to jump there. <kbd>space</kbd> play/pause · <kbd>←</kbd> <kbd>→</kbd> 5 s · <kbd>↑</kbd> <kbd>↓</kbd> previous/next line</p>
</div></div>
<main id="transcript"></main>
<script>
const SEGMENTS = ${JSON.stringify(segments)};
const media = document.getElementById('media'), list = document.getElementById('transcript');
const fmt = s => { s = Math.max(0, Math.floor(s)); const m = Math.floor(s / 60), r = s % 60; return String(m).padStart(2, '0') + ':' + String(r).padStart(2, '0'); };
SEGMENTS.forEach((seg, i) => {
  const b = document.createElement('button'); b.className = 'seg'; b.type = 'button'; b.dataset.i = i;
  b.innerHTML = '<span class="t">' + fmt(seg.s) + '</span><span>' + seg.t.replace(/[&<>]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;'}[c])) + '</span>';
  b.addEventListener('click', () => { media.currentTime = seg.s; media.play(); });
  list.appendChild(b);
});
let current = -1;
function mark(i) { if (i === current) return; current = i; document.querySelectorAll('.seg.active').forEach(el => el.classList.remove('active')); const el = list.children[i]; if (el) { el.classList.add('active'); const r = el.getBoundingClientRect(); if (r.top < 120 || r.bottom > innerHeight - 40) el.scrollIntoView({block: 'center', behavior: 'smooth'}); } }
media.addEventListener('timeupdate', () => { const t = media.currentTime; let i = SEGMENTS.findIndex(seg => t >= seg.s && t < seg.e); if (i < 0) { i = SEGMENTS.findIndex(seg => seg.s > t) - 1; if (i < -1) i = SEGMENTS.length - 1; } if (i >= 0) mark(i); });
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.code === 'Space') { e.preventDefault(); media.paused ? media.play() : media.pause(); }
  else if (e.code === 'ArrowLeft') { e.preventDefault(); media.currentTime = Math.max(0, media.currentTime - 5); }
  else if (e.code === 'ArrowRight') { e.preventDefault(); media.currentTime += 5; }
  else if (e.code === 'ArrowUp' || e.code === 'ArrowDown') { e.preventDefault(); const n = Math.min(SEGMENTS.length - 1, Math.max(0, current + (e.code === 'ArrowDown' ? 1 : -1))); media.currentTime = SEGMENTS[n].s; mark(n); }
});
</script>
</body>
</html>
`;
}
