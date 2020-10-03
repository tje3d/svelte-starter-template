<script lang="ts">
	import loaders from 'src/loaders'
	import { onMount } from 'svelte'
	import App from './ViewApp.svelte'

	let isLoading = true

	onMount(function () {
		loaders().then(() => (isLoading = false))
	})
</script>

{#if !isLoading}
	<App />
{/if}
