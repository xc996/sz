import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * 递归列出目录下所有 .html 文件路径
 * @param {string} dir 目录绝对路径
 * @returns {Promise<string[]>} html 文件绝对路径列表
 */
async function listHtmlFiles(dir) {
  const result = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = await listHtmlFiles(fullPath);
      result.push(...nested);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.html')) {
      result.push(fullPath);
    }
  }
  return result;
}

/**
 * 从 HTML 中提取所有 data-i18n key
 * @param {string} html HTML 内容
 * @returns {string[]} 去重后的 key 列表（排序）
 */
function extractI18nKeysFromHtml(html) {
  const keys = new Set();
  const re = /data-i18n="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) {
    keys.add(m[1]);
  }
  return Array.from(keys).sort();
}

/**
 * 从 HTML 中推断页面对应的翻译脚本（排除 utils.js）
 * @param {string} html HTML 内容
 * @returns {string|null} JS 相对路径（如 assets/js/index.js），未找到返回 null
 */
function inferTranslationScriptFromHtml(html) {
  const scripts = [];
  const re = /<script[^>]+src="([^"]+assets\/js\/[^"]+\.js)"[^>]*><\/script>/g;
  let m;
  while ((m = re.exec(html))) {
    const src = m[1];
    const normalized = src.replace(/^\.\.\//, '').replace(/^\//, '');
    if (normalized.endsWith('assets/js/utils.js')) continue;
    scripts.push(normalized);
  }
  return scripts.length > 0 ? scripts[scripts.length - 1] : null;
}

/**
 * 从页面脚本中提取 translations 的 zh/en key 集合（仅支持当前项目的扁平 key 写法）
 * @param {string} js JS 内容
 * @returns {{ zhKeys: Set<string>, enKeys: Set<string> } | null}
 */
function extractTranslationKeysFromJs(js) {
  const idx = js.indexOf('const translations');
  if (idx < 0) return null;
  const windowText = js.slice(idx, idx + 30000);
  const m = windowText.match(/const\s+translations\s*=\s*\{([\s\S]*?)\};/);
  if (!m) return null;
  const body = m[1];
  const zhMatch = body.match(/zh\s*:\s*\{([\s\S]*?)\}\s*,\s*en\s*:/);
  const enMatch = body.match(/en\s*:\s*\{([\s\S]*?)\}\s*\}\s*$/);
  if (!zhMatch || !enMatch) return null;

  const keyRe = /['"]([^'"\n]+)['"]\s*:/g;

  const zhKeys = new Set();
  let mm;
  while ((mm = keyRe.exec(zhMatch[1]))) zhKeys.add(mm[1]);

  keyRe.lastIndex = 0;
  const enKeys = new Set();
  while ((mm = keyRe.exec(enMatch[1]))) enKeys.add(mm[1]);

  return { zhKeys, enKeys };
}

/**
 * 运行审计：输出每个 HTML 页面在 zh/en 缺失的 key
 * @param {string} projectRoot 项目根目录绝对路径
 */
async function runAudit(projectRoot) {
  const pagesDir = path.join(projectRoot, 'pages');
  const candidates = [path.join(projectRoot, 'index.html'), ...(await listHtmlFiles(pagesDir))];
  const htmlFiles = [];
  for (const p of candidates) {
    try {
      await fs.access(p);
      htmlFiles.push(p);
    } catch {}
  }

  const report = [];
  for (const htmlPath of htmlFiles) {
    const html = await fs.readFile(htmlPath, 'utf8');
    const keys = extractI18nKeysFromHtml(html);
    if (keys.length === 0) continue;

    const inferredScript = inferTranslationScriptFromHtml(html);
    if (!inferredScript) {
      report.push({
        page: path.relative(projectRoot, htmlPath),
        script: null,
        missingZh: keys,
        missingEn: keys
      });
      continue;
    }

    const scriptAbs = path.join(projectRoot, inferredScript);
    let js;
    try {
      js = await fs.readFile(scriptAbs, 'utf8');
    } catch {
      report.push({
        page: path.relative(projectRoot, htmlPath),
        script: inferredScript,
        missingZh: keys,
        missingEn: keys
      });
      continue;
    }

    const t = extractTranslationKeysFromJs(js);
    if (!t) {
      report.push({
        page: path.relative(projectRoot, htmlPath),
        script: inferredScript,
        missingZh: keys,
        missingEn: keys
      });
      continue;
    }

    const missingZh = keys.filter((k) => !t.zhKeys.has(k));
    const missingEn = keys.filter((k) => !t.enKeys.has(k));

    report.push({
      page: path.relative(projectRoot, htmlPath),
      script: inferredScript,
      missingZh,
      missingEn
    });
  }

  const missingPages = report.filter((r) => (r.missingZh?.length || 0) > 0 || (r.missingEn?.length || 0) > 0);
  if (missingPages.length === 0) {
    console.log('OK: 未发现缺失的中英文 i18n key');
    return;
  }

  console.log(`发现缺失 i18n：${missingPages.length} 个页面`);
  for (const r of missingPages) {
    const previewKeys = (arr) => (arr.length <= 20 ? arr : [...arr.slice(0, 20), `...(${arr.length - 20} more)`]);
    console.log(`- ${r.page} -> ${r.script || '未识别脚本'}`);
    if (r.missingZh.length > 0) console.log(`  zh 缺失(${r.missingZh.length}): ${previewKeys(r.missingZh).join(', ')}`);
    if (r.missingEn.length > 0) console.log(`  en 缺失(${r.missingEn.length}): ${previewKeys(r.missingEn).join(', ')}`);
  }
}

await runAudit(process.cwd());
