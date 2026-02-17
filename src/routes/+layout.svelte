<script lang="ts">
	import icon from '$lib/assets/icon.png';
	import "./style.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={icon} />
</svelte:head>

{@render children()}

