<script lang="ts">
	import ServiceApp from 'src/services/ServiceApp'
	import Container from 'typedi'

	const serviceApp = Container.get(ServiceApp)

	serviceApp.title.set('Home')
</script>

<p>Home</p>
