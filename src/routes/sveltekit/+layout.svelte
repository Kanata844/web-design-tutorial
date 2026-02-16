<script lang="ts">
    import Frame from '$lib/components/Frame.svelte';
    import { menuList } from './menuList';

    let { children } = $props();
</script>

<Frame menuList={menuList}>
    {@render children()}
</Frame>