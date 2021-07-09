import { App } from 'vue'
import SubMenu from './index.vue'

SubMenu.install = (app: App) => {
  app.component(SubMenu.name, SubMenu)
}

export default SubMenu
