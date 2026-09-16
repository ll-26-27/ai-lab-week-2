// Fills utils/templates/transcript-player.html for a media file plus a timestamped transcript. Pure functions; the caller reads the template.
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

export function playerHtml(template, {title, mediaHref: href, video, segments, model}) {
  const duration = segments.length ? segments[segments.length - 1].e : 0;
  const tag = video
    ? `<video id="media" controls preload="metadata" playsinline src="${esc(href)}"></video>`
    : `<audio id="media" controls preload="metadata" src="${esc(href)}"></audio>`;
  const meta = `· ${stamp(duration)} · ${segments.length} segments${model ? ' · ' + esc(model) : ''}`;
  const filled = template.replace(/^<!--[\s\S]*?-->\n?/, '')
    .split('{{TITLE}}').join(esc(title)).split('{{MEDIA_TAG}}').join(tag).split('{{META}}').join(meta).split('{{SEGMENTS_JSON}}').join(JSON.stringify(segments));
  if (/\{\{[A-Z_]+\}\}/.test(filled)) throw new Error('The template still has an unfilled placeholder.');
  return filled;
}
