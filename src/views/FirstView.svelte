<script lang="ts">
  import { Route, router } from 'tinro'
  import HomeView from './HomeView.svelte'
  import NotFoundView from './NotFoundView.svelte'
  import ContactView from './ContactView.svelte'

  // Set router mode
  router.mode.hash()
</script>

<Route>
  <Route path="/" redirect="/home/tab1" />

  <Route path="/home/*"><HomeView /></Route>
  <Route path="/contact"><ContactView /></Route>

  <Route fallback><NotFoundView /></Route>
</Route>
