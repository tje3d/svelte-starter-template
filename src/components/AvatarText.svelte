<script lang="ts">
	export let text: string
	export let className: string = ''
</script>

<div
	class={`rounded-full bg-blue-500 text-white flex items-center justify-center ${className}`}>
	{text.slice(0, 1)}
</div>
