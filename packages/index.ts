import { App } from 'vue'
import './styles/index.css'
import Button from './button'
import ButtonGroup from './button-group'

const components = [
  Button,
  ButtonGroup
]

export default {
  install (app: App) {
    components.forEach(item => {
      app.component(item.name, item)
    })
  }
}

export {
  Button,
  ButtonGroup
}
