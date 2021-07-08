import { getLangConfig } from '@/i18n'

const lang = getLangConfig().nav

export default [
  {
    title: lang.guide,
    path: '/guide',
    children: [
      { title: lang.installation, path: '/installation' },
      { title: lang.usage, path: '/usage' }
    ]
  },
  {
    title: lang.basic,
    path: '/basic',
    children: [
      { title: lang.icon, path: '/icon' },
      { title: lang.layout, path: '/layout' },
      { title: lang.grid, path: '/grid' },
      { title: lang.button, path: '/button' }
    ]
  },
  {
    title: lang.form,
    path: '/form',
    children: [
      { title: lang.input, path: '/input' }
    ]
  }
]
