<script lang="ts">
  import { Route, router } from 'tinro'
  import View404 from './View404.svelte'
  import ViewContact from './ViewContact.svelte'
  import ViewHome from './ViewHome.svelte'

  // Set router mode
  router.mode.hash()
</script>

<Route>
  <Route path="/" redirect="/home/tab1" />

  <Route path="/home/*"><ViewHome /></Route>
  <Route path="/contact"><ViewContact /></Route>

  <Route fallback><View404 /></Route>
</Route>
