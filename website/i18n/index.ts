import { LangConfig, LangMap } from 'types/index'
import ZH_CN from './zh-CN'
import EN_US from './en-US'

const langMap: LangMap = {
  'zh-CN': ZH_CN,
  'en-US': EN_US
}

export function getLangName<T extends keyof LangMap> (): T {
  const match = location.pathname.match(/\/([^/]+)/)
  return <T>(match ? match[1] : 'zh-CN')
}

export function getLangConfig (): LangConfig {
  return langMap[getLangName()]
}

export function getLangMap (): LangMap {
  return langMap
}
