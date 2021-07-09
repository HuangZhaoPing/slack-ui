import { Route } from 'types/website'
import { getLangConfig } from '@/i18n'

const lang = getLangConfig().pages.home
const glob = import.meta.glob('/pages/**/*.vue')

const routes: Route[] = [
  { title: lang.title, path: '/home' }
]

routes.forEach(item => {
  item.component = glob[`/pages${item.path}/index.vue`]
})

export default routes
