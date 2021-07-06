import { App } from 'vue'
import ButtonGroup from './index.vue'
import '../styles/button-group.css'

ButtonGroup.install = (app: App) => {
  app.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup
