import { Bloc } from '@felangel/bloc'
import { AppEvent, AppIncrement } from './AppEvent'
import { AppState } from './AppState'

export class AppBloc extends Bloc<AppEvent, AppState> {
  async *mapEventToState(event: AppEvent): AsyncIterableIterator<AppState> {
    // ─────────────────────────────────────────────────────────────────

    if (event instanceof AppIncrement) {
      yield this.state.copyWith({
        number: this.state.number + event.number,
      })
      return
    }

    // ─────────────────────────────────────────────────────────────────
  }
}
