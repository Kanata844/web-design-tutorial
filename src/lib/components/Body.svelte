<script lang="ts">
    import Menu from "./Menu.svelte";

    interface MenuList {
        title: string;
        url: string;
    }

    let menuDisplayed = $state(false);

    let {children, menuList}: {children?: any, menuList?: MenuList[]} = $props();
</script>

<div class="container">
    {#if menuList}
    <Menu bind:menuDisplayed menuList={menuList}/>
    {/if}
    {#if children}
    <div class="text {menuList? menuDisplayed? "menuDisplayed": "menuHidden": "noMenu"}">
        {@render children()}
    </div>
    {/if}
</div>

<style>
    .text{
        margin-top: 5px;
        transition: 0.5s ease-out;
        width: auto;
    }
    .menuDisplayed{
        margin-left: 255px;
    }
    .menuHidden{
        margin-left: 25px;
    }
    .noMenu{
        margin-left: 5px;
    }
    @media screen and (max-width: 767px){
        .menuDisplayed{
            margin-left: 225px;
        }
    }
</style>