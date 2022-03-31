import debounce from 'lodash/debounce'

export default function ScrollNotifier(node: HTMLElement) {
  const onScroll = debounce(() => {
    const { scrollTop, offsetHeight, scrollHeight, clientHeight } = node

    // If its has no scroll
    if (scrollHeight === clientHeight) {
      node.dispatchEvent(new CustomEvent('nearbottom'))
      return
    }

    const targetBottom = scrollHeight - (15 / 100) * scrollHeight

    if (scrollTop + offsetHeight > targetBottom) {
      node.dispatchEvent(new CustomEvent('nearbottom'))
      return
    }
  }, 60)

  node.addEventListener('scroll', onScroll)

  requestAnimationFrame(onScroll)

  return {
    destroy() {
      node.removeEventListener('scroll', onScroll)
    },
  }
}
