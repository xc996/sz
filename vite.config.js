// 导入 Vite 配置工具
import { defineConfig } from 'vite'

// 导出 Vite 配置
export default defineConfig({
  // 设置资源基础路径为相对路径
  base: './',
  build: {
    // 指定构建产物输出目录
    outDir: 'dist'
  }
})
