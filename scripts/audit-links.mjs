import fs from 'fs';
import path from 'path';

/**
 * 读取文本文件（中文注释）
 * 功能：安全读取文件内容，返回字符串
 */
function readText(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch {
    return '';
  }
}

/**
 * 收集 HTML/JS 中的资源链接（中文注释）
 * 说明：提取 href/src 中指向 assets/** 的路径以及 JSON 数据引用
 */
function collectLinks(rootDir) {
  const files = [];
  const includes = [
    path.join(rootDir, 'index.html'),
    path.join(rootDir, 'pages'),
    path.join(rootDir, 'assets', 'js'),
  ];
  const results = [];

  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.isFile()) files.push(full);
    }
  }

  for (const p of includes) {
    if (fs.existsSync(p)) {
      const stat = fs.statSync(p);
      if (stat.isDirectory()) walk(p); else files.push(p);
    }
  }

  const htmlAttr = /\b(?:href|src)=["']([^"']+)["']/gi;
  const assetHint = /(^|\/)assets\//i;
  const jsonHint = /assets\/(data|schemas)\/[^"'\)]+\.(json|schema)/gi;

  for (const f of files) {
    const txt = readText(f);
    if (!txt) continue;
    if (f.endsWith('.html')) {
      let m;
      while ((m = htmlAttr.exec(txt))) {
        const url = m[1];
        if (assetHint.test(url)) {
          const hasExt = /\.(css|js|png|jpg|jpeg|svg|woff2|ttf|json)(\?[^"']*)?$/i.test(url);
          if (hasExt) results.push({ file: f, url });
        }
      }
    } else if (f.endsWith('.js')) {
      // 仅扫描 JSON 数据引用，避免误匹配注释或模板字符串中的演示路径
      let jm;
      while ((jm = jsonHint.exec(txt))) {
        results.push({ file: f, url: jm[0] });
      }
    }
  }

  return results;
}

/**
 * 构造远程 URL（中文注释）
 * 参数：origin 如 https://xc996.github.io，basePath 如 /sz
 */
function makeRemote(origin, basePath, srcFile, href) {
  const base = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
  const relFile = path.relative(process.cwd(), srcFile).replace(/\\/g, '/');
  const webDir = relFile.endsWith('.html') ? path.posix.dirname('/' + relFile) : '/';
  let h = href.replace(/^["'`]|["'`]$/g, '').trim();
  h = h.replace(/[),]$/g, '');
  if (h.startsWith('/')) {
    return `${origin}${base}${h}`; // 站点内绝对路径
  }
  const joined = webDir === '/'
    ? path.posix.normalize(`${base}/${h}`)
    : path.posix.normalize(`${base}${webDir}/${h}`);
  return `${origin}${joined.startsWith('/') ? joined : '/' + joined}`;
}

/**
 * 并发检查远程资源（中文注释）
 * 返回：包含 url、status、type 的结果数组
 */
async function checkRemote(urls) {
  const out = [];
  const limit = (() => {
    const idx = process.argv.indexOf('--concurrency');
    if (idx !== -1) {
      const v = parseInt(process.argv[idx + 1]);
      if (!isNaN(v) && v > 0) return v;
    }
    const envV = parseInt(process.env.CONCURRENCY || '0');
    return envV > 0 ? envV : 12;
  })();
  let i = 0;
  async function worker() {
    while (i < urls.length) {
      const u = urls[i++];
      const r = await fetchWithRetry(u, 3, getTimeout());
      out.push(r);
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return out;
}

function getTimeout() {
  const idx = process.argv.indexOf('--timeout');
  if (idx !== -1) {
    const v = parseInt(process.argv[idx + 1]);
    if (!isNaN(v) && v > 0) return v;
  }
  const envV = parseInt(process.env.TIMEOUT_MS || '0');
  return envV > 0 ? envV : 8000;
}

async function fetchWithRetry(url, attempts = 3, timeoutMs = 8000) {
  let lastErr = null;
  for (let k = 1; k <= attempts; k++) {
    try {
      // HEAD 优先，失败或不支持则 GET
      let r = await timedFetch(url, { method: 'HEAD', redirect: 'follow' }, timeoutMs);
      if (!r || !(r.status >= 200 && r.status < 400)) {
        r = await timedFetch(url, { method: 'GET', redirect: 'follow' }, timeoutMs);
      }
      if (r && r.status === 200) {
        return { url, status: r.status, type: r.headers.get('content-type') || '' };
      }
      lastErr = new Error(`HTTP ${r && r.status}`);
    } catch (e) {
      lastErr = e;
    }
    await sleep(300 * k);
  }
  return { url, status: 'NETERR', type: String(lastErr && lastErr.message || 'Error') };
}

function sleep(ms) { return new Promise(res => setTimeout(res, ms)); }

async function timedFetch(url, options, timeoutMs) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: ac.signal });
  } finally {
    clearTimeout(t);
  }
}

async function checkRemoteGetOnly(urls) {
  const out = [];
  const limit = 8;
  let i = 0;
  async function worker() {
    while (i < urls.length) {
      const u = urls[i++];
      try {
        const r = await timedFetch(u, { method: 'GET', redirect: 'follow' }, getTimeout() * 2);
        out.push({ url: u, status: r.status, type: r.headers.get('content-type') || '' });
      } catch (e) {
        out.push({ url: u, status: 'NETERR', type: String(e && e.message || 'Error') });
      }
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return out;
}

/**
 * 主函数（中文注释）
 * 功能：收集资源、远程校验、输出清单
 */
async function main() {
  const origin = process.env.ORIGIN || (process.argv.includes('--origin') ? process.argv[process.argv.indexOf('--origin') + 1] : '');
  const basePath = process.env.BASE || (process.argv.includes('--base') ? process.argv[process.argv.indexOf('--base') + 1] : '/');
  const failOn404 = process.env.FAIL_ON_404 === 'true' || process.argv.includes('--fail-on-404');
  const projectRoot = process.cwd();
  const links = collectLinks(projectRoot);

  if (!origin) {
    console.log('缺少 --origin 参数，示例：node scripts/audit-links.mjs --origin https://xc996.github.io --base /sz');
    console.log('本次仅输出相对路径清单：');
    links.forEach(l => console.log(l));
    return;
  }

  const urls = links.map(({ file, url }) => makeRemote(origin, basePath, file, url));
  let results = await checkRemote(urls);
  const netErrs = results.filter(r => String(r.status) === 'ERR');
  if (netErrs.length) {
    const retryUrls = netErrs.map(r => r.url);
    const retried = await checkRemoteGetOnly(retryUrls);
    const merged = new Map(results.map(r => [r.url, r]));
    retried.forEach(r => merged.set(r.url, r));
    results = Array.from(merged.values());
  }
  const byStatus = results.reduce((acc, r) => {
    const k = String(r.status);
    acc[k] = acc[k] || [];
    acc[k].push(r);
    return acc;
  }, {});

  console.log('=== 资源检查结果 (按状态分组) ===');
  for (const k of Object.keys(byStatus).sort()) {
    console.log(`\n[${k}] 共 ${byStatus[k].length} 项`);
    byStatus[k].slice(0, 1000).forEach(r => console.log(`${String(r.status).padEnd(4)} ${r.type?.split(';')[0] || ''}  ${r.url}`));
  }

  const bad404 = results.filter(r => String(r.status) === '404').length;
  if (failOn404 && bad404 > 0) {
    console.error(`\n发现 ${bad404} 个 404 资源，退出并阻止部署`);
    process.exitCode = 1;
  }
}

main();
