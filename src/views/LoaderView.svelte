<script lang="ts">
  import { onMount } from 'svelte'
  import ReloadServiceWorker from '../components/ReloadServiceWorker.svelte'
  import loaders from '../loaders'
  import FirstView from './FirstView.svelte'

  let isLoading = true

  function onLoaded() {
    isLoading = false
  }

  onMount(function () {
    loaders().then(onLoaded)
  })
</script>

{#if import.meta.env.PROD}
  <ReloadServiceWorker />
{/if}

{#if !isLoading}
  <FirstView />
{/if}
