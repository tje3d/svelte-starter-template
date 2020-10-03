import { derived, get, Readable, Writable, writable } from 'svelte/store'
import { Service } from 'typedi'
import config from '../config'
import User from '../entities/User'
import BaseService from './Base'

@Service()
export default class ServiceAuth extends BaseService {
	isLoggedIn: Readable<boolean>

	token: Writable<string | undefined> = writable(undefined)

	user: Writable<User | undefined> = writable(undefined)

	constructor() {
		super()

		this._calculateIsLoggedIn = this._calculateIsLoggedIn.bind(this)
		this._onIsLoggedInChanges = this._onIsLoggedInChanges.bind(this)

		this.isLoggedIn = derived(this.user, this._calculateIsLoggedIn)

		this.isLoggedIn.subscribe(this._onIsLoggedInChanges)
	}

	async init() {
		if (get(this.initialized)) {
			return
		}

		await this.loadInfoFromStorage()

		this.initialized.set(true)
	}

	//
	// ─── STORAGE ────────────────────────────────────────────────────────────────────
	//

	async loadInfoFromStorage() {
		const token = localStorage.getItem(config.auth.storageTokenKey)
		this.token.set(token || undefined)

		const userInfo = localStorage.getItem(config.auth.storageUserKey)

		if (userInfo) {
			const user = await User.fromObject(JSON.parse(userInfo))
			this.user.set(user)
		} else {
			this.user.set(undefined)
		}
	}

	async save(token?: string, user?: User) {
		if (token) {
			localStorage.setItem(config.auth.storageTokenKey, token)
		}

		if (user) {
			localStorage.setItem(
				config.auth.storageUserKey,
				JSON.stringify(await user.toJson()),
			)
		}
	}

	//
	// ─── CALCULATORS ────────────────────────────────────────────────────────────────
	//

	_calculateIsLoggedIn(user?: User) {
		return !!user
	}

	//
	// ─── EVENTS ─────────────────────────────────────────────────────────────────────
	//

	async onUserLoggedIn(token: string, user: User) {
		console.log('onUserLoggedIn')

		this.token.set(token)
		this.user.set(user)

		await this.save(token, user)
	}

	async onInvalidToken() {
		console.log('onInvalidToken')

		this.logout()
	}

	async _onIsLoggedInChanges(isLogin: boolean) {
		// ...
	}

	//
	// ─── METHODS ────────────────────────────────────────────────────────────────────
	//

	async logout() {
		console.log('logout')

		localStorage.removeItem(config.auth.storageTokenKey)
		localStorage.removeItem(config.auth.storageUserKey)
		this.user.set(undefined)
	}
}
