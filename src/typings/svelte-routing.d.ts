declare module 'svelte-routing' {
	export const Router: any
	export const Route: any
	export const Link: any
	export const navigate: (to: string, options: NavigateOptions) => void
	export const link: (node: Element) => { destroy(): void }
	export const links: (node: Element) => { destroy(): void }

	export interface NavigateOptions {
		replace?: boolean
		state: object
	}
}
