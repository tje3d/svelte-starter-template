import { Writable, writable } from 'svelte/store'

export default abstract class BaseService {
  initialized: Writable<boolean> = writable(false)

  abstract init(): Promise<void>

  async destroy() {
    for (const key in this) {
      delete this[key]
    }
  }
}
