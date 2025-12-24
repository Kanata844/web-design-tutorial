<script lang="ts">
    import { resolve } from "$app/paths";

    const {style}: {style?: string} = $props();
</script>

<footer class="container" style={style}>
    <p><a href={resolve("/licenses")}>サードパーティライセンス</a></p>
</footer>

<style>
    .container{
        height: 200px;
        margin-top: 20px;
        background-color: gainsboro;
        border-top: solid 1px gray;
    }
    a{
        color: tomato;
    }
</style>