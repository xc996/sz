import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

function getSha() {
  const envSha = process.env.GITHUB_SHA || process.env.CF_PAGES_COMMIT_SHA || ''
  if (envSha) return envSha
  try { return execSync('git rev-parse HEAD').toString().trim() } catch { return '' }
}

const sha = getSha()
const payload = { sha, time: new Date().toISOString() }
const outDir = path.join(process.cwd(), 'dist', 'assets')
fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(path.join(outDir, 'version.json'), JSON.stringify(payload))
