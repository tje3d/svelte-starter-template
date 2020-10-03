import { Writable, writable } from 'svelte/store'

export default abstract class IState {
	initialized: Writable<boolean> = writable(false)

	abstract async init()

	async destroy() {
		for (const key in this) {
			delete this[key]
		}
	}
}
