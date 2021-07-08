import { LangConfig, Route } from 'types/website'
import { createRouter, createWebHistory } from 'vue-router'
import { getLangMap, getLangName } from '../i18n'
import pages from './routes/pages'
import nav from './routes/nav'

const langName = getLangName()

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: `/${langName}/home` },
    {
      path: `/${langName}/component`,
      name: 'component',
      redirect: `/${langName}/component/guide`,
      component: () => import('../components/ComponentLayout/index.vue')
    }
  ]
})

function registerRoute () {
  Object.values(getLangMap()).forEach((item: LangConfig) => {
    addLangRoute(item)
    addPagesRoute(item)
    addNavRoutes(nav, item.lang)
  })
}

function addLangRoute (config: LangConfig) {
  router.addRoute({
    path: `/${config.lang}`,
    redirect: `/${config.lang}/home`
  })
}

function addPagesRoute (config: LangConfig) {
  pages.forEach(item => {
    router.addRoute({
      path: `/${config.lang}${item.path}`,
      component: () => import('../pages' + item.path + '/index.vue'),
      meta: { title: item.title }
    })
  })
}

function addNavRoutes (data: Route[], lang: string) {
  data.forEach(item => {
    if (item.children) {
      router.addRoute('component', {
        path: item.path,
        redirect: item.children[0].path
      })
      addNavRoutes(item.children, lang)
    } else {
      router.addRoute('component', {
        path: item.path,
        component: () => import('../docs/'+ item.path.replace(/\/component/, '') +'/index.md')
      })
    }
  })
}

registerRoute()

export default router
