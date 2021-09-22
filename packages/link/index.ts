import { App } from 'vue'
import Link from './index.vue'

Link.install = (app: App) => {
  app.component(Link.name, Link)
}

export default Link
