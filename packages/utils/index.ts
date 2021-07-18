export function findParentNodeByDataset (target: Node | EventTarget, key: string): HTMLElement | null {
  let ele = <HTMLElement>target
  while (ele && ele.dataset && !ele.dataset[key]) {
    const parentNode = (<Node>ele).parentNode
    ele = <HTMLElement>parentNode || null
  }
  return ele
}
