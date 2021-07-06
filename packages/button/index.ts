import { App } from 'vue'
import './index.scss'
import Button from './index.vue'

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export default Button
