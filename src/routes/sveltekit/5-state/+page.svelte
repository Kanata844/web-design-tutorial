<script lang="ts">
    import { typescript } from "svelte-highlight/languages";
    import { Highlight } from "svelte-highlight";
    import { vbscriptHtml } from "svelte-highlight/languages";
    import Pager from "$lib/components/Pager.svelte";
    import { resolve } from "$app/paths";
</script>

<div>
    <h1>stateを使ってみよう</h1>
    <p>このページでは、生のJavaScriptにはない便利な機能、stateの使い方を見ていこうと思います。</p>
    <h2>stateとは</h2>
    <p>stateとは、<strong>値を変えるだけで、それを参照するHTML要素の内容も自動的に変わってくれる変数</strong>です。と言われてもなに言っているか分からないと思うので、ここから実際に書いていきましょう。</p>
    <h2>stateを使ってみる</h2>
    <p>前のページに引き続き、src/routes/+page.svelteの内容をいじっていきます。まず、scriptタグの中に、次のコードを追加してください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={typescript} code={`let count = $state(0);`}/>
    <p>stateは、$state(初期値)という形で宣言します。イメージとしては、上のコードは、let count = 0;の特別な場合、といった感じです。</p>
    <p>では、宣言をしたので、これを表示していきましょう。HTMLの部分に、次のコードを追加してください。前もお話したように、{"\{\}"}の中身はスクリプトとして扱われます。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<h1>現在のカウント:{count}</h1>`}/>
    <p>現在のカウント:0と表示されたと思います。これだけの内容では、stateを使わずに宣言しても同じ事ができます。stateの強みはここからです。この数を増やしていくボタンを作ってみましょう。HTMLの部分に次のコードを追加してください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<button onclick={()=>{count = count + 1;}}>増やす</button>`}/>
    <p>(ここでもアロー関数式を使いました、やっていることはcount = count + 1;する関数を任意の名前で作成し、onclickに指定したのと同じです。)これで作成したボタンを押してみると、表示される数字が実際に増えると思います。これをstateなしで実現しようとすると、かなり大変になると思います。</p>
    <p>stateには、文字列を指定することもできます。これを利用して、CSSをstateで変更することもできます。まず、以下のコードをscriptタグの中に追加してください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={typescript} code={`let color = $state("red");`}/>
    <p>そしたら、以下のコードをHTMLの部分に追加してください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<h1 style="color: {color}">色が変わります</h1>
<button onclick={()=>{color = "red";}}>赤に変える</button>
<button onclick={()=>{color = "blue";}}>青に変える</button>`}/>
    <p>ボタンを押したら色が変わるようになったと思います。</p>
    <p>注意点として、前回紹介したstyleタグの中身は、stateで変更することはできません。つまり、</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<style>
    h1{
        color: {color};
    }
</style>`}/>
    <p>とはできないということです。ただし、SvelteではCSSのクラスを普通に使うことができるので、それを利用して以下のようなことができます。</p>
    <p>まずは以下のスクリプトを追加します。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={typescript} code={`let size = $state("small");`}/>
    <p>次に、styleタグの中にクラスを定義します。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<style>
    .small{
        font-size: 10px;
    }
    .big{
        font-size: 30px;
    }
</style>`}/>
    <p>そしたら、以下のHTMLを追加します。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<h1 class="{size}">大きさが変わります</h1>
<button onclick={()=>{size = "small";}}>小さくする</button>
<button onclick={()=>{size = "big";}}>大きくする</button>`}/>
    <p>クラスを変更することで、大きさを変更することができたと思います。</p>
    <Pager prevTitle="前へ" prevURL={resolve("/sveltekit/4-svelte-start")} nextTitle="次へ" nextURL={resolve("/sveltekit/6-components")}/>
</div>

<style>
    *{
        margin: 5px;
        padding-bottom: 10px;
    }
    a{
        color: tomato;
    }
    h1{
        color: #33140e;
    }
    h2{
        color: #33140e;
    }
    strong{
        color: #33140e;
    }
</style>