import ComponentLayout from '@/components/ComponentLayout/index.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { getLangName } from '../i18n'
import { flatRoutes as pageRoutes } from './pageRoutes'
import { flatRoutes as navRoutes } from './navRoutes'

const langName = getLangName()

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: `/${langName}` },
    { path: `/${langName}`, redirect: `/${langName}/home` },
    {
      path: `/${langName}/component`,
      name: 'component',
      redirect: `/${langName}/component/guide`,
      component: ComponentLayout
    }
  ]
})

function registerRoute () {
  addPagesRoutes()
  addNavRoutes()
}

function addPagesRoutes () {
  pageRoutes.forEach(route => {
    const { children, ...value } = route
    router.addRoute(<RouteRecordRaw>value)
  })
}

function addNavRoutes () {
  navRoutes.forEach(route => {
    const { children, ...value } = route
    router.addRoute('component', <RouteRecordRaw>value)
  })
}

router.afterEach(() => {
  const main = document.querySelector('.component-layout__main')
  main && main.scrollTo(0, 0)
})

registerRoute()

export default router
