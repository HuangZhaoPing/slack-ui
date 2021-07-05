import { getLangConfig } from '@/i18n'

const lang = getLangConfig().nav

export default [
  {
    title: lang[1],
    path: '/guide',
    children: [
      { title: lang[2], path: '/installation' }
    ]
  },
  {
    title: lang[3],
    path: '/basic',
    children: [
      { title: lang[4], path: '/icon' },
      { title: lang[5], path: '/layout' },
      { title: lang[6], path: '/button' }
    ]
  },
  {
    title: lang[7],
    path: '/form',
    children: [
      { title: lang[8], path: '/input' }
    ]
  }
]
