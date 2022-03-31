export default function focus(node: HTMLElement) {
  node.focus()

  return {
    destroy() {
      // ...
    },
  }
}
