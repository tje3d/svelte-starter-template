<script lang="ts">
  import { Route, router } from 'tinro'
  import ContactView from './ContactView.svelte'
  import HomeView from './HomeView.svelte'
  import LoginView from './LoginView.svelte'
  import NotFoundView from './NotFoundView.svelte'
  import SignupView from './SignupView.svelte'

  // Set router mode
  router.mode.hash()
</script>

<Route>
  <Route path="/" redirect="/login" />

  <Route path="/login"><LoginView /></Route>
  <Route path="/signup"><SignupView /></Route>
  <Route path="/home/*"><HomeView /></Route>
  <Route path="/contact"><ContactView /></Route>

  <Route fallback><NotFoundView /></Route>
</Route>
