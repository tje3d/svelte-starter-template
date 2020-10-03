<script lang="ts">
	import { link } from 'svelte-routing'

	export let className = ''
	export let href = ''
	export let replace: boolean | undefined = undefined
	export let noroute: boolean | undefined = undefined
</script>

<a {href} class={className} {noroute} {replace} use:link><slot /></a>
