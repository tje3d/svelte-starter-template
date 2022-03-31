export class AppEvent {}

export class AppIncrement extends AppEvent {
  constructor(public number: number) {
    super()
  }
}
