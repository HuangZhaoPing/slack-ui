import { App } from 'vue'
import Tooltip from './main'

Tooltip.install = (app: App) => {
  app.component(Tooltip.name, Tooltip)
}

export default Tooltip
