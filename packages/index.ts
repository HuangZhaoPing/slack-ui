import { App } from 'vue'
import Button from './button/index.vue'
import ButtonGroup from './button-group/index.vue'
import Input from './input/index.vue'

export default {
  install (app: App) {
    app.component(Button.name, Button)
    app.component(ButtonGroup.name, ButtonGroup)
    app.component(Input.name, Input)
  }
}
