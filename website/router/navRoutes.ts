import { Route } from 'types/website'
import { getLangConfig, getLangName } from '@/i18n'
import { flat, format } from './utils'

const lang = getLangConfig().nav
const langName = getLangName()
const glob = import.meta.glob('/docs/**/index.md')

const routes: Route[] = [
  {
    path: '/guide',
    meta: { title: lang.guide },
    children: [
      {
        path: '/installation',
        meta: {
          title: lang.installation
        }
      },
      {
        path: '/usage',
        meta: { title: lang.usage }
      }
    ]
  },
  {
    path: '/basic',
    meta: { title: lang.basic },
    children: [
      {
        path: '/icon',
        meta: {
          title: lang.icon
        }
      },
      {
        path: '/layout',
        meta: {
          title: lang.layout
        }
      },
      {
        path: '/grid',
        meta: {
          title: lang.grid
        }
      },
      {
        path: '/button',
        meta: {
          title: lang.button
        }
      }
    ]
  },
  {
    path: '/form',
    meta: { title: lang.form },
    children: [
      {
        path: '/input',
        meta: {
          title: lang.input
        }
      },
      {
        path: '/menu',
        meta: {
          title: lang.menu
        }
      },
      {
        path: '/tooltip',
        meta: {
          title: lang.tooltip
        }
      }
    ]
  }
]

const formatRoutes = format(routes, (route: Route, parentRoute?: Route) => {
  if (parentRoute) {
    route.path = parentRoute.path + route.path
  } else {
    route.path = `/${langName}/component${route.path}`
  }
  if (route.children) {
    route.redirect = route.path + route.children[0].path
  } else {
    route.component = glob[`/docs${route.path.replace('/component', '')}/index.md`]
  }
  return route
})

const flatRoutes = flat(formatRoutes)

export {
  formatRoutes,
  flatRoutes
}
