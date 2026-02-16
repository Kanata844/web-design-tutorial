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
    <h1>Eachブロック、Ifブロック</h1>
    <p>ここでも、Svelteの便利な機能を見ていきましょう。以下のようなオブジェクトの配列があったとします。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={typescript} code={`let primeMinisters = [
    {
        name: "Taro",
        gender: "male",
        birthYear: "1940",
        party: "Jimintou",
    },
    {
        name: "Yukio",
        gender: "male",
        birthYear: "1947",
        party: "Minshutou",
    },
    {
        name: "Naoto",
        gender: "male",
        birthYear: "1946",
        party: "Minshutou",
    },
    {
        name: "Yoshihiko",
        gender: "male",
        birthYear: "1957",
        party: "Minshutou",
    },
    {
        name: "Shinzo",
        gender: "male",
        birthYear: "1954",
        party: "Jimintou",
    }
];`}/>
    <p>この人たちのプロフィールを全部表示したいと思います。しかし、全員分直接書くのは大変ですね。そこで役に立つのがEachブロックです。src/routes/+page.svelteのスクリプトの部分に上の配列を追加し、HTMLの部分に以下のコードを追加してください。(Profileは、前のページで作った#lib/components/Profile.svelteからインポートしてください。)</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`{#each primeMinisters as primeMinister}
    <Profile name={primeMinister.name} gender={primeMinister.gender} birthYear={primeMinister.birthYear} party={primeMinister.party}/>
{/each}`}/>
    <p>上の例のように、Eachブロックは、{"{#each (配列名) as (配列の各要素に一時的につける名前)}"}という構文でHTMLの中に書きます。最後に{"{/each}"}と書いて締め、その間に挟んだ内容を、配列の各要素の分だけ繰り返します。</p>
    <p>Eachブロックの使い方はなんとなくわかったと思うので、次はIfブロックの使い方を見ていきましょう。Eachブロックと組み合わせて使うと便利なので、先程のコードを少し改造していきます。src/routes/+page.svelteのHTMLの部分です。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`{#each primeMinisters as primeMinister}
    {#if primeMinister.party === "Jimintou"}
        <h2>この人は、自民党の総理大臣です。</h2>
    {:else if primeMinister.party === "Minshutou"}
        <h2>この人は、民主党の総理大臣です。</h2>
    {:else}
        <h2>この人は、その他の党の総理大臣です。</h2>
    {/if}
    <Profile name={primeMinister.name} gender={primeMinister.gender} birthYear={primeMinister.birthYear} party={primeMinister.party}/>
{/each}`}/>
    <p>プロフィールの前に、どこの党の総理大臣か表示する文が加わったと思います。このように、Ifブロックは、{"{#if 条件式}、{:else if 条件式}、{:else}、{/if}"}と書いて、それぞれの条件で表示させたいものをその中に書きます。今回はEachブロックと組み合わせましたが、Ifブロック単独でも使うことができます。src/lib/components/Counter.svelteを以下のように改造してみましょう。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<script lang="ts">
    let count = $state(0);
<\/script>

<h1>現在のカウント:{count}</h1>    <!--このh1の色は赤にはならない-->
<button class="blue" onclick={()=>{count++;}}>増やす</button>
{#if count <=5}
    <p>5回以下です</p>
{:else if count <= 10}
    <p>10回以下です</p>
{:else}
    <p>10回を超えました!すごい!</p>
{/if}`}/>
    <p>10回を超えたら褒めてもらえるようになったと思います。</p>
    <Pager prevTitle="前へ" prevURL={resolve("/sveltekit/page6")} nextTitle="次へ" nextURL={resolve("/sveltekit/page8")}/>
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