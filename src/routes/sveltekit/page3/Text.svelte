<script>
    import { Highlight } from "svelte-highlight";
    import { resolve } from "$app/paths";
    import Pager from "$lib/components/Pager.svelte";
    import { bash, javascript } from "svelte-highlight/languages";
    import { a11yDark } from "svelte-highlight/styles";
    import picture1 from "./picture1.jpg";
    import picture2 from "./picture2.jpg";
    import picture3 from "./picture3.png";
    import picture4 from "./picture4.jpg";
    import picture5 from "./picture5.png";
</script>

<svelte:head>
  {@html a11yDark}
</svelte:head>

<div>
    <h1 style="padding-bottom: 10px;">Cloudflare Pagesで公開する</h1>
    <p style="padding-bottom: 10px;">ここでは、作ったサイトをCloudflare Pagesにデプロイする方法を見ていきます。GitHub Pagesで公開してしまった場合はこれをする必要はありません。GitHub Pagesからこちらに移転する場合は、特に特別な操作を行わなくても公開自体はできると思います。このページは、<a href="https://svelte.jp/docs/kit/adapter-cloudflare">Svelteの公式サイト</a>の内容を元に書かれているので、そちらも参考にしてみてください。</p>
    <h2 style="padding-bottom: 10px;">0.はじめに</h2>
    <p style="padding-bottom: 10px;">まずは、Cloudflareのアカウントを作成してください。ブラウザでCloudflareと検索すれば、上の方に出てくると思うのでそこから作成できます。</p>
    <h2 style="padding-bottom: 10px;">1.adapter-cloudflareの使用</h2>
    <p style="padding-bottom: 10px;">まずは、以下のコマンドを実行してadapter-cloudflareをインストールしてください。</p>
    <Highlight style="max-width: 600px; padding-bottom: 10px;" language={bash} code={'npm i -D @sveltejs/adapter-cloudflare'}/>
    <p style="padding-bottom: 10px;">できたら、プロジェクトのルートにあるsvelte.config.jsの内容を以下のものに書き換えます。</p>
    <Highlight style="max-width: 600px; padding-bottom: 10px;" language={javascript} code={`import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// See below for an explanation of these options
			config: undefined,
			platformProxy: {
				configPath: undefined,
				environment: undefined,
				persist: undefined
			},
			fallback: 'plaintext',
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		})
	}
};

export default config;`}/>
    <p style="padding-bottom: 10px;">ここまでできたら、変更をリモートに反映しておきましょう。次のコマンドを順番に実行してください。</p>
    <Highlight style="max-width: 600px; padding-bottom: 10px;" language={bash} code={'git add --all'}/>
    <Highlight style="max-width: 600px; padding-bottom: 10px;" language={bash} code={'git commit -m "何らかのコミットメッセージ"'}/>
    <Highlight style="max-width: 600px; padding-bottom: 10px;" language={bash} code={'git push origin HEAD'}/>
    <h2>2.Cloudflare Pagesにデプロイする</h2>
    <p style="padding-bottom: 10px;">アカウントを作った後、この画面が表示されている人は、赤丸をつけた始めるの部分を押してください。</p>
    <img src={picture1} alt="cloudflareの画面1" style="width:95%; max-width:700px; height:auto; margin-right:10px; border: 1px solid #33140e;"/>
    <p style="padding-bottom: 10px;">そうでない人は、トップページの右上にある追加のボタンから、Pagesを選択してください。</p>
    <img src={picture2} alt="cloudflareの画面2" style="width:95%; max-width:700px; height:auto; margin-right:10px; border: 1px solid #33140e;"/>
    <p style="padding-bottom: 10px;">そうしたら、既存のGitリポジトリをインポートするを選んでください。</p>
    <img src={picture3} alt="cloudflareの画面3" style="width:95%; max-width:700px; height:auto; margin-right:10px; border: 1px solid #33140e;"/>
    <p style="padding-bottom: 10px;">この画面から、デプロイするリポジトリを選択してください。</p>
    <img src={picture4} alt="cloudflareの画面4" style="width:95%; max-width:700px; height:auto; margin-right:10px; border: 1px solid #33140e;"/>
    <p style="padding-bottom: 10px;">そしたら、次の画面で下の画像のように入力して、保存してデプロイするを押してください。プロジェクト名はそのままで大丈夫だと思います。フレームワークプリセットでSvelteKitを選べば、下の2つは勝手に入力されます。</p>
    <img src={picture5} alt="cloudflareの画面5" style="width:95%; max-width:700px; height:auto; margin-right:10px; border: 1px solid #33140e;"/>
</div>
<Pager prevTitle="前へ" prevURL={resolve("/sveltekit/page2")} nextTitle="次へ"/>

<style>
    *{
        margin: 5px;
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