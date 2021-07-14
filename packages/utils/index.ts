export function findDatasetValue (target: Node | EventTarget, key: string): string | undefined {
  let ele = <HTMLElement>target
  while (ele && ele.dataset && !ele.dataset[key]) {
    const parentNode = (<Node>ele).parentNode
    ele = <HTMLElement>parentNode || null
  }
  return ele && ele.dataset ? ele.dataset[key] : undefined
}
