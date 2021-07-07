import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components'
import 'highlight.js/styles/androidstudio.css'
import './styles/common.css'
import '../packages/styles/index.scss'
import TinyUI from '../packages'

const app = createApp(App)
app.use(router)
app.use(components)
app.use(TinyUI)
app.mount('#app')
