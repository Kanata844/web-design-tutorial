<script lang="ts">
    import { css, typescript } from "svelte-highlight/languages";
    import { Highlight } from "svelte-highlight";
    import { vbscriptHtml } from "svelte-highlight/languages";
    import Pager from "$lib/components/Pager.svelte";
    import { resolve } from "$app/paths";
    import { highlightAttachment } from "$lib/utils";
    import type { Attachment } from "svelte/attachments";

    let displayed = $state(false);

    const attachment: Attachment = (element) =>{
        new IntersectionObserver((entries) => {
            for(let i = 0; i < entries.length; i++){
                displayed = entries[i].isIntersecting;
            }
        }).observe(element);
    }
</script>

<div>
    <h1>ちょっとした小技</h1>
    <h2>リセットCSS</h2>
    <p>CSSを書いていて、ブラウザやデバイスによる表示の差をなくすためのリセットCSSを使いたくなることがあると思います。SvelteKitを使って、どう書くか悩むところですが、一例を示しておこうと思います。src/routes/reset.cssというファイルを作成し、内容は以下のようにしてください。(使いたいリセットCSSがあるならそれを使っても大丈夫です。)</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={css} code={`*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}`}/>
    <p>そしたら、src/routes/+layout.svelteのスクリプトの部分でインポートしてください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={typescript} code={`import "./reset.css";`}/>
    <p>表示がリセットされたのではないかと思います。</p>
    <h2>Intersection Observer APIとアタッチメント</h2>
    <p>ページを書いていて、要素が画面に表示されたら何か変化を起こしたくなることがあると思います。</p>
    <div style="height: 700px"></div>
    <h1 {@attach attachment} class={displayed? "displayed": "hidden"}>つまりこういうことです。</h1>
    <p>これを実現する方法を見ていきましょう。</p>
    <p>まずは、スクリプトの部分でAttachmentというものをインポートしてください。(TypeScriptのみ、JavaScriptでは不要です。)</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={typescript} code={`import type { Attachment } from "svelte/attachments";`}/>
    <p>そしたら、状態(表示されているか、されていないか)を表すためのstateを準備してください。(変数名はなんでもいいです。)</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={typescript} code={`let displayed = $state(false);`}/>
    <p>それができたら、なにがなんだか分からないと思いますが、次のコードを書いてください。JavaScriptの場合は、: Attachmentの部分は不要です。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={typescript} code={`const attachment: Attachment = (element) =>{
    new IntersectionObserver((entries) => {
        for(let i = 0; i < entries.length; i++){
            displayed = entries[i].isIntersecting;
        }
    }).observe(element);
}`}/>
    <p>定数名attachmentは、好きな名前で構いません。</p>
    <p>つぎに、CSSの部分に以下のクラスを追加してください。(クラス名はなんでもいいです。)</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={css} code={`.hidden{
    translate: -100%;
    transition: 1s;
}
.displayed{
    translate: 0%;
    transition: 1s;
}`}/>
    <p>translateは要素を移動させるプロパティ、transitionはプロパティに変化が起こったときに変化を一瞬で終わらせるのではなく、指定した時間をかけてゆっくりと変化させるプロパティです。<strong>何事もとりあえずtransitionをつけておけばいい感じに見えると思います。</strong></p>
    <p>では、ここまでできたら、画面に入ったタイミングで変化させる要素を追加します。HTMLの部分に以下を追加してください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<h1 {@attach attachment} class={displayed? "displayed": "hidden"}>画面に入ったら動きます</h1>`}/>
    <p>これで、画面に入ったら右から中に入ってくる文字を作ることができたと思います。</p>
    <p>ですが、プログラミングを勉強したての人はなにが起こったか正直わけわかめになってしまうのが普通だと思うので、一応少し解説を入れておきます。(理解できなくても、上のやつをコピペして少し書き換えることができれば大丈夫だと思います。)</p>
    <p>まず、Attachmentについてですが、これは引数を一つ取る関数です。HTMLの要素に対し、{"{@attach (変数名)}"}とすることで、この要素が読み込まれたときにこの関数が実行され、引数にはその要素が入ります。</p>
    <p>次に、Intersection Observer APIについてです。ちょっとこれはここで説明していると長くなるのでだいぶん端折ります。先程のように書いて@attachすると、attachした要素が画面に入る、もしくは画面から出るタイミングで、(entries)=>{"{……}"}(先程書いてもらった関数)が呼ばれます。entriesは変化があった要素の配列で、普通は長さは1です。配列の中身の型は<a href="https://developer.mozilla.org/ja/docs/Web/API/IntersectionObserverEntry">IntersectionObserverEntry型</a>で、isIntersectingは、画面内にあればtrue、なければfalseになります。ちょっと自分でもなに書いてるかよく分かんなくなってきたんですけど、とりあえず上の例のdisplayedを好きなstateに置き換えてもらえば、コピペで動くと思うので、頑張ってください。もっとカスタマイズしたいとなったときは、頑張ってググって理解するかAIに聞くかしてください。</p>
    <p>最後に、三項演算子ですが、{"{条件式? 値1: 値2}"}と書くと、条件式がtrueなら値1、falseなら値2として扱われるものです。ここでは、{'class={displayed? "displayed": "hidden"}'}としたので、displayedがtrueならclassはdisplayed、falseならhiddenとなります。</p>
    <p>基本的に、先程作った<strong>Attachmentは使いまわしはできない</strong>と思っていてください。stateを複数個扱いたいなら、その数だけAttachmentを作ってください。</p>
    <Pager prevTitle="前へ" prevURL={resolve("/sveltekit/9-nested-components")}/>
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
    .hidden{
        translate: -100%;
        transition: 1s;
    }
    .displayed{
        translate: 0%;
        transition: 1s;
    }
</style>