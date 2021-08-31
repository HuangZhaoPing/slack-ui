import ComponentLayout from '@/components/ComponentLayout/index.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { getLangName } from '../i18n'
import menus from '@/menus'
import { format, flat } from './utils'

const langName = getLangName()
const glob = import.meta.glob('/docs/**/index.md')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: `/${langName}`
    },
    {
      path: `/${langName}`,
      redirect: `/${langName}/home`
    },
    {
      path: `/${langName}/home`,
      component: () => import('@/pages/home/index.vue')
    },
    {
      path: `/${langName}/component`,
      name: 'component',
      redirect: `/${langName}/component/guide`,
      component: ComponentLayout
    }
  ]
})

const flatMenus = flat(format(menus, (menu, parentMenu) => {
  menu.path = parentMenu ? parentMenu.path + menu.path : `/${langName}/component${menu.path}`
  if (menu.children) {
    menu.redirect = menu.path + menu.children[0].path
  } else {
    menu.component = glob[`/docs${menu.path.replace('/component', '')}/index.md`]
  }
  return menu
}))

flatMenus.forEach(menu => {
  const { title, children, ...route } = menu
  router.addRoute('component', {
    ...route,
    meta: { title }
  } as RouteRecordRaw)
})

export default router
