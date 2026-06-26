import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 1) Element Plus 基础样式
import 'element-plus/dist/index.css'
// 2) 暗色变量打底（本主题是暗色调，基于 dark 再覆盖最省事）
import 'element-plus/theme-chalk/dark/css-vars.css'
// 3) Glass UI 玻璃主题（必须最后导入，才能覆盖上面两个）
import './glass-theme.css'

import App from './App.vue'

const app = createApp(App)
// 全局注册所有官方图标
for (const [name, comp] of Object.entries(ElementPlusIconsVue)) {
  app.component(name, comp)
}
app.use(ElementPlus).mount('#app')
