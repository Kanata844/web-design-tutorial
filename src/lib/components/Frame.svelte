<script lang="ts">
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import Menu from "./Menu.svelte";

    interface MenuList {
        title: string;
        url: string;
    }

    let menuDisplayed = $state(false);

    let {children, menuList}: {children?: any, menuList?: MenuList[]} = $props();
</script>

<Header/>
<div class="container">
    {#if menuList}
    <Menu bind:menuDisplayed menuList={menuList}/>
    {/if}
    {#if children}
    <div class="text {menuList? menuDisplayed? "menuDisplayed": "menuHidden": "noMenu"}">
        {@render children()}
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
            margin-left: 225px;
        }
        .menuDisplayedFooter{
            margin-left: 205px;
        }
    }
</style>