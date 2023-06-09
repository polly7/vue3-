import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn' // element-plus汉化
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // element-plus图标
import '@/style/reset.scss' // 全局清除默认样式
import '@/utils/webappREM.js'
import 'lib-flexible'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus, {
    locale: zhCn
})
app.use(Vant)
app.use(store)
app.use(router).mount('#app')
