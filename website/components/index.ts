import { App } from 'vue'
import DemoLayout from './DemoLayout/index.vue'
import AppLayout from './AppLayout/index.vue'
import ComponentLayout from './ComponentLayout/index.vue'

export default {
  install (app: App) {
    app.component(DemoLayout.name, DemoLayout)
    app.component(AppLayout.name, AppLayout)
    app.component(ComponentLayout.name, ComponentLayout)
  }
}
