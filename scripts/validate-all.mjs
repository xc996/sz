import { spawn } from 'child_process'
import http from 'http'
import { execSync } from 'child_process'

const PORT = process.env.PORT ? Number(process.env.PORT) : 5501
const LOCAL_URL = `http://localhost:${PORT}/sz/`
const args = process.argv.slice(2)
const runLocal = args.length === 0 ? true : args.includes('--local')
const runGithub = args.length === 0 ? true : args.includes('--github')
const runCloudflare = args.length === 0 ? true : args.includes('--cloudflare')
const noWait = process.env.NO_WAIT_VERSION === 'true' || args.includes('--no-wait')
const forceRemote = process.env.FORCE_REMOTE === 'true' || args.includes('--force-remote')
const waitMs = (() => { const v = parseInt(process.env.WAIT_VERSION_MS || '0'); return v > 0 ? v : 120000 })()

// 允许通过环境变量或参数配置远程域名，避免脚本内硬编码
const GH_ORIGIN = process.env.GITHUB_ORIGIN || 'https://xc996.github.io'
const CF_ORIGIN = process.env.CLOUDFLARE_ORIGIN || 'https://sz-63v.pages.dev'

const CASES = []
if (runLocal) CASES.push({ name: 'local', origin: `http://localhost:${PORT}`, base: '/sz' })
if (runGithub) CASES.push({ name: 'github', origin: GH_ORIGIN, base: '/sz' })
if (runCloudflare) CASES.push({ name: 'cloudflare', origin: CF_ORIGIN, base: '/' })

async function main() {
  const server = runLocal ? spawn('node', ['scripts/gh-pages-local.mjs'], { env: { ...process.env, PORT: String(PORT) }, stdio: 'inherit' }) : null
  try {
    const results = []

    if (runLocal) {
      await waitForReady(LOCAL_URL)
      console.log('Local server ready:', LOCAL_URL)
    }

    const expectedSha = getSha()
    const conc = process.env.CONCURRENCY || '16'
    const timeout = process.env.TIMEOUT_MS || '8000'
    for (const c of CASES) {
      console.log(`\n=== Run audit: ${c.name} ===`)
      // 远程连通性预检：防止伪造域名或网络不可达造成假绿灯
      const probeUrl = c.name === 'github' ? `${c.origin}${c.base}/` : `${c.origin}/`
      const reachable = await safeProbe(probeUrl)
      if (!reachable && !forceRemote) {
        console.warn(`[skip] ${c.name} unreachable: ${probeUrl}`)
        results.push({ name: c.name, code: 2 })
        continue
      }
      if (!noWait) {
        const verOk = await waitRemoteVersion(c.origin, c.base, expectedSha, waitMs)
        if (!verOk) console.warn(`[warn] ${c.name} version not updated, proceeding with current content`)
      }
      const code = await run('node', ['scripts/audit-links.mjs', '--origin', c.origin, '--base', c.base, '--concurrency', conc, '--timeout', timeout, '--fail-on-404'])
      results.push({ name: c.name, code })
    }
    console.log('\n=== Summary ===')
    for (const r of results) console.log(`${r.name}: exit ${r.code}`)
    const hasFail = results.some(r => r.code !== 0)
    process.exitCode = hasFail ? 1 : 0
  } finally {
    if (server) server.kill('SIGINT')
  }
}

function waitForReady(url, timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    const start = Date.now()
    const tick = () => {
      http.get(url, res => {
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 400) resolve(null)
        else retry()
      }).on('error', retry)
    }
    const retry = () => {
      if (Date.now() - start > timeoutMs) return reject(new Error('server not ready'))
      setTimeout(tick, 300)
    }
    tick()
  })
}

function run(bin, args) {
  return new Promise(resolve => {
    const p = spawn(bin, args, { stdio: 'inherit' })
    p.on('exit', code => resolve(code ?? 0))
  })
}

async function safeProbe(url) {
  try {
    const ok = await new Promise((resolve) => {
      const req = http.get(url, (res) => {
        resolve(res.statusCode >= 200 && res.statusCode < 400)
      })
      req.on('error', () => resolve(false))
      req.setTimeout(3000, () => { try { req.destroy() } catch {} ; resolve(false) })
    })
    return ok
  } catch { return false }
}

function getSha() {
  try { return execSync('git rev-parse HEAD').toString().trim() } catch { return '' }
}

async function waitRemoteVersion(origin, base, expectedSha, maxWaitMs = 120000) {
  if (!expectedSha) return true
  const u = new URL(`${origin}${base.endsWith('/') ? base : base + '/'}assets/version.json`)
  const t0 = Date.now()
  while (Date.now() - t0 < maxWaitMs) {
    try {
      const r = await fetch(u)
      if (r.status === 200) {
        const j = await r.json().catch(() => null)
        if (j && j.sha === expectedSha) return true
      }
    } catch {}
    await new Promise(res => setTimeout(res, 3000))
  }
  return false
}

main().catch(err => {
  console.error('validate-all failed:', err)
  process.exitCode = 1
})
