import { App } from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Row from './row'

const components = [
  Button,
  ButtonGroup,
  Row
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
  ButtonGroup,
  Row
}
