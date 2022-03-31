import { getValIfDefined as v } from '../../helpers/utils'

export interface AppStateProperties {
  number: number
}

export class AppState implements AppStateProperties {
  number: number = 0

  constructor(input: Partial<AppStateProperties>) {
    for (let i in input) {
      this[i] = input[i]
    }
  }

  static new() {
    return new AppState({})
  }

  copyWith(i: Partial<AppStateProperties>) {
    return new AppState({
      number: v(i['number'], this.number),
    })
  }
}
