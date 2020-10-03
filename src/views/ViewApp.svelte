<script lang="ts">
	import LayoutDefault from 'src/layouts/Default.svelte'
	import ServiceApp from 'src/services/ServiceApp'
	import StateApp from 'src/states/StateApp'
	import { onDestroy, onMount } from 'svelte'
	import { Route, Router } from 'svelte-routing'
	import { derived } from 'svelte/store'
	import Container from 'typedi'
	import ViewHome from './ViewHome.svelte'

	export let url = ''

	const serviceApp = Container.get(ServiceApp)
	const state = Container.get(StateApp)
	const initialized = state.initialized
	const title = serviceApp.title
	const subTitle = serviceApp.subTitle
	const finalTitle = derived([title, subTitle], _calculateFinalTitle)

	function _calculateFinalTitle([title, sub]: [string, string?]) {
		if (!sub) {
			return title
		}

		return `${title} - ${sub}`
	}

	onMount(state.init)

	onDestroy(state.destroy)
</script>

<svelte:head>
	<title>{$finalTitle}</title>
</svelte:head>

{#if $initialized}
	<Router {url}>
		<LayoutDefault>
			<Route path="/" component={ViewHome} />
		</LayoutDefault>
	</Router>
{/if}
