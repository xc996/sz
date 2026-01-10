import fs from 'fs'
import path from 'path'

const projectRoot = process.cwd()
const ignoreDirNames = new Set(['node_modules', 'dist', '.git', '.trae', '.VSCodeCounter'])

const allFiles = walk(projectRoot)
const textFiles = allFiles.filter((p) => isTextFile(p) && !isGeneratedReport(p))
const textIndex = new Map()

for (const p of textFiles) {
  try {
    textIndex.set(p, fs.readFileSync(p, 'utf8'))
  } catch {
    textIndex.set(p, '')
  }
}

const candidates = [
  ...allFiles.filter((p) => isCandidateAsset(p)),
  ...allFiles.filter((p) => isCandidatePage(p))
].sort()

const dynamicDataTypes = detectDynamicDataTypes(textIndex)

const unused = []
for (const filePath of candidates) {
  const rel = toPosix(path.relative(projectRoot, filePath))
  if (!rel) continue

  if (isDynamicDataJson(rel, dynamicDataTypes)) continue

  const hit = findReference(rel, filePath, textIndex)
  if (!hit.found) {
    unused.push({
      rel,
      kind: guessKind(rel)
    })
  }
}

const outPath = path.join(projectRoot, 'UNUSED_FILES_REPORT.md')
fs.writeFileSync(outPath, renderMarkdown(unused), 'utf8')
console.log(`Wrote ${path.relative(projectRoot, outPath)} (${unused.length} item(s)).`)

function walk(dir) {
  const out = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    if (e.isDirectory()) {
      if (ignoreDirNames.has(e.name)) continue
      out.push(...walk(path.join(dir, e.name)))
      continue
    }
    if (e.isFile()) out.push(path.join(dir, e.name))
  }
  return out
}

function toPosix(p) {
  return p.split(path.sep).join('/')
}

function isTextFile(p) {
  const ext = path.extname(p).toLowerCase()
  return (
    ext === '.html' ||
    ext === '.css' ||
    ext === '.js' ||
    ext === '.mjs' ||
    ext === '.json' ||
    ext === '.md' ||
    ext === '.txt' ||
    ext === '.svg'
  )
}

function isCandidateAsset(p) {
  const rel = toPosix(path.relative(projectRoot, p))
  if (!rel.startsWith('assets/')) return false
  const ext = path.extname(p).toLowerCase()
  return (
    ext === '.css' ||
    ext === '.js' ||
    ext === '.mjs' ||
    ext === '.json' ||
    ext === '.png' ||
    ext === '.jpg' ||
    ext === '.jpeg' ||
    ext === '.webp' ||
    ext === '.gif' ||
    ext === '.ico' ||
    ext === '.svg' ||
    ext === '.ttf' ||
    ext === '.woff' ||
    ext === '.woff2' ||
    ext === '.eot' ||
    ext === '.mp3' ||
    ext === '.mp4' ||
    ext === '.pdf'
  )
}

function isCandidatePage(p) {
  const rel = toPosix(path.relative(projectRoot, p))
  return rel.startsWith('pages/') && rel.endsWith('.html')
}

function isGeneratedReport(p) {
  const base = path.basename(p)
  return base === 'UNUSED_REPORT.md' || base === 'UNUSED_FILES_REPORT.md'
}

function findReference(rel, selfPath, texts) {
  const variants = new Set()
  variants.add(rel)
  variants.add(encodeURI(rel))
  if (rel.startsWith('assets/')) {
    const shortRel = rel.slice('assets/'.length)
    variants.add(shortRel)
    variants.add(encodeURI(shortRel))
  }

  for (const [p, content] of texts.entries()) {
    if (p === selfPath) continue
    for (const v of variants) {
      if (content.includes(v)) return { found: true, in: p, value: v }
    }
  }
  return { found: false }
}

function guessKind(rel) {
  if (rel.startsWith('assets/images/')) return 'image'
  if (rel.startsWith('assets/webfonts/')) return 'font'
  if (rel.startsWith('assets/vendor/')) return 'vendor'
  if (rel.startsWith('assets/css/')) return 'css'
  if (rel.startsWith('assets/js/')) return 'js'
  if (rel.startsWith('assets/data/')) return 'data'
  if (rel.startsWith('pages/')) return 'page'
  return 'file'
}

function renderMarkdown(items) {
  const now = new Date().toISOString()
  const sections = groupBy(items, (x) => x.kind)
  const kinds = Array.from(sections.keys()).sort()

  const lines = []
  lines.push('# 疑似未被引用的文件/资源报告')
  lines.push('')
  lines.push(`生成时间：${now}`)
  lines.push('')
  lines.push('说明：本报告基于“字符串引用”做离线扫描（HTML/CSS/JS/JSON/MD/TXT/SVG）。')
  lines.push('这意味着：动态拼接路径、运行时生成 URL、或通过服务端路由访问的页面，可能被误判为“未使用”。')
  lines.push('')
  lines.push('重新生成：')
  lines.push('')
  lines.push('```bash')
  lines.push('node scripts/audit-unused.mjs')
  lines.push('```')
  lines.push('')

  if (items.length === 0) {
    lines.push('未发现疑似未使用项。')
    lines.push('')
    return lines.join('\n')
  }

  lines.push(`合计：${items.length} 项`)
  lines.push('')

  for (const kind of kinds) {
    const arr = sections.get(kind) || []
    lines.push(`## ${titleOf(kind)}（${arr.length}）`)
    lines.push('')
    for (const x of arr) lines.push(`- ${x.rel}`)
    lines.push('')
  }

  return lines.join('\n')
}

function titleOf(kind) {
  if (kind === 'image') return '图片'
  if (kind === 'font') return '字体'
  if (kind === 'vendor') return '第三方静态资源'
  if (kind === 'css') return 'CSS 文件'
  if (kind === 'js') return 'JS 文件'
  if (kind === 'data') return '数据文件'
  if (kind === 'page') return '页面'
  return '文件'
}

function groupBy(arr, keyFn) {
  const m = new Map()
  for (const x of arr) {
    const k = keyFn(x)
    const a = m.get(k)
    if (a) a.push(x)
    else m.set(k, [x])
  }
  return m
}

function detectDynamicDataTypes(texts) {
  const out = new Set()

  for (const content of texts.values()) {
    if (!content) continue
    if (!content.includes('data/${type}.json') && !content.includes("data/${type}.json")) continue

    const m = content.match(/validTypes\s*=\s*\[([^\]]+)\]/)
    if (!m) continue

    const inner = m[1] || ''
    for (const s of inner.split(',')) {
      const v = s.trim().replace(/^['"]|['"]$/g, '')
      if (v) out.add(v)
    }
  }

  return out
}

function isDynamicDataJson(rel, dynamicTypes) {
  const m = rel.match(/^assets\/data\/([^/]+)\.json$/)
  if (!m) return false
  const type = m[1]
  return dynamicTypes.has(type)
}
