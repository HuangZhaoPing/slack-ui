import ComponentLayout from '@/components/ComponentLayout/index.vue'
import { LangConfig, Route } from 'types/website'
import { createRouter, createWebHistory } from 'vue-router'
import { getLangMap, getLangName } from '../i18n'
import pages from './routes/pages'
import nav from './routes/nav'

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
  addPagesRoute()
  addNavRoutes(nav)
}

function addPagesRoute () {
  pages.forEach(({ path, component, title }) => {
    router.addRoute({
      path: `/${langName}${path}`,
      component,
      meta: { title }
    })
  })
}

function addNavRoutes (data: Route[]) {
  data.forEach(item => {
    if (item.children) {
      router.addRoute('component', {
        path: item.path,
        redirect: item.children[0].path
      })
      addNavRoutes(item.children)
    } else {
      router.addRoute('component', {
        path: item.path,
        component: () => import('../docs/'+ item.path.replace(/\/component/, '') +'/index.md')
      })
    }
  })
}

registerRoute()

router.afterEach(() => {
  const main = document.querySelector('.component-layout__main')
  main && main.scrollTo(0, 0)
})

export default router
