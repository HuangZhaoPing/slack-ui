export declare interface LangConfig {
  lang: string,
  name: string,
  pages: Record<string, any>,
  nav: Record<string, string>,
  components: Record<string, any>
}

export declare interface LangMap {
  'zh-CN': LangConfig
  'en-US': LangConfig
}

export declare interface Menu {
  title: string
  path: string
  redirect?: string
  children?: Menu[],
  component?: () => Promise<any>,
}

export declare interface AnchorItem {
  title: string
  id: string
  level: number
}
