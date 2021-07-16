import { App } from 'vue'
import MenuGroup from './index.vue'

MenuGroup.install = (app: App) => {
  app.component(MenuGroup.name, MenuGroup)
}

export default MenuGroup
