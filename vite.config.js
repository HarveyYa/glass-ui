import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: { port: 5188, open: true },
  // 演示 app 构建输出到独立目录,避免污染发布用的 dist/
  build: { outDir: 'demo-dist' }
})
