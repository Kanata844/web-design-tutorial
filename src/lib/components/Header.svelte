<script>
    import { resolve } from "$app/paths";

</script>
<header>
    <div class="header-background">
        <p class="utcode-learn"><a href="https://learn.utcode.net">ut.code(); Learnへ戻る</a></p>
        <p class="title"><a href={resolve("/")}>作ったサイトを公開してみよう</a></p>
    </div>
    <div class="navigation-background">
            <p><a href="">直接配信</a></p>
            <p><a href="">Vite + TS</a></p>
            <p><a href={resolve("/sveltekit/page1")}>SvelteKit</a></p>
    </div>
</header>

<style>
    header{
        box-shadow: 0px 4px 4px gray;
        position: sticky;
        top: 0;
    }
    .header-background{
        box-shadow: 0px 2px 2px gray;
        position: relative;
        background-color: whitesmoke;
        display: flex;
        justify-content: center;
        align-items: top;
        width: 100%;
        height: 65px;
    }
    .title a{
        font-size: 3vw;
        color: tomato;
        font-family: sans-serif;
        font-weight: bold;
        text-decoration: none;
    }
    .utcode-learn{
        margin: 5px;
        position: absolute;
        left: 0px;
        bottom: 0px;
    }
    .utcode-learn a{
        font-weight: bold;
        color: tomato;
        text-decoration: none;
    }
    .navigation-background{
        height: 25px;
        border-top: 1px solid #33140e;
        display: flex;
        justify-content: space-around;
    }
    .navigation-background a{
        font-size: 15px;
        color: #66281d;
        text-decoration: none;
    }
</style>