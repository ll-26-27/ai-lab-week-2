#!/usr/bin/env node
// Serve a folder over http://localhost so players and galleries in output/ open in a browser with video seeking intact.
//
//   node utils/serve.mjs                 serves the repo root at http://localhost:8787/
//   node utils/serve.mjs output 8790     serves ./output at http://localhost:8790/
//
// Why not double-click the HTML? You can, and for most pages that is fine. But some simple servers (Python's
// http.server, some editor previews) cannot answer HTTP range requests, and then a browser will play a video from
// the start but refuse to seek, so clicking a transcript line does nothing. This one answers ranges. Ctrl+C stops it.
import {createServer} from 'node:http';
import {statSync, createReadStream, existsSync, readdirSync} from 'node:fs';
import {join, extname, resolve, sep} from 'node:path';

const root = resolve(process.argv[2] || '.'), port = Number(process.argv[3] || 8787);
const types = {'.html': 'text/html; charset=utf-8', '.htm': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.md': 'text/plain; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.mp4': 'video/mp4', '.m4v': 'video/mp4', '.mov': 'video/quicktime', '.webm': 'video/webm', '.mp3': 'audio/mpeg', '.m4a': 'audio/mp4', '.wav': 'audio/wav', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.gif': 'image/gif'};
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));

createServer((req, res) => {
  let file;
  try { file = resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname)); } catch { res.writeHead(400); return res.end(); }
  if (file !== root && !file.startsWith(root + sep)) { res.writeHead(403); return res.end(); }
  if (!existsSync(file)) { res.writeHead(404, {'Content-Type': 'text/plain'}); return res.end('Not found'); }
  if (statSync(file).isDirectory()) {
    const index = join(file, 'index.html');
    if (existsSync(index)) file = index;
    else {
      const rel = file === root ? '/' : '/' + file.slice(root.length + 1).split(sep).join('/') + '/';
      const rows = readdirSync(file).filter(n => !n.startsWith('.')).sort().map(n => `<li><a href="${esc(rel + n)}">${esc(n)}</a></li>`).join('');
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      return res.end(`<!doctype html><meta charset="utf-8"><title>${esc(rel)}</title><body style="font:16px/1.5 system-ui;margin:24px"><h1>${esc(rel)}</h1><ul>${rows}</ul>`);
    }
  }
  const size = statSync(file).size, type = types[extname(file).toLowerCase()] || 'application/octet-stream';
  const m = /bytes=(\d*)-(\d*)/.exec(req.headers.range || '');
  if (m && (m[1] || m[2])) {
    const start = m[1] ? Number(m[1]) : Math.max(0, size - Number(m[2])), end = m[1] && m[2] ? Math.min(Number(m[2]), size - 1) : size - 1;
    if (start >= size) { res.writeHead(416, {'Content-Range': `bytes */${size}`}); return res.end(); }
    res.writeHead(206, {'Content-Type': type, 'Accept-Ranges': 'bytes', 'Content-Range': `bytes ${start}-${end}/${size}`, 'Content-Length': end - start + 1});
    return createReadStream(file, {start, end}).pipe(res);
  }
  res.writeHead(200, {'Content-Type': type, 'Accept-Ranges': 'bytes', 'Content-Length': size});
  createReadStream(file).pipe(res);
}).listen(port, '127.0.0.1', () => console.error(`Serving ${root} at http://localhost:${port}/  (Ctrl+C to stop)`));
