import 'reflect-metadata'
import './assets/css/main.scss'
import LoaderView from './views/LoaderView.svelte'

const app = new LoaderView({
  target: document.getElementById('app'),
})

export default app
