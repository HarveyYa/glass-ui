<script setup>
import { ref } from 'vue'
import { ElMessage, ElNotification, ElMessageBox } from 'element-plus'

/* ===== 背景切换 ===== */
const presets = [
  { name: '灰玻璃', css: 'radial-gradient(60% 40% at 35% 12%, #c4c8cd, transparent 60%), radial-gradient(60% 45% at 80% 60%, #888d93, transparent 60%), linear-gradient(160deg, #aab0b6, #71767c)' },
  { name: '暖光', css: 'radial-gradient(70% 60% at 30% 25%, #b59a7e, transparent 70%), radial-gradient(60% 70% at 80% 70%, #8a7558, transparent 70%), linear-gradient(135deg, #9c8367, #5a4c3c)' },
  { name: '深空', css: 'radial-gradient(60% 50% at 70% 18%, #2a3340, transparent 70%), linear-gradient(160deg, #1b212a, #0b0e13)' },
  { name: '冷蓝', css: 'radial-gradient(60% 50% at 30% 20%, #5b7a99, transparent 70%), linear-gradient(160deg, #36465a, #1b232e)' },
]
const images = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
  'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1600&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80',
]
const bg = ref(presets[0].css)
const setGradient = (css) => (bg.value = css)
const setImage = (url) => (bg.value = `url("${url}") center / cover no-repeat`)
const onUpload = (e) => { const f = e.target.files?.[0]; if (f) setImage(URL.createObjectURL(f)) }

/* ===== 表单状态 ===== */
const input = ref(''); const textarea = ref(''); const num = ref(8)
const sel = ref('high'); const date = ref(''); const datetime = ref(''); const time = ref(''); const timeSel = ref('')
const sw1 = ref(true); const sw2 = ref(false)
const checks = ref(['a']); const checkBtn = ref(['a']); const radio = ref('1'); const radioBtn = ref('1')
const slider = ref(40); const rate = ref(3); const color = ref('#cdc6ba')
const auto = ref('')
const cascader = ref([])
const treeSel = ref()
const transferV = ref([1, 4])
const fileList = ref([{ name: 'config.cfg', url: '#' }])

const cascaderOpts = [
  { value: 'east', label: '华东', children: [{ value: 'sh', label: '上海' }, { value: 'hz', label: '杭州' }] },
  { value: 'north', label: '华北', children: [{ value: 'bj', label: '北京' }, { value: 'tj', label: '天津' }] },
]
const treeData = [
  { value: 1, label: '内容管理', children: [{ value: 2, label: '文章' }, { value: 3, label: '评论' }] },
  { value: 4, label: '系统', children: [{ value: 5, label: '用户' }] },
]
const transferData = Array.from({ length: 6 }, (_, i) => ({ key: i + 1, label: `选项 ${i + 1}` }))
const restaurants = [{ value: 'Vue' }, { value: 'React' }, { value: 'Angular' }, { value: 'Svelte' }]
const querySearch = (q, cb) => cb(q ? restaurants.filter(r => r.value.toLowerCase().includes(q.toLowerCase())) : restaurants)

/* ===== 数据 ===== */
const tableData = [
  { name: '文档导出', value: '已启用', tier: 'A' },
  { name: '自动保存', value: '每 5 分钟', tier: 'S' },
  { name: '消息通知', value: '仅重要', tier: 'B' },
  { name: '数据同步', value: '实时', tier: 'S' },
]
const segment = ref('列表')
const deadline = Date.now() + 1000 * 60 * 60 * 3

/* ===== 反馈 ===== */
const dialogVisible = ref(false); const drawerVisible = ref(false); const loading = ref(false)
const showMsg = (t) => ElMessage({ message: '这是一条 ' + t + ' 消息', type: t })
const showNotify = () => ElNotification({ title: '通知', message: '玻璃风通知弹出', type: 'success' })
const showMsgBox = () => ElMessageBox.confirm('确定执行此操作?', '提示', { type: 'warning' }).catch(() => {})
const toggleLoading = () => { loading.value = true; setTimeout(() => (loading.value = false), 1500) }
</script>

<template>
  <div class="page">
    <div class="bg-layer" :style="{ background: bg }"></div>

    <!-- 背景切换 -->
    <div class="bgswitch">
      <span class="bgswitch__t">背景</span>
      <button v-for="p in presets" :key="p.name" class="sw sw--grad" :style="{ background: p.css }" :title="p.name" @click="setGradient(p.css)"></button>
      <span class="bgswitch__sep"></span>
      <button v-for="(u, i) in images" :key="i" class="sw sw--img" :style="{ background: `url('${u}') center / cover` }" @click="setImage(u)"></button>
      <label class="sw sw--up" title="上传本地图片">+<input type="file" accept="image/*" hidden @change="onUpload" /></label>
    </div>

    <header class="hd">
      <h1>GLASS&nbsp;UI</h1>
      <span class="sub">半透明玻璃风 · Element Plus 主题包 · 全组件总览</span>
    </header>

    <!-- ============================ 基础组件 ============================ -->
    <h2 class="cat">基础组件 / Basic</h2>

    <section class="sec"><div class="sec__h">Button 按钮</div>
      <div class="rowwrap">
        <el-button type="primary">Primary</el-button>
        <el-button>Default</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="primary" plain>Plain</el-button>
        <el-button round>Round</el-button>
        <el-button circle><el-icon><Search /></el-icon></el-button>
        <el-button disabled>Disabled</el-button>
        <el-button type="primary" :loading="true">Loading</el-button>
        <el-button text>Text</el-button>
        <el-button link type="primary">Link</el-button>
      </div>
    </section>

    <section class="sec"><div class="sec__h">Link 链接 / Text 文本</div>
      <div class="rowwrap mb16">
        <el-link>默认链接</el-link><el-link type="primary">主要</el-link>
        <el-link type="success">成功</el-link><el-link type="warning">警告</el-link>
        <el-link type="danger">危险</el-link><el-link type="info">信息</el-link>
        <el-link disabled>禁用</el-link>
      </div>
      <div class="rowwrap">
        <el-text>默认文本</el-text><el-text type="primary">主要</el-text>
        <el-text type="success">成功</el-text><el-text type="info">信息</el-text>
        <el-text type="danger">危险</el-text><el-text size="large">大号</el-text>
        <el-text tag="b">加粗</el-text>
      </div>
    </section>

    <section class="sec"><div class="sec__h">Icon 图标 / Scrollbar 滚动条</div>
      <div class="rowwrap mb16" style="font-size:22px">
        <el-icon><Setting /></el-icon><el-icon><Search /></el-icon><el-icon><Star /></el-icon>
        <el-icon><Bell /></el-icon><el-icon><Monitor /></el-icon><el-icon><Headset /></el-icon>
        <el-icon><Aim /></el-icon><el-icon><Refresh /></el-icon>
      </div>
      <el-scrollbar height="80px" style="max-width:300px">
        <p v-for="i in 8" :key="i" style="padding:6px 0">滚动内容行 {{ i }}</p>
      </el-scrollbar>
    </section>

    <section class="sec"><div class="sec__h">Layout 布局 / Space 间距</div>
      <el-row :gutter="12" class="mb16">
        <el-col :span="6"><div class="gridcell">span 6</div></el-col>
        <el-col :span="6"><div class="gridcell">span 6</div></el-col>
        <el-col :span="6"><div class="gridcell">span 6</div></el-col>
        <el-col :span="6"><div class="gridcell">span 6</div></el-col>
      </el-row>
      <el-space wrap>
        <el-button>A</el-button><el-button>B</el-button><el-tag>标签</el-tag><el-button>C</el-button>
      </el-space>
    </section>

    <!-- ============================ 表单组件 ============================ -->
    <h2 class="cat">表单组件 / Form</h2>

    <section class="sec"><div class="sec__h">输入类</div>
      <el-form label-width="100px" class="formgrid">
        <el-form-item label="Input"><el-input v-model="input" placeholder="请输入" clearable /></el-form-item>
        <el-form-item label="InputNumber"><el-input-number v-model="num" :min="0" :max="20" /></el-form-item>
        <el-form-item label="Autocomplete"><el-autocomplete v-model="auto" :fetch-suggestions="querySearch" placeholder="输入 C" /></el-form-item>
        <el-form-item label="Select">
          <el-select v-model="sel"><el-option label="低" value="low" /><el-option label="高" value="high" /><el-option label="极高" value="ultra" /></el-select>
        </el-form-item>
        <el-form-item label="Cascader"><el-cascader v-model="cascader" :options="cascaderOpts" /></el-form-item>
        <el-form-item label="TreeSelect"><el-tree-select v-model="treeSel" :data="treeData" check-strictly /></el-form-item>
        <el-form-item label="DatePicker"><el-date-picker v-model="date" type="date" placeholder="日期" /></el-form-item>
        <el-form-item label="DateTime"><el-date-picker v-model="datetime" type="datetime" placeholder="日期时间" /></el-form-item>
        <el-form-item label="TimePicker"><el-time-picker v-model="time" placeholder="时间" /></el-form-item>
        <el-form-item label="TimeSelect"><el-time-select v-model="timeSel" start="08:00" end="22:00" step="00:30" placeholder="时间段" /></el-form-item>
        <el-form-item label="Textarea" class="span2"><el-input v-model="textarea" type="textarea" :rows="2" placeholder="多行文本" /></el-form-item>
      </el-form>
    </section>

    <section class="sec"><div class="sec__h">选择类</div>
      <el-form label-width="100px" class="formgrid">
        <el-form-item label="Switch"><el-switch v-model="sw1" /> &nbsp; <el-switch v-model="sw2" /></el-form-item>
        <el-form-item label="Rate"><el-rate v-model="rate" /></el-form-item>
        <el-form-item label="Radio">
          <el-radio-group v-model="radio"><el-radio value="1">A</el-radio><el-radio value="2">B</el-radio><el-radio value="3">C</el-radio></el-radio-group>
        </el-form-item>
        <el-form-item label="RadioButton">
          <el-radio-group v-model="radioBtn"><el-radio-button value="1">低</el-radio-button><el-radio-button value="2">中</el-radio-button><el-radio-button value="3">高</el-radio-button></el-radio-group>
        </el-form-item>
        <el-form-item label="Checkbox">
          <el-checkbox-group v-model="checks"><el-checkbox value="a" label="邮件" /><el-checkbox value="b" label="短信" /><el-checkbox value="c" label="推送" /></el-checkbox-group>
        </el-form-item>
        <el-form-item label="CheckboxButton">
          <el-checkbox-group v-model="checkBtn"><el-checkbox-button value="a">A</el-checkbox-button><el-checkbox-button value="b">B</el-checkbox-button><el-checkbox-button value="c">C</el-checkbox-button></el-checkbox-group>
        </el-form-item>
        <el-form-item label="ColorPicker"><el-color-picker v-model="color" /></el-form-item>
        <el-form-item label="Slider" class="span2"><el-slider v-model="slider" /></el-form-item>
      </el-form>
    </section>

    <section class="sec"><div class="sec__h">Transfer 穿梭框 / Upload 上传</div>
      <div class="rowwrap" style="align-items:flex-start; gap:40px">
        <el-transfer v-model="transferV" :data="transferData" />
        <el-upload v-model:file-list="fileList" action="#" :auto-upload="false" multiple>
          <el-button type="primary">选择文件</el-button>
        </el-upload>
      </div>
    </section>

    <!-- ============================ 数据展示 ============================ -->
    <h2 class="cat">数据展示 / Data</h2>

    <section class="sec"><div class="sec__h">Tag / Badge / Avatar / Segmented</div>
      <div class="rowwrap">
        <el-tag>默认</el-tag><el-tag type="success">成功</el-tag><el-tag type="warning">警告</el-tag>
        <el-tag type="danger">危险</el-tag><el-tag type="info">信息</el-tag><el-tag effect="plain">Plain</el-tag>
        <el-badge :value="12"><el-button>消息</el-button></el-badge>
        <el-badge is-dot><el-button>提醒</el-button></el-badge>
        <el-avatar> U </el-avatar><el-avatar shape="square"> G </el-avatar>
        <el-segmented v-model="segment" :options="['列表', '卡片', '看板']" />
      </div>
    </section>

    <section class="sec"><div class="sec__h">Card 卡片 / Descriptions 描述 / Statistic 统计</div>
      <div class="rowwrap" style="align-items:stretch; gap:18px">
        <el-card style="width:240px"><template #header>玻璃卡片</template>半透明 + 模糊,透出背景。</el-card>
        <el-descriptions title="账户信息" :column="1" border style="width:280px">
          <el-descriptions-item label="用户名">admin</el-descriptions-item>
          <el-descriptions-item label="角色">超级管理员</el-descriptions-item>
          <el-descriptions-item label="状态">已激活</el-descriptions-item>
        </el-descriptions>
        <el-card style="width:200px">
          <el-statistic title="在线人数" :value="268500" />
          <el-countdown title="距刷新" :value="deadline" />
        </el-card>
      </div>
    </section>

    <section class="sec"><div class="sec__h">Table 表格</div>
      <el-table :data="tableData">
        <el-table-column prop="name" label="项目" />
        <el-table-column prop="value" label="当前值" />
        <el-table-column prop="tier" label="等级" width="100" />
      </el-table>
    </section>

    <section class="sec"><div class="sec__h">Progress / Pagination</div>
      <div class="rowwrap mb16">
        <el-progress :percentage="70" class="prog" />
        <el-progress type="circle" :percentage="60" :width="64" />
        <el-progress :percentage="100" status="success" class="prog" />
      </div>
      <el-pagination layout="prev, pager, next" :total="100" />
    </section>

    <section class="sec"><div class="sec__h">Tree 树 / Timeline 时间线 / Collapse 折叠</div>
      <div class="rowwrap" style="align-items:flex-start; gap:40px">
        <el-tree :data="treeData" :props="{ label: 'label' }" default-expand-all style="min-width:200px;background:transparent" />
        <el-timeline>
          <el-timeline-item timestamp="2026-06-01">应用更改</el-timeline-item>
          <el-timeline-item timestamp="2026-06-02" type="primary">同步配置</el-timeline-item>
          <el-timeline-item timestamp="2026-06-03">恢复默认</el-timeline-item>
        </el-timeline>
        <el-collapse style="min-width:240px">
          <el-collapse-item title="折叠面板一" name="1">半透明折叠内容。</el-collapse-item>
          <el-collapse-item title="折叠面板二" name="2">第二段内容。</el-collapse-item>
        </el-collapse>
      </div>
    </section>

    <section class="sec"><div class="sec__h">Carousel 走马灯 / Image 图片 / Empty / Result / Skeleton</div>
      <div class="rowwrap" style="align-items:flex-start; gap:24px">
        <el-carousel height="120px" style="width:240px">
          <el-carousel-item v-for="i in 3" :key="i"><div class="carcell">幻灯片 {{ i }}</div></el-carousel-item>
        </el-carousel>
        <el-image style="width:120px;height:120px" :src="images[2]" fit="cover" />
        <el-empty description="暂无数据" :image-size="70" />
        <div style="width:180px"><el-skeleton :rows="4" animated /></div>
      </div>
      <el-result icon="success" title="操作成功" sub-title="配置已保存" style="padding:12px 0" />
    </section>

    <!-- ============================ 导航组件 ============================ -->
    <h2 class="cat">导航组件 / Navigation</h2>

    <section class="sec"><div class="sec__h">Menu 菜单(水平 / 侧边)</div>
      <el-menu :default-active="'1'" mode="horizontal" class="mb16">
        <el-menu-item index="1">总览</el-menu-item><el-menu-item index="2">表单</el-menu-item>
        <el-menu-item index="3">数据</el-menu-item><el-menu-item index="4">关于</el-menu-item>
      </el-menu>
      <el-menu :default-active="'1-1'" style="max-width:220px">
        <el-sub-menu index="1">
          <template #title><el-icon><Setting /></el-icon>设置</template>
          <el-menu-item index="1-1">通用</el-menu-item><el-menu-item index="1-2">隐私</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2"><el-icon><User /></el-icon>账户</el-menu-item>
      </el-menu>
    </section>

    <section class="sec"><div class="sec__h">Tabs / Breadcrumb / Steps / Dropdown / PageHeader</div>
      <el-tabs class="mb16"><el-tab-pane label="标签一" /><el-tab-pane label="标签二" /><el-tab-pane label="标签三" /></el-tabs>
      <el-breadcrumb separator="/" class="mb16">
        <el-breadcrumb-item>首页</el-breadcrumb-item><el-breadcrumb-item>列表</el-breadcrumb-item><el-breadcrumb-item>详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-steps :active="1" align-center class="mb16">
        <el-step title="步骤一" /><el-step title="步骤二" /><el-step title="步骤三" />
      </el-steps>
      <div class="rowwrap mb16">
        <el-dropdown>
          <el-button>下拉菜单<el-icon><ArrowDown /></el-icon></el-button>
          <template #dropdown><el-dropdown-menu><el-dropdown-item>选项一</el-dropdown-item><el-dropdown-item>选项二</el-dropdown-item><el-dropdown-item divided>选项三</el-dropdown-item></el-dropdown-menu></template>
        </el-dropdown>
      </div>
      <el-page-header title="返回" content="详情页" />
    </section>

    <!-- ============================ 反馈组件 ============================ -->
    <h2 class="cat">反馈组件 / Feedback</h2>

    <section class="sec"><div class="sec__h">Alert 警告</div>
      <div class="rowwrap">
        <el-alert title="信息提示" type="info" :closable="false" class="alert" />
        <el-alert title="成功提示" type="success" :closable="false" class="alert" />
        <el-alert title="警告提示" type="warning" :closable="false" class="alert" />
        <el-alert title="错误提示" type="error" :closable="false" class="alert" />
      </div>
    </section>

    <section class="sec"><div class="sec__h">弹层与提示</div>
      <div class="rowwrap">
        <el-button @click="dialogVisible = true">Dialog</el-button>
        <el-button @click="drawerVisible = true">Drawer</el-button>
        <el-button @click="showMsgBox">MessageBox</el-button>
        <el-button @click="showMsg('success')">Message</el-button>
        <el-button @click="showNotify">Notification</el-button>
        <el-tooltip content="这是一条提示文字"><el-button>Tooltip</el-button></el-tooltip>
        <el-popover trigger="click" content="气泡卡片内容"><template #reference><el-button>Popover</el-button></template></el-popover>
        <el-popconfirm title="确定执行此操作?"><template #reference><el-button>Popconfirm</el-button></template></el-popconfirm>
        <el-button v-loading="loading" @click="toggleLoading">Loading 1.5s</el-button>
      </div>
    </section>

    <!-- ============================ 其他 ============================ -->
    <h2 class="cat">其他 / Others</h2>

    <section class="sec"><div class="sec__h">Divider 分割线 / Watermark 水印</div>
      <el-divider>分割线</el-divider>
      <el-watermark content="Glass UI" :font="{ color: 'rgba(255,255,255,.12)' }">
        <div class="wmbox">水印区域 — 内容浮在半透明水印之上</div>
      </el-watermark>
    </section>

    <!-- 弹层实例 -->
    <el-dialog v-model="dialogVisible" title="确认操作" width="420px">
      <span>玻璃弹窗:半透明 + 背景模糊,能透出后面被模糊的内容。</span>
      <template #footer><el-button @click="dialogVisible = false">取消</el-button><el-button type="primary" @click="dialogVisible = false">确认</el-button></template>
    </el-dialog>
    <el-drawer v-model="drawerVisible" title="抽屉面板" size="320px"><p>半透明抽屉,从右侧滑出。</p></el-drawer>
    <el-backtop :right="40" :bottom="40" />

    <footer class="ft">Glass UI Theme · 半透明玻璃风 Element Plus 主题</footer>
  </div>
</template>

<style scoped>
.page { max-width: 1080px; margin: 0 auto; padding: 48px 28px 80px; }
.bg-layer { position: fixed; inset: 0; z-index: -1; background-size: cover; background-position: center; transition: background .35s ease; }

.bgswitch { position: fixed; top: 18px; right: 18px; z-index: 100; display: flex; align-items: center; gap: 8px; padding: 8px 12px;
            background: rgba(26, 28, 32, .55); backdrop-filter: blur(20px) saturate(120%); -webkit-backdrop-filter: blur(20px) saturate(120%);
            border: 1px solid var(--el-border-color-light); }
.bgswitch__t { font-size: 11px; letter-spacing: 2px; color: var(--el-text-color-secondary); text-transform: uppercase; margin-right: 2px; }
.bgswitch__sep { width: 1px; height: 20px; background: var(--el-border-color-light); margin: 0 2px; }
.sw { width: 26px; height: 26px; padding: 0; border: 1px solid var(--el-border-color); cursor: pointer; outline: none; background-size: cover; transition: transform .12s, border-color .12s; }
.sw:hover { transform: translateY(-2px); border-color: var(--el-border-color-hover); }
.sw--up { display: flex; align-items: center; justify-content: center; font-size: 16px; color: var(--el-text-color-secondary); background: rgba(255, 255, 255, .05); }

.hd { margin-bottom: 28px; }
.hd h1 { font-weight: 600; letter-spacing: 5px; font-size: 32px; margin: 0; }
.hd .sub { color: var(--el-text-color-secondary); font-size: 13px; letter-spacing: 2px; }

.cat { font-size: 15px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; color: var(--el-text-color-primary);
       margin: 8px 0 22px; padding-bottom: 10px; border-bottom: 2px solid var(--el-border-color); }
.sec { margin-bottom: 34px; }
.sec__h { font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: var(--el-text-color-secondary);
          padding-bottom: 12px; margin-bottom: 18px; border-bottom: 1px solid var(--el-border-color-lighter); }
.rowwrap { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; }
.formgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 28px; }
.formgrid .span2 { grid-column: span 2; }
.mb16 { margin-bottom: 16px; }
.prog { width: 200px; } .alert { width: 220px; }
.gridcell { background: rgba(255,255,255,.06); border: 1px solid var(--el-border-color-lighter); padding: 14px; text-align: center; font-size: 13px; color: var(--el-text-color-regular); }
.carcell { height: 100%; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,.06); color: var(--el-text-color-regular); }
.wmbox { height: 120px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--el-border-color-lighter); background: rgba(255,255,255,.03); color: var(--el-text-color-regular); }
.ft { text-align: center; color: var(--el-text-color-secondary); font-size: 12px; letter-spacing: 2px; padding-top: 24px; border-top: 1px solid var(--el-border-color-lighter); }
@media (max-width: 720px){ .formgrid { grid-template-columns: 1fr; } .formgrid .span2 { grid-column: auto; } }
</style>
