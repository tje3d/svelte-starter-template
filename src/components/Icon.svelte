<script lang="ts">
	export let name: string
</script>

{#await import(`src/assets/icons/${name}.svg`) then result}
	{@html result.default}
{/await}
