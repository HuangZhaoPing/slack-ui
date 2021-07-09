import { App } from 'vue'
import MenuItem from './index.vue'

MenuItem.install = (app: App) => {
  app.component(MenuItem.name, MenuItem)
}

export default MenuItem
