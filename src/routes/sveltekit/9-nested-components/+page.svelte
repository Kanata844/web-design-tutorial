<script lang="ts">
    import { typescript } from "svelte-highlight/languages";
    import { Highlight } from "svelte-highlight";
    import { vbscriptHtml } from "svelte-highlight/languages";
    import Pager from "$lib/components/Pager.svelte";
    import { resolve } from "$app/paths";
    import { highlightAttachment } from "$lib/utils";
</script>

<div>
    <h1>自作コンポーネントの入れ子</h1>
    <p>自作コンポーネントも、実は子を持つことができます。とりあえず、例を見てみましょう。src/lib/components/Parent.svelteを作成し、中身を以下のようにしてください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<script lang="ts">
    let {children} = $props();
<\/script>

<h1>これは親コンポーネントです、下に子が表示されます。</h1>
{@render children()}`}/>
    <p>できたら、src/routes/+page.svelteなどのファイルで<code {@attach highlightAttachment}>import Parent from "$lib/components/Parent.svelte"</code>をし、以下のように使ってみてください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<Parent>
    <h2>これは子です</h2>
</Parent>`}/>
    <p>Parentコンポーネントの中身も表示されたと思います。このように、コンポーネントの子要素は、$props()でchildrenというプロパティで与えられ、HTMLの部分で{"{@render children()}"}と書くと表示することができます。</p>
    <p>Parentと同じ要領で、src/routes以下の好きな場所に+layout.svelteを置けば、置いた場所か、それよりも深い階層にあるページは、すべて+layout.svelteの子コンポーネントのように表示されます。実際に、デフォルトのsrc/routes/+layout.svelteは、以下のような内容になっていると思います。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={vbscriptHtml} code={`<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
<\/script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
`}/>
    <Pager prevTitle="前へ" prevURL={resolve("/sveltekit/8-routing-images")} nextTitle="次へ" nextURL={resolve("/sveltekit/10-tips")}/>
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