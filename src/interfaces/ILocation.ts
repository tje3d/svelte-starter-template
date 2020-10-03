export interface ILocation {
	hash?: string
	host?: string // "127.0.0.1:8080"
	hostname?: string // "127.0.0.1"
	href?: string // "https://127.0.0.1:8080/mytests"
	key?: string // "1599508777696"
	origin?: string // "https://127.0.0.1:8080"
	pathname?: string
	port?: string
	protocol?: 'http' | 'https'
	reload?: Function
	replace?: Function
	search?: ''
	state?: { key: string }
	toString?: Function
}
