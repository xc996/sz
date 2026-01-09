import fs from 'fs'
import path from 'path'

const root = path.join(process.cwd(), 'dist')
const htmlFiles = collectHtml(root)
const missing = new Map()
const checked = new Set()

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8')
  const refs = extractRefs(html)
  for (const ref of refs) {
    const p = normalizeRef(ref, file)
    if (!p) continue
    const key = path.relative(root, p)
    if (checked.has(key)) continue
    checked.add(key)
    if (!fs.existsSync(p)) {
      missing.set(key, (missing.get(key) || 0) + 1)
    }
  }
}

if (missing.size === 0) {
  console.log('All referenced assets exist.')
  process.exit(0)
} else {
  console.log('Missing assets:')
  for (const [k, c] of missing.entries()) {
    console.log('-', k, `(referenced ${c} time(s))`)
  }
  process.exit(1)
}

function collectHtml(dir) {
  const out = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) out.push(...collectHtml(p))
    else if (e.isFile() && e.name.endsWith('.html')) out.push(p)
  }
  return out
}

function extractRefs(html) {
  const refs = []
  const re = /(src|href)=["']([^"']+)["']/g
  let m
  while ((m = re.exec(html))) {
    refs.push(m[2])
  }
  return refs
}

function normalizeRef(ref, htmlFile) {
  if (!ref || ref.startsWith('http')) return null
  const noHash = ref.split('#')[0]
  const noQuery = noHash.split('?')[0]
  const decoded = decodeURIComponent(noQuery)
  if (decoded.startsWith('/')) return path.join(root, decoded.replace(/^\//, ''))
  if (decoded.startsWith('./')) return path.join(path.dirname(htmlFile), decoded.slice(2))
  if (decoded.startsWith('../')) return path.normalize(path.join(path.dirname(htmlFile), decoded))
  return path.join(path.dirname(htmlFile), decoded)
}
