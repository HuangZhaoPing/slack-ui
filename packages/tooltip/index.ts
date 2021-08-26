import { App } from 'vue'
import Tooltip from './index.vue'

Tooltip.install = (app: App) => {
  app.component(Tooltip.name, Tooltip)
}

export default Tooltip
