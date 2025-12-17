<script lang="ts">
    let {menuDisplayed = $bindable()} = $props();
</script>

<div class="container" style="left: {menuDisplayed? "0px": "-230px"}">
    <div class="list">
        <p>おいだｓｊｇ</p>
        <p>がおｊとえいｊ</p>
    </div>
    <button class="button" onclick={()=>{menuDisplayed = !menuDisplayed}}>{menuDisplayed? "<": ">"}</button>
</div>

<style>
    .container{
        position: fixed;
        display: flex;
        justify-content: space-between;
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
</style>