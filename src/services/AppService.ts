import { get, readable, type Readable } from 'svelte/store'
import Container, { Service } from 'typedi'
import { AppBloc } from '../bloc/app/AppBloc'
import { AppState } from '../bloc/app/AppState'
import { safeInterval } from '../helpers/timers'
import BaseService from './Base'
import ThemeService from './ThemeService'

@Service()
export default class AppService extends BaseService {
  currentTime: Readable<number>
  appBloc: AppBloc

  constructor() {
    super()

    this.init = this.init.bind(this)
    this.destroy = this.destroy.bind(this)
    this._calculateCurrentTime = this._calculateCurrentTime.bind(this)
  }

  async init() {
    if (get(this.initialized)) {
      return
    }

    this.currentTime = readable(Date.now(), this._calculateCurrentTime)
    this.appBloc = new AppBloc(AppState.new())

    this.initialized.set(true)
  }

  async destroy() {
    Container.get(ThemeService).destroy()
  }

  //
  // ─── CALCULATORS ────────────────────────────────────────────────────────────────
  //

  _calculateCurrentTime(set: Function) {
    return safeInterval(function () {
      set(Date.now())
    }, 1000)
  }

  //
  // ─── EVENTS ─────────────────────────────────────────────────────────────────────
  //

  // ...
}
