import DayjsLoader from './DayjsLoader'
import ServiceLoader from './ServiceLoader'

export default async () => {
  console.log('Loader', 'Loading Services')
  await ServiceLoader()

  console.log('Loader', 'Loading Dayjs')
  await DayjsLoader()
}
