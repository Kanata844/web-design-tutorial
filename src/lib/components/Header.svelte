<script>
    import { resolve } from "$app/paths";

</script>
<header>
    <div class="header-background">
        <p class="utcode-learn"><a href="https://learn.utcode.net">ut.code(); Learnへ戻る</a></p>
        <p class="title"><a href={resolve("/")}>作ったサイトを公開してみよう</a></p>
    </div>
    <div class="navigation-background">
            <p><a href={resolve("/vite-ts/page1")}>Vite + TS</a></p>
            <p><a href={resolve("/astro/page1")}>Astro</a></p>
            <p><a href={resolve("/sveltekit/page1")}>SvelteKit</a></p>
    </div>
</header>

<style>
    header{
        box-shadow: 0px 4px 4px gray;
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 21;
    }
    .header-background{
        box-shadow: 0px 2px 2px gray;
        position: relative;
        background-color: whitesmoke;
        display: flex;
        justify-content: center;
        align-items: top;
        height: 65px;
    }
    .title a{
        font-size: 40px;
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
        align-items: center;
        background-color: white;
    }
    .navigation-background a{
        font-size: 15px;
        color: #66281d;
        text-decoration: none;
    }
    @media screen and (max-width: 1279px){
        .title a{
            font-size: 30px;
        }
    }
    @media screen and (max-width: 767px){
        .title a{
            font-size: 20px;
        }
    }
</style>