// 构建发布产物:把主题 CSS 输出到 dist/(原版 + 压缩版)
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { transform } from 'esbuild'

const SRC = 'src/glass-theme.css'
const css = readFileSync(SRC, 'utf8')

mkdirSync('dist', { recursive: true })

// 原版(保留注释,便于二次定制)
writeFileSync('dist/glass-ui.css', css)

// 压缩版
const { code } = await transform(css, { loader: 'css', minify: true })
writeFileSync('dist/glass-ui.min.css', code)

console.log('✓ Built dist/glass-ui.css and dist/glass-ui.min.css')
