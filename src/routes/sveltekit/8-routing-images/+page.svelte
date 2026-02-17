<script lang="ts">
    import { typescript } from "svelte-highlight/languages";
    import { Highlight } from "svelte-highlight";
    import { vbscriptHtml } from "svelte-highlight/languages";
    import Pager from "$lib/components/Pager.svelte";
    import { resolve } from "$app/paths";
</script>

<div>
    <h1>ページ遷移、画像の使い方</h1>
    <p>Svelteの機能は、大事なところは大体見てきたので、このページではページ遷移を作る方法、そして画像を使う方法を見ていこうと思います。</p>
    <h2>ページ遷移</h2>
    <p>いままでいじってきた、src/routes/+page.svelteは、https://(プロジェクトのドメイン)/というページに対応しています。では、https://(プロジェクトのドメイン)/exampleというページを作るにはどうすればいいでしょうか？では、早速作っていきましょう。</p>
    <p>src/routes/exampleというディレクトリを作り、そこに+page.svelteというファイルを作成してください。中身はなんでもいいです、下に適当な例でも置いときます。</p>
    <p>src/routes/example/+page.svelte</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<h1>ここはExampleページです</h1>`}/>
    <p>これで、https://(プロジェクトのドメイン)/exampleというページができました。では、最初のページから、こちらのページにリンクを飛ばすにはどうすればいいでしょうか。SvelteKitで、ページ遷移を行うときは、普通のHTMLと同様、aタグを使用します。src/routes/+page.svelteに以下のaタグを追加してください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<a href="/example">Exampleページに行く</a>`}/>
    <p>これでできたリンクを踏めば、先程作ったExampleページに飛ぶことができるでしょう。</p>
    <p>また、ページの階層を深くすることもできます。src/routes/exampleにhogeというディレクトリを作り、+page.svelteというファイルをそこに作成して、中身は適当に変えてください。</p>
    <p>src/routes/example/hoge/+page.svelte</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<h1>ここはHogeページです</h1>`}/>
    <p>以下のaタグを任意のページに追加すれば、Hogeページに飛ぶことができます。(/から始まるパスは、ルートからの相対パスなので、どのページからも同じように飛ぶことができます。)</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<a href="/example/hoge">Hogeページに行く</a>`}/>
    <h2>画像を使用する</h2>
    <p>ページ遷移はできるようになったと思うので、次は画像を使用する方法を見ていきましょう。表示したい画像を適当に用意してください。</p>
    <p>画像を表示させたいページの+page.svelteと同じ階層に、用意した画像を置いてください。そうしたら、その+page.svelteのスクリプトの部分に、以下のコードを追加してください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={typescript} code={`import picture from "./(ファイル名)";`}/>
    <p>※./から始まるパスは、そのファイルからの相対パスです。</p>
    <p>※pictureの部分は好きな名前で構いません。別の名前にするならこの後のpictureの部分を適宜変更してください。</p>
    <p>そうしたら、+page.svelteのHTMLの部分に、imgタグを以下のように追加してください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<img src={picture} alt="(画像の説明)"/>`}/>
    <p>画像が表示できたと思います。複数のページで共通に使う画像は、src/lib/assetsに置いて、$lib/assets/(ファイル名)からインポートするのがよいでしょう。</p>
    <Pager prevTitle="前へ" prevURL={resolve("/sveltekit/7-each-if")} nextTitle="次へ" nextURL={resolve("/sveltekit/9-nested-components")}/>
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