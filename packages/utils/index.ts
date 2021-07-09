export function findParentNodeByClassName (node: Node | EventTarget | Element, className: string): Element | null {
  if ((<Element>node).classList.contains(className)) return <Element>node
  if ((<Node>node).parentNode) return findParentNodeByClassName((<Node>node).parentNode!, className)
  return null
}
