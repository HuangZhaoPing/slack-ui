import { App } from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Row from './row'
import Menu from './menu'
import MenuItem from './menu-item'
import SubMenu from './sub-menu'
import MenuGroup from './menu-group'
import Tooltip from './tooltip'

const components = [
  Button,
  ButtonGroup,
  Row,
  Menu,
  MenuItem,
  SubMenu,
  MenuGroup,
  Tooltip
]

export default {
  install (app: App) {
    components.forEach(item => (app.component(item.name, item)))
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
  Tooltip
}
