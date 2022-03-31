import { io, Socket } from 'socket.io-client'
import { writable, Writable } from 'svelte/store'
import { Service } from 'typedi'
import BaseService from './Base'

@Service()
export default class SocketService extends BaseService {
  socket?: Socket

  connected: Writable<boolean> = writable(false)
  disconnected: Writable<boolean> = writable(false)

  constructor() {
    super()

    this.onConnect = this.onConnect.bind(this)
    this.onDisconnect = this.onDisconnect.bind(this)
    this.onConnectionError = this.onConnectionError.bind(this)
  }

  async init() {
    this.socket = io('wss://127.0.0.1:8080')

    this.socket.on('connect', this.onConnect)
    this.socket.on('disconnect', this.onDisconnect)
    this.socket.on('connect_error', this.onConnectionError)
  }

  //
  // ─── EVENTS ─────────────────────────────────────────────────────────────────────
  //

  onConnect() {
    this.connected.set(true)
    this.disconnected.set(false)
  }

  onConnectionError() {
    this.disconnected.set(true)
  }

  onDisconnect() {
    this.connected.set(false)
    this.disconnected.set(true)
  }
}
