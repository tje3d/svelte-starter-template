import dayjs from './LoaderDayjs'
import dependencyInjector from './LoaderDependencyInjector'
import services from './LoaderServices'

export default async () => {
	await dependencyInjector()

	console.log('dependencyInjector loaded')

	await dayjs()

	console.log('dayjs loaded')

	await services()

	console.log('services loaded')
}
