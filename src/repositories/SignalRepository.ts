import { Inject, Service } from 'typedi'
import SocketService from '../services/SocketService'

@Service()
export default class SignalRepository {
  @Inject((type) => SocketService)
  socketService: SocketService

  /**
   * Load signals by paginate
   * @returns Promise<any>
   */
  async paginate(): Promise<Signal[]> {
    return new Promise((resolve, reject) => {
      this.socketService.socket
        .timeout(6000)
        .emit('signals:list', function (err: any, response: Signal[]) {
          if (err) {
            reject(err)
            return
          }

          resolve(response)
        })
    })
  }
}
