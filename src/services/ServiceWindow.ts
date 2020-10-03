import debounce from 'lodash/debounce'
import { get, Writable, writable } from 'svelte/store'
import { Service } from 'typedi'
import BaseService from './Base'

@Service()
export default class ServiceWindow extends BaseService {
	windowSize: Writable<{ width: number; height: number }>

	constructor() {
		super()

		this.init = this.init.bind(this)
		this.destroy = this.destroy.bind(this)
		this._onWindowResize = this._onWindowResize.bind(this)
	}

	async init() {
		if (get(this.initialized)) {
			return
		}

		this.windowSize = writable({
			width: window.innerWidth,
			height: window.innerHeight,
		})

		window.addEventListener('resize', debounce(this._onWindowResize, 500))

		this.initialized.set(true)
	}

	async destroy() {
		// ...
	}

	//
	// ─── EVENTS ─────────────────────────────────────────────────────────────────────
	//

	_onWindowResize() {
		this.windowSize.set({
			width: window.innerWidth,
			height: window.innerHeight,
		})
	}
}
