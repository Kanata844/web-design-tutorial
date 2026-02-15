<script lang="ts">
    import Frame from '$lib/components/Frame.svelte';

    let { children } = $props();
</script>

<Frame>
    {@render children()}
</Frame>