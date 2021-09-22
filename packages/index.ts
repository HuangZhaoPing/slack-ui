import { App } from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Menu from './menu'
import MenuItem from './menu-item'
import SubMenu from './sub-menu'
import MenuGroup from './menu-group'
import Popper from './popper'
import Tooltip from './tooltip'
import Icon from './icon'
import Link from './link'

const components = [
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  SubMenu,
  MenuGroup,
  Popper,
  Tooltip,
  Icon,
  Link
]

export default {
  install (app: App) {
    components.forEach(item => (app.component(item.name, item)))
  }
}

export {
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  SubMenu,
  MenuGroup,
  Popper,
  Tooltip,
  Icon,
  Link
}
