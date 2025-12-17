<script>
    import Menu from "./Menu.svelte";

    let menuDisplayed = $state(true);

    let {children} = $props();
</script>

<div class="container">
    <Menu bind:menuDisplayed/>
    <div class="text" style:margin-left={menuDisplayed? "255px": "25px"}>
        {@render children()}
    </div>
</div>

<style>
    .text{
        margin-top: 5px;
        transition: 0.5s ease-out;
    }
</style>