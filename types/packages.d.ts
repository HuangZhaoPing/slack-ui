import { App } from 'vue'

export type ComponentWithInstall<T> = T & {
  install(app: App): void
}
