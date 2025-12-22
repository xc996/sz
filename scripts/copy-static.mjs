import fs from 'fs';
import path from 'path';

/**
 * 复制目录（中文注释）
 * 功能：递归复制 srcDir 到 destDir，确保子文件与子目录完整保留
 */
function copyDir(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * 构建后静态资源复制（中文注释）
 * 功能：将项目中的 pages 与 assets 目录复制到 dist 中，确保 GitHub Pages 子页与静态资源可访问
 */
function main() {
  const projectRoot = process.cwd();
  const distDir = path.join(projectRoot, 'dist');
  const pagesSrc = path.join(projectRoot, 'pages');
  const assetsSrc = path.join(projectRoot, 'assets');

  copyDir(pagesSrc, path.join(distDir, 'pages'));
  copyDir(assetsSrc, path.join(distDir, 'assets'));

  const nojekyll = path.join(distDir, '.nojekyll');
  try {
    fs.writeFileSync(nojekyll, '', { flag: 'w' });
  } catch {}
}

main();

