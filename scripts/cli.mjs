import { spawn } from 'child_process'
const argv = process.argv.slice(2)
function run(bin, args, env = {}) {
  return new Promise((resolve) => {
    const p = spawn(bin, args, { stdio: 'inherit', env: { ...process.env, ...env } })
    p.on('exit', (code) => resolve(code ?? 0))
  })
}
async function main() {
  const cmd = argv[0] || 'help'
  if (cmd === 'preview-gh') {
    const port = process.env.PORT || '5501'
    await run('node', ['scripts/gh-pages-local.mjs'], { PORT: port })
    return
  }
  if (cmd === 'validate:all') {
    const c = process.env.CONCURRENCY || '16'
    const t = process.env.TIMEOUT_MS || '8000'
    await run('node', ['scripts/validate-all.mjs'], { CONCURRENCY: c, TIMEOUT_MS: t })
    return
  }
  if (cmd === 'validate:local') {
    const c = process.env.CONCURRENCY || '16'
    const t = process.env.TIMEOUT_MS || '8000'
    await run('node', ['scripts/validate-all.mjs', '--local'], { CONCURRENCY: c, TIMEOUT_MS: t })
    return
  }
  if (cmd === 'validate:remote') {
    const c = process.env.CONCURRENCY || '16'
    const t = process.env.TIMEOUT_MS || '8000'
    await run('node', ['scripts/validate-all.mjs', '--github', '--cloudflare'], { CONCURRENCY: c, TIMEOUT_MS: t })
    return
  }
  if (cmd === 'validate:remote-fast') {
    const c = process.env.CONCURRENCY || '32'
    const t = process.env.TIMEOUT_MS || '5000'
    await run('node', ['scripts/validate-all.mjs', '--github', '--cloudflare', '--no-wait'], { CONCURRENCY: c, TIMEOUT_MS: t, FORCE_REMOTE: 'true', NO_WAIT_VERSION: 'true' })
    return
  }
  if (cmd === 'audit:github') {
    const origin = process.env.GITHUB_ORIGIN || 'https://xc996.github.io'
    await run('node', ['scripts/audit-links.mjs', '--origin', origin, '--base', '/sz', '--fail-on-404'])
    return
  }
  if (cmd === 'audit:cloudflare') {
    const origin = process.env.CLOUDFLARE_ORIGIN || 'https://sz-63v.pages.dev'
    await run('node', ['scripts/audit-links.mjs', '--origin', origin, '--base', '/', '--fail-on-404'])
    return
  }
  console.log('Usage:')
  console.log('  node scripts/cli.mjs preview-gh')
  console.log('  node scripts/cli.mjs validate:all')
  console.log('  node scripts/cli.mjs validate:local')
  console.log('  node scripts/cli.mjs validate:remote')
  console.log('  node scripts/cli.mjs validate:remote-fast')
  console.log('  node scripts/cli.mjs audit:github')
  console.log('  node scripts/cli.mjs audit:cloudflare')
}
main()
