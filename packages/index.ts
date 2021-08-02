import { App } from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Row from './row'
import Menu from './menu'
import MenuItem from './menu-item'
import SubMenu from './sub-menu'
import MenuGroup from './menu-group'
import Popper from './popper'
import Tooltip from './tooltip'
import Icon from './icon'

const components = [
  Button,
  ButtonGroup,
  Row,
  Menu,
  MenuItem,
  SubMenu,
  MenuGroup,
  Popper,
  Tooltip,
  Icon
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
  Popper,
  Tooltip,
  Icon
}
