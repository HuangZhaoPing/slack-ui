import { App } from 'vue'
import Popper from './index.vue'

Popper.install = (app: App) => {
  app.component(Popper.name, Popper)
}

export default Popper
