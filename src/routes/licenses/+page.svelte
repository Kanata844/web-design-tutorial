<script lang="ts">
    import licenses from "./licenses.json"
</script>

{#each licenses as license}
<h2>{license.name}</h2>
<h3>{license.version}</h3>
<h3>{license.identifier}</h3>
<p>{license.text}</p>
{/each}