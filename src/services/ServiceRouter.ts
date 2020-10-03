import { globalHistory } from 'svelte-routing/src/history.js'
import { navigate, NavigateOptions } from 'svelte-routing'
import { writable } from 'svelte/store'
import { Service } from 'typedi'
import BaseService from './Base'
import { ILocation } from '../interfaces/ILocation'

@Service()
export default class ServiceRouter extends BaseService {
	location = writable<ILocation>({})

	constructor() {
		super()

		this._onLocationChanges = this._onLocationChanges.bind(this)
	}

	async init() {
		this.location.set(globalHistory.location)

		globalHistory.listen(this._onLocationChanges)
	}

	//
	// ─── METHODS ────────────────────────────────────────────────────────────────────
	//

	navigate(path: string, options?: NavigateOptions) {
		return navigate(path, options)
	}

	//
	// ─── EVENTS ─────────────────────────────────────────────────────────────────────
	//

	_onLocationChanges() {
		this.location.set(globalHistory.location)
	}
}
