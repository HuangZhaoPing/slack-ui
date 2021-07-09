export declare interface LangConfig {
  lang: string,
  name: string,
  pages: Record<string, any>,
  nav: Record<string, any>,
  components: Record<string, any>
}

export declare interface LangMap {
  'zh-CN': LangConfig
  'en-US': LangConfig
}

export declare interface Route {
  title: string,
  path: string,
  children?: Route[],
  component?: any
}
