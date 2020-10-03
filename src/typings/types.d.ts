declare module '*.svg'
declare module '*.png'
declare module '*.jpg'

declare namespace svelte.JSX {
	interface HTMLAttributes<HTMLLabelElement> {
		for?: string
	}

	interface HTMLProps<HTMLAnchorElement> {
		noroute?: boolean
	}
}
