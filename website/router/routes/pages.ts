import { getLangConfig } from '@/i18n'

const lang = getLangConfig().nav

export default [
  {
    title: lang[1],
    path: `/home`
  }
]
