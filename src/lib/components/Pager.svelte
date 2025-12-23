<script lang="ts">
    let {prevTitle, prevURL, nextTitle, nextURL}: {prevTitle?: string, prevURL?: string, nextTitle?: string, nextURL?: string} = $props();
</script>

<div class="container">
    {#if prevTitle && prevURL}
    <div><a href={prevURL}>{prevTitle}</a></div>
    {/if}
    {#if nextURL && nextTitle}
    <div><a href={nextURL}>{nextTitle}</a></div>
    {/if}
</div>

<style>
    .container{
        display: flex;
        justify-content: space-around;
        padding-top: 5px;
        margin-top: 10px;
        border-top: solid 1px #886666;
    }
    a{
        color: tomato;
    }
</style>