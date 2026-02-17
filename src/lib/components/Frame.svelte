<script lang="ts">
    import { onMount } from "svelte";
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import Menu from "./Menu.svelte";

    interface MenuList {
        title: string;
        url: string;
    }

    let menuDisplayed = $state(true);

    let {children, menuList}: {children?: any, menuList?: MenuList[]} = $props();

    //onMount(()=>{menuDisplayed = !window.matchMedia("(max-width: 767px)").matches});
    //スマホでやると一瞬メニューが表示されてすぐにすっこんでいってしまう。
</script>

<Header/>
<div class="container">
    {#if menuList}
    <Menu bind:menuDisplayed menuList={menuList}/>
    {/if}
    {#if children}
    <div class="text {menuList? menuDisplayed? "menuDisplayed": "menuHidden": "noMenu"}" style="display: flex; justify-content: center;">
        <div style="width: 100%; max-width: 1440px;">
            {@render children()}
        </div>
    </div>
    {/if}
    <div class="footer {menuList? menuDisplayed? "menuDisplayedFooter": "menuHiddenFooter": "noMenuFooter"}">
        <Footer/>
    </div> 
</div>

<style>
    .text{
        margin-top: 5px;
        transition: 0.5s ease-out;
        width: auto;
    }
    .footer{
        transition: 0.5s ease-out;
    }
    .menuDisplayed{
        margin-left: 250px;
    }
    .menuHidden{
        margin-left: 20px;
    }
    .noMenu{
        margin-left: 0px;
    }
    .menuDisplayedFooter{
        margin-left: 230px;
    }
    .menuHiddenFooter{
        margin-left: 0px;
    }
    .noMenuFooter{
        margin-left: 0px;
    }
    @media screen and (max-width: 767px){
        .menuDisplayed{
            margin-left: 20px;
        }
        .menuDisplayedFooter{
            margin-left: 0px;
        }
    }
</style>