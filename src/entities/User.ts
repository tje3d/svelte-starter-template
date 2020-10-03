import { get, Writable, writable } from 'svelte/store'

export default class User {
	id: Writable<string>
	username: Writable<string>

	//
	// ─── FACTORY ────────────────────────────────────────────────────────────────────
	//

	static async fromObject(input: UserEntityInput) {
		const instance = new User()

		instance.id = writable(input.id)
		instance.username = writable(input.username)

		return instance
	}

	async toJson() {
		return {
			id: get(this.id),
			username: get(this.username),
		}
	}

	//
	// ─── METHODS ────────────────────────────────────────────────────────────────────
	//

	async update(input: User) {
		const fields = ['id', 'username']

		fields.map((key) => {
			this[key].set(get(input[key]))
		})
	}
}

export interface UserEntityInput {
	id: string
	username: string
}
