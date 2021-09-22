import { Menu } from 'types/website'
import { getLangConfig } from '@/i18n'

const lang = getLangConfig().nav

const menus: Menu[] = [
  {
    path: '/guide',
    title: lang.guide,
    children: [
      { path: '/installation', title: lang.installation },
      { path: '/usage', title: lang.usage }
    ]
  },
  {
    path: '/basic',
    title: lang.basic,
    children: [
      { path: '/icon', title: lang.icon },
      // { path: '/layout', title: lang.layout },
      // { path: '/grid', title: lang.grid },
      { path: '/button', title: lang.button },
      { path: '/link', title: lang.link }
    ]
  },
  // {
  //   path: '/form',
  //   title: lang.form,
  //   children: [
  //     { path: '/input', title: lang.input },
  //     { path: '/menu', title: lang.menu },
  //     { path: '/popper', title: lang.popper },
  //     { path: '/tooltip', title: lang.tooltip }
  //   ]
  // },
  {
    path: '/navigation',
    title: lang.navigation,
    children: [
      { path: '/menu', title: lang.menu }
    ]
  },
  {
    path: '/other',
    title: lang.other,
    children: [
      { path: '/popper', title: lang.popper },
      { path: '/tooltip', title: lang.tooltip }
    ]
  }
]

export default menus
