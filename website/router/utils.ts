import { Route } from 'types/website'

export function format (data: Route[], formatter: (route: Route, parentRoute?: Route) => any, parentRoute?: Route): Route[] {
  data.forEach(route => {
    route = formatter(route, parentRoute)
    if (route.children) format(route.children, formatter, route)
  })
  return data
}

export function flat (data: Route[]): Route[] {
  const result: Route[] = []
  data.forEach(route => {
    result.push(route)
    if (route.children) result.push(...flat(route.children))
  })
  return result
}
