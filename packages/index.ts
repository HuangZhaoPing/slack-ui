import { App } from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Row from './row'
import Menu from './menu'
import MenuItem from './menu-item'
import SubMenu from './sub-menu'
import MenuGroup from './menu-group'
import Popper from './popper'

const components = [
  Button,
  ButtonGroup,
  Row,
  Menu,
  MenuItem,
  SubMenu,
  MenuGroup,
  Popper
]

export default {
  install (app: App) {
    components.forEach(item => {
      console.log('xxx', item)
      app.component(item.name, item)
    })
  }
}

export {
  Button,
  ButtonGroup,
  Row,
  Menu,
  MenuItem,
  SubMenu,
  MenuGroup,
  Popper
}
