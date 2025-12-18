<script lang="ts">
    interface MenuList {
    	title: string;
    	url: string;
    }
    let {menuDisplayed = $bindable(), menuList}: {menuDisplayed: boolean, menuList?: MenuList[]} = $props();
</script>

<div class="container {menuDisplayed? "menuDisplayed": "menuHidden"}">
    <div class="list">
        {#each menuList as item}
        <p><a href={item.url}>{item.title}</a></p>
        {/each}
    </div>
    <button class="button" onclick={()=>{menuDisplayed = !menuDisplayed}}>{menuDisplayed? "<": ">"}</button>
</div>

<style>
    .menuDisplayed{
        left: 0px;
    }
    .menuHidden{
        left: -230px;
    }
    .container{
        position: fixed;
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        width: 250px;
        height: 100%;
        transition: 0.5s ease-out;
    }
    .list{
        width: 100%;
        border: 2px solid gray;
        border-left: 0px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 2px 2px 4px gray;
    }
    .button{
        width: 30px;
        height: 30px;
        font-size: 20px;
        margin-right: 0px;
        box-shadow: 2px 2px 4px gray;
    }

    @media screen and (max-width: 767px){
        .container{
            width: 220px;
        }
        .menuHidden{
            left: -200px;
        }
    }
</style>