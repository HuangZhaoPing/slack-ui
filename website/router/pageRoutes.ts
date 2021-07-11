import { Route } from 'types/website'
import { getLangConfig, getLangName } from '@/i18n'
import { flat, format } from './utils'

const lang = getLangConfig().pages.home
const langName = getLangName()
const glob = import.meta.glob('/pages/**/index.vue')

const routes: Route[] = [
  {
    path: '/home',
    meta: {
      title: lang.title
    }
  }
]

const formatRoutes = format(routes, (route: Route, parentRoute?: Route) => {
  if (parentRoute) {
    route.path = parentRoute.path + route.path
  } else {
    route.path = `/${langName}${route.path}`
  }
  if (route.children) {
    route.redirect = route.path + route.children[0].path
  } else {
    route.component = glob[`/pages${route.path.replace(`/${langName}`, '')}/index.vue`]
  }
  return route
})

const flatRoutes = flat(formatRoutes)

export {
  formatRoutes,
  flatRoutes
}
