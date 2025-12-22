import { defineConfig } from 'vite';

export default defineConfig({
  // 配置基础路径，支持GitHub Pages非根目录部署
  base: './',
  build: {
    // 确保构建输出的资源路径正确
    outDir: 'dist',
  },
});
