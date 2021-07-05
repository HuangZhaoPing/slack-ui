declare module '*.vue' {
  import { App, DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any> & {
    install(app: App): void
  }
  export default component
}

declare module '*.md' {
  import { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}
