import { getLangConfig, getLangName } from '@/i18n'

const langName = getLangName()
const lang = getLangConfig().nav

export default [
  {
    title: lang.guide,
    path: `/${langName}/component/guide`,
    children: [
      { title: lang.installation, path: `/${langName}/component/guide/installation` },
      { title: lang.usage, path: `/${langName}/component/guide/usage` }
    ]
  },
  {
    title: lang.basic,
    path: `/${langName}/component/basic`,
    children: [
      { title: lang.icon, path: `/${langName}/component/basic/icon` },
      { title: lang.layout, path: `/${langName}/component/basic/layout` },
      { title: lang.grid, path: `/${langName}/component/basic/grid` },
      { title: lang.button, path: `/${langName}/component/basic/button` }
    ]
  },
  {
    title: lang.form,
    path: `/${langName}/component/form`,
    children: [
      { title: lang.input, path: `/${langName}/component/form/input` },
      { title: lang.menu, path: `/${langName}/component/form/menu` }
    ]
  }
]
