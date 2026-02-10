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
    <h1>コンポーネントを利用する</h1>
    <p>ここからも引き続きSvelteの便利機能を見ていきましょう。ここでは、作ったページの部品を何度も再利用する、コンポーネントというものを見ていきます。</p>
    <h2>まずは書いてみる</h2>
    <p>早速ですが、コンポーネントを作ってみましょう。src/libに、componentsというディレクトリを作り、そこにCounter.svelteというファイルを作成して、それを開いてください。(場所は実はどこでもいいのですが、どうやらここにコンポーネントを置くことも多いようなので今回はそれでやってみます。)</p>
    <p>できたら、そのファイルの内容を以下のようにしてください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<script lang="ts">
    let count = $state(0);
<\/script>

<h1>現在のカウント:{count}</h1>
<button onclick={()=>{count++;}}>増やす</button>`}/>
    <p>※count++は、count = count + 1 と同じ意味です。</p>
    <p>できたら、src/routes/+page.svelteに戻って、スクリプトに以下のコードを追加します。そろそろこのファイルの内容もごちゃごちゃしてきたと思うので、ここらへんで一回全部消してしまってから続きをやってもいいかもしれませんね。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={typescript} code={`import Counter from "$lib/components/Counter.svelte";`}/>
    <p>src/libに置いたファイルは、$libとすることでここからインポートできます。</p>
    <p>そうしたら、HTMLの部分に以下のようにCounterを二個配置してみましょう。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<Counter/>\n<Counter/>`}/>
    <p>そうすると、ボタンを押した数を数えるカウンターが2つできていると思います。このように、繰り返し使いたい部品は、コンポーネントにすることで、同じ内容を何度も書かなくても良くなります。</p>
    <h2>コンポーネントにプロパティを渡す</h2>
    <p>もしコンポーネントを使うとき、コンポーネントの方にデータを渡せたら便利だと思います。と書いてはみたもののなにを言ってるのかさっぱりだと思うので、実際になにか作ってみようと思います。src/lib/componentsに、Profile.svelteを作成してください。</p>
    <p>できたら、(まだなにも中身を書いていませんが、)src/routes/+page.svelteでインポートしてください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={typescript} code={`import Profile from "$lib/components/Profile.svelte";`}/>
    <p>そうしたら、+page.svelteのHTMLに、以下のコードを追加してください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<Profile name="Taro" gender="male" birthYear="1940" occupation="politician"/>`}/>
    <p><strong>(※上の例と筆者の政治的信条には一切関係はありません。)</strong>何がしたいかなんとなくわかってもらえたでしょうか。そうです、プロパティにその人のプロフィールを渡して、その人を紹介するコンポーネントを作りたいわけですね。では、続きを書いていこうと思います。先程作成したProfile.svelteに、以下のコードを書いてください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<script lang="ts">
    let p = $props();
<\/script>

<h1>{p.name}</h1>
<p>性別:{p.gender}</p>
<p>生まれ年:{p.birthYear}</p>
<p>職業:{p.occupation}</p>`}/>
    <p>このように、コンポーネントに渡したプロパティは、$props()を使うことで、オブジェクトとして取り出すことができます。こうすることで、例えばSanaeさんを紹介したくなったときにもProfileコンポーネントを使い回すことができます。</p>
    <p>ちなみに、$props()はオブジェクトなので、(JavaScriptを学びたての人にはあまり馴染みがないと思いますが、)分割代入というものを使うことができます。というか、むしろSvelte公式は分割代入を使うことを前提にしてそうな雰囲気です。分割代入の文法について解説するほど暇じゃなかったので、各自調べてください(無責任)。分割代入を使った場合のProfile.svelteのコードは以下のようになります。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<script lang="ts">
    let {name, gender, birthYear, occupation} = $props();
<\/script>

<h1>{name}</h1>
<p>性別:{gender}</p>
<p>生まれ年:{birthYear}</p>
<p>職業:{occupation}</p>`}/>
    <p>先程、分割代入がデフォルトといったのは、$bindable()という機能が分割代入をしないと使えないからです。これは、子コンポーネント側の変更を親コンポーネント側に伝える機能ですが、そこまで深堀りするのはこのページの趣旨じゃないので、気になる人は各自調べてください。</p>
    <p>最後に補足ですが、コンポーネント内でも普通にCSSは使うことができます。書いたCSSが適用される範囲は、そのコンポーネントの中だけです。(子コンポーネントにも影響を与えません。)また、コンポーネント内で定義したクラスはそのコンポーネントの中でのみ有効なので、違うコンポーネントならクラスの名前が被っても問題ありません。何を言っているのかわからないかもしれませんが、以下のコードの挙動を見てみると何となく分かると思います。</p>
    <p>src/routes/+page.svelte</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<script lang="ts">
    import Counter from "$lib/components/Counter.svelte";
    import Profile from "$lib/components/Profile.svelte";
<\/script>

<h1>h1の色はここにしか反映されない</h1>
<Counter/>
<Profile name="Sanae" gender="female" birthYear="1961" occupation="politician"/>

<style>
    h1{
        color: red;
        
    }
</style>`}/>
    <p>src/lib/components/Counter.svelte</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<script lang="ts">
    let count = $state(0);
<\/script>

<h1>現在のカウント:{count}</h1>    <!--このh1の色は赤にはならない-->
<button class="blue" onclick={()=>{count++;}}>増やす</button>

<style>
    .blue{
        color: blue;
    }
</style>`}/>
    <p>src/lib/components/Profile.svelte</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<script lang="ts">
    let {name, gender, birthYear, occupation} = $props();
<\/script>

<h1>{name}</h1>    <!--このh1の色は赤にはならない-->
<p class="blue">性別:{gender}</p>
<p>生まれ年:{birthYear}</p>
<p>職業:{occupation}</p>

<style>
    .blue{
        color: green;    /*クラスの名前が被っているが、問題ない*/
    }
</style>`}/>
    <Pager prevTitle="前へ" prevURL={resolve("/sveltekit/page5")} nextTitle="次へ"/>
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