# scripts 目录说明（用途与命令）

本文档说明每个脚本的功能，以及对应的执行命令（含可选参数/环境变量）。

## 统一入口
### scripts/cli.mjs
- 功能：封装常用动作的统一入口
- 命令：
  - node scripts/cli.mjs preview-gh
  - node scripts/cli.mjs validate:all
  - node scripts/cli.mjs validate:local
  - node scripts/cli.mjs validate:remote
  - node scripts/cli.mjs validate:remote-fast
  - node scripts/cli.mjs audit:github
  - node scripts/cli.mjs audit:cloudflare
- 快捷别名（package.json）：
  - npm run tool
  - npm run tool:preview
  - npm run tool:validate
  - npm run tool:remote-fast

## 预览与服务
### scripts/gh-pages-local.mjs
- 功能：本地模拟 GitHub Pages 的 /sz 前缀静态服务，支持中文文件名、URL 解码、HEAD 请求与访问日志
- 端口：默认 5501
- 命令：
  - npm run preview:gh
  - PORT=5501 node scripts/gh-pages-local.mjs

## 构建与产物
### scripts/copy-static.mjs
- 功能：将静态页面与资源复制到 dist 目录，保证构建产物完整
- 命令：
  - node scripts/copy-static.mjs
  - 该脚本已自动集成在 npm run build 中

### scripts/write-version.mjs
- 功能：写入 dist/assets/version.json，包含当前提交 SHA 与时间，用于“等待线上版本命中”校验
- 识别环境变量：GITHUB_SHA 或 CF_PAGES_COMMIT_SHA（优先），否则读取本地 git SHA
- 命令：
  - node scripts/write-version.mjs
  - 该脚本已自动集成在 npm run build 中

## 巡检与验证
### scripts/audit-links.mjs
- 功能：按 origin/base 构造远程资源 URL，批量请求并分组输出结果（200/404/NETERR）
- 支持：并发控制、HEAD→GET 重试、网络错误二次 GET-only 重试、超时中断
- 必选参数：
  - --origin https://域名
  - --base /路径前缀（GitHub Pages 通常为 /仓库名）
- 可选参数/环境变量：
  - --fail-on-404（出现 404 时退出码为 1）
  - --concurrency <N> 或环境变量 CONCURRENCY（默认 12）
  - --timeout <ms> 或环境变量 TIMEOUT_MS（默认 8000）
- 示例：
  - node scripts/audit-links.mjs --origin https://xc996.github.io --base /sz --fail-on-404
  - CONCURRENCY=24 TIMEOUT_MS=6000 node scripts/audit-links.mjs --origin https://sz-63v.pages.dev --base /

### scripts/check-assets-local.mjs
- 功能：离线校验 dist 下所有 HTML 的 src/href 引用是否在本地存在（不发网络请求）
- 命令：
  - npm run audit:local
  - node scripts/check-assets-local.mjs

### scripts/validate-all.mjs
- 功能：一键验证本地/GitHub/Cloudflare 三端资源健康，支持等待线上版本命中与连通性预检
- 目标选择：
  - 默认同时验证 local/github/cloudflare
  - --local 或 --github 或 --cloudflare 可单独选择
- 域名配置：
  - 环境变量 GITHUB_ORIGIN（默认 https://xc996.github.io）
  - 环境变量 CLOUDFLARE_ORIGIN（默认 https://sz-63v.pages.dev）
- 并发与超时：
  - 环境变量 CONCURRENCY（默认 16）
  - 环境变量 TIMEOUT_MS（默认 8000）
- 版本等待与远程策略：
  - 环境变量 NO_WAIT_VERSION=true 跳过版本等待
  - 环境变量 FORCE_REMOTE=true 远程不可达也尝试巡检（不 skip）
  - 环境变量 WAIT_VERSION_MS=<ms> 自定义最大等待时长（默认 120000）
- 命令：
  - npm run validate:all
  - npm run validate:local-only
  - npm run validate:github-only
  - npm run validate:cloudflare-only
  - npm run validate:fast（NO_WAIT_VERSION/ FORCE_REMOTE/ 并发 32，快速模式）
  - npm run validate:remote-fast（仅远程快速模式）

## 快速使用清单
- 构建并生成版本：npm run build
- 启动本地前缀预览：npm run tool:preview（或 npm run preview:gh）
- 常规三端验证：npm run tool:validate（或 npm run validate:all）
- 远程快速验证：npm run tool:remote-fast（或 npm run validate:remote-fast）
