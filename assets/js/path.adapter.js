(() => {
    // 路径适配工具：统一处理详情页/列表页链接与返回判定
    const isFile = () => (window.location.protocol || '').startsWith('file');
    // 计算 /pages/ 基路径，兼容 GitHub Pages 与 Cloudflare Pages
    const getPagesBase = (path) => {
        const pathname = path || window.location.pathname || '';
        const idx = pathname.indexOf('/pages/');
        if (idx >= 0) return pathname.slice(0, idx + 7);
        return '/pages/';
    };
    // 构建详情页链接：支持 slug/type，file:// 下返回绝对 href
    const buildDetailHref = (slug, type) => {
        const params = new URLSearchParams();
        if (slug) params.set('slug', slug);
        if (type && type !== 'attractions') params.set('type', type);
        const pagesBase = getPagesBase();
        const detailPath = `${pagesBase}attractions/detail.html`;
        const query = params.toString();
        if (isFile()) {
            const rel = `attractions/detail.html${query ? `?${query}` : ''}`;
            return new URL(rel, window.location.href).href;
        }
        return query ? `${detailPath}?${query}` : detailPath;
    };
    // 构建列表页链接：heritage 回到 history，其余回到对应类型列表页
    const buildListHref = (type) => {
        const t = type === 'heritage' ? 'history' : (type || 'attractions');
        const pagesBase = getPagesBase();
        if (isFile()) {
            return new URL(`../${t}.html`, window.location.href).href;
        }
        return `${pagesBase}${t}.html`;
    };
    // 判定是否应返回上一页：基于 referrer 或 sessionStorage 记录
    const canGoBackToList = (type) => {
        const t = type || 'attractions';
        const listPage = `${t}.html`;
        const ref = document.referrer || '';
        const refMatch = ref.includes(listPage) || ref.endsWith(listPage);
        const savedAtKey = `${t}SavedAt`;
        const savedAtStr = sessionStorage.getItem(savedAtKey);
        const savedAt = savedAtStr ? parseInt(savedAtStr, 10) : 0;
        const hasSaved = savedAt > 0 && Date.now() - savedAt < 5 * 60 * 1000;
        return (refMatch || hasSaved) && window.history.length > 1;
    };
    window.PathAdapter = {
        getPagesBase,
        buildDetailHref,
        buildListHref,
        canGoBackToList
    };
})();
