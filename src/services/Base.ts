import { writable, type Writable } from 'svelte/store'

export default abstract class BaseService {
  initialized: Writable<boolean> = writable(false)

  abstract init(): Promise<void>
}
