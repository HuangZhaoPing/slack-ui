import { App } from 'vue'
import Popper from './main'

Popper.install = (app: App) => {
  app.component(Popper.name, Popper)
}

export default Popper
