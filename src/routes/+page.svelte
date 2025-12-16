<script lang="ts">
    import {resolve} from "$app/paths"
    import Header from "$lib/components/Header.svelte";
</script>

<Header/>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="{resolve("/test")}">テストのページ</a> to read the documentation</p>

