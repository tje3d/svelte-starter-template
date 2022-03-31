import Container from 'typedi'
import AppService from '../services/AppService'
import SocketService from '../services/SocketService'
import ThemeService from '../services/ThemeService'

export default async function () {
  console.log('Loading AppService')
  await Container.get(AppService).init()

  console.log('Loading SocketService')
  await Container.get(SocketService).init()

  console.log('Loading ThemeService')
  await Container.get(ThemeService).init()
}
