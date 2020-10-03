import { get } from 'svelte/store'
import { Service } from 'typedi'
import BaseService from './Base'

@Service()
export default class SettingsService extends BaseService {
	constructor() {
		super()

		this.init = this.init.bind(this)
		this.destroy = this.destroy.bind(this)
	}

	async init() {
		if (get(this.initialized)) {
			return
		}

		// ...

		this.initialized.set(true)
	}
}
