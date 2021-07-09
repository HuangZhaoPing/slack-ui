import { App } from 'vue'
import Menu from './index.vue'

Menu.install = (app: App) => {
  app.component(Menu.name, Menu)
}

export default Menu
