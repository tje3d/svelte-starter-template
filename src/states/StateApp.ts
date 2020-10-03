import { Service } from 'typedi'
import ServiceApp from '../services/ServiceApp'
import IState from './IState'

@Service()
export default class StateApp extends IState {
	constructor(private serviceApp: ServiceApp) {
		super()

		this.init = this.init.bind(this)
		this.destroy = this.destroy.bind(this)

		this.initialized = this.serviceApp.initialized
	}

	async init() {
		return this.serviceApp.init()
	}

	async destroy() {
		return this.serviceApp.destroy()
	}
}
