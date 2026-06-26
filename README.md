# Glass UI

> 一套 **半透明玻璃风（glassmorphism）** 的 [Element Plus](https://element-plus.org) 主题 —— 灵感来自现代游戏界面：亮青强调、近纯白文字、去饱和语义色、细线直角、背景模糊。

UI 本身近乎单色，组件半透明并透出背景模糊，**色调随背景而变**。激活 / 选中 / 进度 / 勾选统一使用亮青 `#3DB4E5`。

## 特性

- 🪟 **真·玻璃质感**：组件半透明 + `backdrop-filter` 模糊，透出页面背景
- 🎯 **亮青强调色**：激活态、选中态、进度、勾选统一为 `#3DB4E5`
- 🔲 **硬朗直角**：圆角收到接近 0，细线分隔，大留白
- 🎨 **去饱和语义色**：成功 / 警告 / 危险 等状态色压暗，不抢眼
- 🧩 **全组件覆盖**：基础 / 表单 / 数据展示 / 导航 / 反馈 / 其他 全部适配
- 🌈 **背景无关**：弹层统一单层玻璃，深色 / 浅色 / 图片背景皆可

## 安装

```bash
npm install element-plus
# 然后把本仓库的 src/glass-theme.css 引入你的项目
```

## 用法

主题是一份 CSS，**必须在 Element Plus 样式之后引入**才能生效：

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'                  // 1) EP 基础样式
import 'element-plus/theme-chalk/dark/css-vars.css'   // 2) 暗色变量打底
import './glass-theme.css'                            // 3) Glass UI 玻璃主题（放最后）

import App from './App.vue'
createApp(App).use(ElementPlus).mount('#app')
```

> ⚠️ 玻璃主题需要「背后有内容」才出效果。请给页面提供一个背景（渐变 / 图片）。本主题**不会**给 `body` 写死背景，背景由你的页面决定。

## 自定义

整套由 CSS 变量驱动，覆盖 `:root` / `html.dark` 即可：

```css
:root {
  --el-color-primary: #3DB4E5;     /* 强调色（激活/选中/进度） */
  --el-text-color-primary: #FEFFFF;/* 主文字 */
  --el-bg-color-overlay: rgba(26, 28, 32, .55); /* 弹层玻璃浓度 */
}
```

## 本地预览

仓库内含一个覆盖全部组件的演示页（含背景切换 / 上传）：

```bash
npm install
npm run dev   # http://localhost:5188
```

## 字体

演示使用免费的 [Barlow Semi Condensed](https://fonts.google.com/specimen/Barlow+Semi+Condensed) + [Noto Sans SC](https://fonts.google.com/noto/specimen/Noto+Sans+SC)（Google Fonts），可自行替换。

## 致谢与声明

视觉风格受现代游戏界面启发，但**不包含任何第三方游戏的素材、商标或品牌**，仅为独立的设计借鉴。

## License

[MIT](./LICENSE) © 2026 harvey
