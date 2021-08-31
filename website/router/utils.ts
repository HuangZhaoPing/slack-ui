import { Menu } from 'types/website'

export function format (data: Menu[], formatter: (menu: Menu, parentMenu?: Menu) => Menu, parentMenu?: Menu) {
  data.forEach(menu => {
    menu = formatter(menu, parentMenu)
    if (menu.children) format(menu.children, formatter, menu)
  })
  return data
}

export function flat (data: Menu[]): Menu[] {
  const result: Menu[] = []
  data.forEach(route => {
    result.push(route)
    if (route.children) result.push(...flat(route.children))
  })
  return result
}
