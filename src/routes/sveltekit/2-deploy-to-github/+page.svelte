<script>
    import { Highlight } from "svelte-highlight";
    import { bash, javascript, typescript, yaml } from "svelte-highlight/languages";
    
    import picture1 from "./picture1.jpg";
    import picture2 from "./picture2.png";
    import picture3 from "./picture3.jpg";
    import Pager from "$lib/components/Pager.svelte";
    import { resolve } from "$app/paths";
</script>

<div>
    <h1 style="padding-bottom: 10px;">GitHub Pagesにデプロイする</h1>
    <p style="padding-bottom: 20px;">このページでは、GitHub Pagesにデプロイする方法を見ていきます。最初からCloudflare Pagesに公開する場合は飛ばして構いません。また、公開は後回しにするという人も飛ばして構いません。いつ戻ってきても大丈夫です。このページは、<a href=https://svelte.jp/docs/kit/adapter-static>Svelteの公式ドキュメント</a>を参考にして書かれているので、こちらも参照してみてください。</p>
    <h2 style="padding-bottom: 10px;">0.はじめに</h2>
    <p>GitHubのリポジトリ名が(ユーザー名).github.ioとなっており、リポジトリがpublic担っていることを確認してください。リポジトリ名に関しては、違うものでもなんとかなりますが、Webサイトのページ遷移が少々めんどくさくなります。やり方は各自調べてください。</p>
    <h2 style="padding-bottom: 10px;">1.adapter-staticの使用</h2>
    <p style="padding-bottom: 20px;">まずは、以下のコマンドを実行してadapter-staticをインストールしてください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={bash} code={'npm i -D @sveltejs/adapter-static'}/>
    <p style="padding-bottom: 20px;">できたら、プロジェクトのルートにあるsvelte.config.jsの内容を以下のものに書き換えます。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={javascript} code={`import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};

export default config;`}/>
    <p style="padding-bottom: 20px;">そしたら、src/routes/+layout.jsというファイルを追加し、以下の1行を書きます。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={javascript} code={"export const prerender = true;"}/>
    <h2 style="padding-bottom: 10px;">2.GitHub Pagesのworkflowを追加</h2>
    <p style="padding-bottom: 20px;">ここまでやったら、GitHubでこのプロジェクトのリポジトリを開き、一番右のSettingsの欄からPagesを選択し、sourceをDeploy from a branchからGitHub Actionsに変更します。</p>
    <img src={picture1} alt="githubの画面1" style="width:95%; max-width:700px; height:auto; margin-right:10px"/>
    <p style="padding-bottom: 20px;">できたら、Build and deploymentのcreate your ownを選択します。</p>
    <img src={picture2} alt="githubの画面2" style="width:95%; max-width:700px; height:auto; margin-right:10px"/>
    <p>そしたら、出てきた画面にこのコードを貼り付けてください。ファイルの名前はdeploy.ymlにでもしといてください。(.ymlなら何でもいいと思います。)できたら、右上のCommit changes…を押してください。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={yaml} code={`name: Deploy to GitHub Pages

on:
  push:
    branches: 'main'

jobs:
  build_site:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      # If you're using pnpm, add this step then change the commands and cache key below to use \`pnpm\`
      # - name: Install pnpm
      #   uses: pnpm/action-setup@v3
      #   with:
      #     version: 8

      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm i

      - name: build
        env:
          BASE_PATH: \'/\${{ github.event.repository.name }}\'
        run: |
          npm run build

      - name: Upload Artifacts
        uses: actions/upload-pages-artifact@v3
        with:
 # this should match the \`pages\` option in your adapter-static options
          path: 'build/'

  deploy:
    needs: build_site
    runs-on: ubuntu-latest

    permissions:
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4`}/>
    <img src={picture3} alt="githubの画面3" style="width:95%; max-width:700px; height:auto; margin-right:10px"/>
    <p>そしたら、ローカルのターミナルに戻って、以下のコマンドを順番に打って、リモートの変更をローカルに反映させ、更にローカルの変更もリモートに反映させます。</p>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={bash} code={'git pull origin'}/>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={bash} code={'git add --all'}/>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={bash} code={'git commit -m "何らかのコミットメッセージ"'}/>
    <Highlight style="max-width: 1000px; padding-bottom: 10px;" language={bash} code={'git push origin HEAD'}/>
    <p>うまく行っていれば、サイトがhttps://(ユーザー名).github.ioで公開されていると思います。</p>
    <Pager prevTitle="前へ" prevURL={resolve("/sveltekit/1-create-project")} nextTitle="次へ" nextURL={resolve("/sveltekit/3-deploy-to-cloudflare")}/>
</div>

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