<script lang="ts">
    import Frame from '$lib/components/Frame.svelte';
    import { a11yDark } from 'svelte-highlight/styles';
    import { menuList } from './menuList';

    let { children } = $props();
</script>

<svelte:head>
    {@html a11yDark}
    <title>うぇぶでざ！SvelteKit編</title>
    <description>ここでは、SvelteKitの使い方を見ていきます。</description>
</svelte:head>

<Frame menuList={menuList}>
    {@render children()}
</Frame>