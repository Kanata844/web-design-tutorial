<script lang="ts">
    import { typescript } from "svelte-highlight/languages";
    import { Highlight } from "svelte-highlight";
    import { vbscriptHtml } from "svelte-highlight/languages";
    import { a11yDark } from "svelte-highlight/styles";
    import Pager from "$lib/components/Pager.svelte";
    import { resolve } from "$app/paths";
</script>

<svelte:head>
  {@html a11yDark}
</svelte:head>

<div>
    <h1>Svelteことはじめ</h1>
    <p>ここまでの内容で、Webサイトをデプロイする方法はわかったと思います。ここからは、実際にSvelteを使ってWebページをデザインする方法を見ていきましょう。ここからのページの内容は、<a href="https://svelte.jp/">Svelteの公式サイト</a>の内容を元に書かれています。また、<a href="https://svelte.jp/tutorial/svelte/welcome-to-svelte">公式チュートリアル</a>では、より丁寧に解説されているので、こちらもぜひやってみてください。</p>
    <h2>Svelteとは</h2>
    <p><strong>(以下、私としてもよくわかっていないところとなります。正確なところが気になるなら自分で調べてみてください。)</strong>Svelteとは、一言で言えばコンパイラです(多分)。Svelteの文法(といってもほぼHTML、CSS、JavaScriptそのままに近いですが)で書いたコードを、実際にブラウザで動くコードに変換してくれます。こいつを利用してWebアプリケーションを開発するためのフレームワークがSvelteKitとなり、これまで頑張って導入したものです。個人的に、生のHTML、CSS、JavaScriptを書くのと近い感覚で書けるので、お手軽でいいなと感じます。</p>
    <h2>とりあえず書いてみよう</h2>
    <p>なんだかんだ言われてもなにがなんだか分からないと思うので、とりあえずなんか書いていこうと思います。先程作ったプロジェクトの、src/routes/+page.svelteを開いてください。そしたら、次の内容が書かれていると思います。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<h1>Welcome to SvelteKit</h1>\n<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>`}/>
    <p>お気付きの通り、皆さんの知っているHTMLのままだと思います。では次に、これにスタイルをあてていきましょう。このコードの続きに、以下の内容を追加してください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<style>
    h1{
        color: red;
    }
    p{
        color: blue;
    }
</style>`}/>
    <p>文字の色が変わったと思います。このように、Svelteでは、CSSはstyleタグの中に書いていく形となります。</p>
    <p>また、特定のHTMLタグだけにCSSを適用したい場合は、style属性を直接書き込むことができます。HTMLの部分に、以下のコードを追加してみてください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<h1 style="color: green;">直接style属性を当てています</h1>`}/>
    <p>緑色の文字が追加されたと思います。</p>
    <p>では、次はJavaScriptを書いていきましょう。といっても、今後TypeScriptのほうが何かと役に立つと思うので、このサンプルではTypeScriptで書いていきます。(ここで扱う範囲では大して違いはないはずです。)では、次のコードを追加してみてください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={typescript} code={`<script lang="ts">
    console.log("Hello!");
<\/script>`}/>
    <p>追加してからこのページを開いて開発者ツールで見てみると、Hello!と出力されていると思います。このように、Svelteでは、スクリプトはscriptタグの中に書いていきます。ちなみに、TypeScriptではなくJavaScriptで書きたければ、lang="ts"の記述を消してください。</p>
    <p>関数も、同様にscriptタグの中に記述していきます。次の関数を、scriptタグの中に追加してください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={typescript} code={`function hello(){
    console.log("Hello!!");
}`}/>
    <p>この関数は、普通に呼び出してもいいですが、ここではボタンを使って呼び出してみましょう。HTMLの部分に、以下を追加してください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<button onclick={hello}>ボタン</button>`}/>
    <p>ボタンを押したら、開発者ツールのコンソールにHello!!と出力されると思います。</p>
    <p>上の例のように、<strong>Svelteでは、{"\{\}"}で囲んだ部分はJavaScript(TypeScript)として扱われます。</strong>後ほども紹介しますが、これは非常に重要であるため覚えておいてほしいです。</p>
    <p>ちなみに、<strong>alertなどの一部の関数は、ボタンなどから呼び出す関数内では使用できますが、それ以外の場所では使用できません。</strong>console.logをalertに変えてみると、ボタンの方ではうまくいくと思いますが、そうでない方ではうまく行かないと思います。</p>
    <p>さいごにもう一つ、{"\{\}"}内はスクリプトとして扱われるため、以下のようなボタンもしっかり動作します。やってみてください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<button onclick={()=>{alert("Hello!!!")}}>ボタン2</button>`}/>
    <p>※ちなみに()=>{"\{\}"}というのはアロー関数式と言って、普通の関数とだいたい同じです。(少し違うらしいです。)</p>
    <Pager prevTitle="前へ" prevURL={resolve("/sveltekit/page3")} nextTitle="次へ" nextURL={resolve("/sveltekit/page5")}/>
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