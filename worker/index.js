export default {
  /**
   * 处理 HTTP 请求（中文注释）
   * 功能：优先通过静态资源绑定 (ASSETS) 响应；当静态文件 404 时，
   * 在 GET 请求场景下回退到 SPA 首页 index.html，确保前端路由可用。
   */
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    let res = await env.ASSETS.fetch(request)
    if (res.status === 404 && request.method === 'GET') {
      url.pathname = '/index.html'
      res = await env.ASSETS.fetch(new Request(url, request))
    }
    return res
  }
}
