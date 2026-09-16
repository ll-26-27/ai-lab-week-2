// Request building for OpenRouter's speech-to-text endpoint. Kept separate from the network code so it can be tested offline.
import {extname, basename} from 'node:path';

export const ENDPOINT = 'https://openrouter.ai/api/v1/audio/transcriptions';
export const FORMATS = {'.wav': 'audio/wav', '.mp3': 'audio/mpeg', '.flac': 'audio/flac', '.m4a': 'audio/mp4', '.ogg': 'audio/ogg', '.webm': 'audio/webm', '.aac': 'audio/aac', '.mp4': 'audio/mp4'};
export const MAX_BYTES = 25 * 1024 * 1024;

export function describeFile(file, size) {
  const mime = FORMATS[extname(file).toLowerCase()];
  if (!mime) throw new Error(`Audio must be one of ${Object.keys(FORMATS).join(', ')}.`);
  if (!size) throw new Error('Audio file is empty.');
  if (size > MAX_BYTES) throw new Error(`Audio is ${(size / 1048576).toFixed(1)} MB; the endpoint accepts up to 25 MB. Convert to MP3 or split it (see the ffmpeg how-tos).`);
  return {name: basename(file), mime, size};
}

// The fields that go into the multipart body, as a plain object; the caller turns it into FormData.
export function buildFields(model, o = {}) {
  if (!model?.trim()) throw new Error('--model is required, e.g. openai/whisper-large-v3.');
  const fields = {model, response_format: o.verbose ? 'verbose_json' : 'json'};
  if (o.language) fields.language = o.language;
  if (o.temperature !== undefined) fields.temperature = String(o.temperature);
  if (o.verbose && o.timestamps) fields['timestamp_granularities[]'] = o.timestamps; // 'segment' or 'word'
  return fields;
}

export function transcriptMarkdown(result, fileInfo, model) {
  const lines = [`# Transcript of ${fileInfo.name}`, '', `Model: ${model}` + (result.language ? ` · Language: ${result.language}` : '') + (result.duration ? ` · Duration: ${Number(result.duration).toFixed(1)} s` : ''), '', (result.text || '').trim(), ''];
  if (Array.isArray(result.segments) && result.segments.length) {
    lines.push('## Segments', '');
    for (const s of result.segments) lines.push(`- [${stamp(s.start)} → ${stamp(s.end)}] ${String(s.text || '').trim()}`);
    lines.push('');
  }
  return lines.join('\n');
}

export function stamp(seconds) {
  const s = Math.max(0, Number(seconds) || 0);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
  return (h ? String(h).padStart(2, '0') + ':' : '') + String(m).padStart(2, '0') + ':' + r.toFixed(1).padStart(4, '0');
}
