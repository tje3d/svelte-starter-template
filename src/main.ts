import 'reflect-metadata'
import './assets/css/main.scss'
import ViewLoader from './views/ViewLoader.svelte'

const app = new ViewLoader({
  target: document.getElementById('app'),
})

export default app
