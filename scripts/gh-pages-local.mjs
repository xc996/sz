import http from 'http'
import fs from 'fs'
import path from 'path'
const PORT = process.env.PORT ? Number(process.env.PORT) : 5500
const PREFIX = '/sz'
const root = path.join(process.cwd(), 'dist')
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
}
function send(res, code, body, type) {
  res.statusCode = code
  if (type) res.setHeader('Content-Type', type)
  res.end(body)
}
function serveFile(res, filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase()
    const type = types[ext] || 'application/octet-stream'
    const data = fs.readFileSync(filePath)
    console.info('200', filePath)
    send(res, 200, data, type)
  } catch {
    console.warn('404', filePath)
    send(res, 404, 'Not Found', 'text/plain; charset=utf-8')
  }
}
function handler(req, res) {
  const url = new URL(req.url, `http://localhost:${PORT}`)
  const p = url.pathname
  if (!p.startsWith(PREFIX)) {
    res.statusCode = 302
    res.setHeader('Location', PREFIX + '/')
    console.info('302', p, '->', PREFIX + '/')
    return res.end()
  }
  const rel = p.slice(PREFIX.length)
  const relDecoded = decodeURIComponent(rel)
  const safeRel = path.normalize(relDecoded).replace(/^([.]{2}[\/])+/g, '')
  const target = safeRel === '' || safeRel === '/' ? path.join(root, 'index.html') : path.join(root, safeRel)
  console.info('REQ', p, '->', safeRel)
  if (fs.existsSync(target) && fs.statSync(target).isFile()) {
    if (req.method === 'HEAD') {
      const ext = path.extname(target).toLowerCase()
      const type = types[ext] || 'application/octet-stream'
      res.statusCode = 200
      res.setHeader('Content-Type', type)
      return res.end()
    }
    return serveFile(res, target)
  }
  if (req.method === 'GET' || req.method === 'HEAD') {
    const fallback = path.join(root, 'index.html')
    if (req.method === 'HEAD') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      return res.end()
    }
    return serveFile(res, fallback)
  }
  console.warn('404', target)
  send(res, 404, 'Not Found', 'text/plain; charset=utf-8')
}
http.createServer(handler).listen(PORT, () => {
  console.log(`GH Pages local preview: http://localhost:${PORT}${PREFIX}/`)
})
