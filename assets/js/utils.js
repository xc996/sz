// ===================================
// 深圳旅游网页 - 公共工具库
// ===================================

/**
 * 功能：获取静态资源基础路径
 * 说明：
 *  - 自动识别本地环境 (localhost/file) 与 GitHub Pages 环境
 *  - 自动根据当前页面与 assets 目录的相对层级计算路径
 *  - 优先通过 script 标签的 src 属性推断 assets 位置
 */
function getAssetsBase() {
    const host = window.location.hostname || '';
    const path = window.location.pathname || '';
    const isGh = host.endsWith('github.io');
    
    // 1. GitHub Pages 环境：始终使用绝对路径 /repo/assets/
    // 只有在域名确实是 github.io 时才启用此逻辑
    if (isGh) {
        const seg = path.split('/').filter(Boolean)[0] || '';
        return seg ? `/${seg}/assets/` : '/assets/';
    }
    
    // 2. 本地环境 (file:// 或 localhost)
    // 强制使用相对路径，避免绝对路径导致的问题
    const scripts = document.getElementsByTagName('script');
    let scriptPath = '';
    
    for (let i = 0; i < scripts.length; i++) {
        const src = scripts[i].getAttribute('src');
        if (src && src.includes('utils.js')) {
            scriptPath = src;
            break;
        }
    }
    
    if (scriptPath) {
        // scriptPath 可能是 "assets/js/utils.js", "../assets/js/utils.js"
        // 替换 "js/utils.js" 为 "" 即可得到 assets 目录及其前缀
        return scriptPath.replace(/js\/utils\.js(\?.*)?$/, '');
    }
    
    // 3. 降级策略
    if (path.includes('/pages/attractions/') || path.includes('/pages/history/')) return '../../assets/';
    if (path.includes('/pages/')) return '../assets/';
    return 'assets/';
}

/**
 * 功能：检测是否为文件协议
 * 说明：用于判断当前页面是否通过 file:// 直接打开
 */
function isFileProtocol() {
    return (window.location.protocol || '').startsWith('file');
}

function createLogger(scope) {
    const levels = { debug: 0, info: 1, warn: 2, error: 3 }
    const env = (window.__ENV || 'prod')
    const lvlName = (window.__LOG_LEVEL || (env === 'dev' ? 'debug' : 'info'))
    const lvl = levels[lvlName] ?? 1
    function out(kind, args) {
        if (levels[kind] < lvl) return
        const prefix = `[${scope}]`
        if (kind === 'debug') console.debug(prefix, ...args)
        else if (kind === 'info') console.info(prefix, ...args)
        else if (kind === 'warn') console.warn(prefix, ...args)
        else console.error(prefix, ...args)
    }
    return {
        debug: (...a) => out('debug', a),
        info: (...a) => out('info', a),
        warn: (...a) => out('warn', a),
        error: (...a) => out('error', a)
    }
}

window.getAssetsBase = getAssetsBase;
window.isFileProtocol = isFileProtocol;
window.Logger = createLogger;
