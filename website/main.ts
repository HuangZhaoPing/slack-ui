import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components'
import 'highlight.js/styles/androidstudio.css'
import './styles/common.css'
import '../packages/styles/index.scss'
import SlackUI from '../packages'
// import '../lib/styles/index.css'
// // @ts-ignore
// import SlackUI from '../lib/index.es.js'

const app = createApp(App)
app.use(router)
app.use(components)
app.use(SlackUI)
app.mount('#app')
