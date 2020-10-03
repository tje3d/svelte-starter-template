import dayjs from 'dayjs'
import { get, Readable, readable, Writable, writable } from 'svelte/store'
import { Service } from 'typedi'
import config from '../config'
import { safeInterval } from '../helpers/timers'
import BaseService from './Base'

@Service()
export default class ServiceApp extends BaseService {
	currentTime: Readable<string>

	title: Writable<string> = writable(config.title)

	subTitle: Writable<string> = writable('')

	constructor() {
		super()

		this.init = this.init.bind(this)
		this.destroy = this.destroy.bind(this)
		this._calculateCurrentTime = this._calculateCurrentTime.bind(this)
		this._onTitleChanges = this._onTitleChanges.bind(this)

		this.title.subscribe(this._onTitleChanges)
	}

	async init() {
		if (get(this.initialized)) {
			return
		}

		this.currentTime = readable(
			dayjs().format('dddd DD MMMM YY'),
			this._calculateCurrentTime,
		)

		this.initialized.set(true)
	}

	async destroy() {
		// ...
	}

	//
	// ─── CALCULATORS ────────────────────────────────────────────────────────────────
	//

	_calculateCurrentTime(set: Function) {
		return safeInterval(function () {
			set(dayjs().format('dddd DD MMMM YY'))
		}, 60000)
	}

	//
	// ─── EVENTS ─────────────────────────────────────────────────────────────────────
	//

	_onTitleChanges() {
		this.subTitle.set('')
	}
}
