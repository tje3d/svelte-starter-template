import Container from 'typedi'
import ServiceAuth from '../services/ServiceAuth'
import ServiceWindow from '../services/ServiceWindow'
import ServiceGraphQL from '../services/ServiceGraphQL'
import ServiceRouter from '../services/ServiceRouter'
import ServiceSettings from '../services/ServiceSettings'

export default async () => {
	await Container.get(ServiceSettings).init()
	console.log('ServiceSettings loaded')

	await Container.get(ServiceRouter).init()
	console.log('ServiceRouter loaded')

	await Container.get(ServiceWindow).init()
	console.log('ServiceDom loaded')

	await Container.get(ServiceAuth).init()
	console.log('ServiceAuth loaded')
}
