import { get, readable, type Readable } from 'svelte/store'
import { Service } from 'typedi'
import { AppBloc } from '../bloc/app/AppBloc'
import { AppState } from '../bloc/app/AppState'
import { safeInterval } from '../helpers/timers'
import BaseService from './Base'

@Service()
export default class AppService extends BaseService {
  currentTime: Readable<number>
  appBloc: AppBloc

  constructor() {
    super()

    this.init = this.init.bind(this)
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
