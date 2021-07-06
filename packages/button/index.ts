import { App } from 'vue'
import '../index.css'
import Button from './index.vue'

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export default Button
