import { Slot } from 'vue'

export function findParentNodeByDataset (target: Node | EventTarget, key: string): HTMLElement | null {
  let ele = <HTMLElement>target
  while (ele && ele.dataset && !ele.dataset[key]) {
    const parentNode = (<Node>ele).parentNode
    ele = <HTMLElement>parentNode || null
  }
  return ele
}

export function getFirstVNode (slot: Slot | undefined) {
  if (slot) {
    let vnode = slot()[0]
    while (vnode.children && vnode.props && vnode.props.key === '_default') {
      vnode = (<typeof vnode[]>vnode.children)[0]
    }
    return vnode
  }
  return null
}

export function getZIndex () {
  const global = window as any
  if (!global.$zIndex) global.$zIndex = 2000
  return global.$zIndex
}

export function incrementZIndex () {
  (window as any).$zIndex++
}
