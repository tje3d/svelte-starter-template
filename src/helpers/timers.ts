export function safeInterval(callback: Function, time: number) {
  let timeout: NodeJS.Timeout | undefined = undefined

  async function tick() {
    if (await callback()) {
      return
    }

    timeout = setTimeout(tick, time)
  }

  function cleanUp() {
    if (typeof timeout !== undefined) {
      clearTimeout(timeout)
      timeout = undefined
    }
  }

  timeout = setTimeout(tick, time)

  return cleanUp
}
