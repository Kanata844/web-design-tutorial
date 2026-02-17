<script lang="ts">
    import Highlight from "svelte-highlight";
    import bash from "svelte-highlight/languages/bash";
    import picture1 from "./picture1.jpg";
    import picture2 from "./picture2.jpg";
    import picture3 from "./picture3.png";
    import picture4 from "./picture4.jpg";
    import Pager from "$lib/components/Pager.svelte";
    import { resolve } from "$app/paths";
    import { highlightAttachment } from "$lib/utils";
</script>

<div>
    <h1>プロジェクト作成</h1>
    <p>このページでは、SvelteKitでプロジェクトを作り、GitHubのリポジトリを作るところまでやります。ut.code(); Learnの<a href="https://learn.utcode.net/docs/web-servers/wsl-setup/">WSLのセットアップ(Windowsのみ)</a><a href="https://learn.utcode.net/docs/web-servers/linux-commands/">Linuxコマンド</a><a href="https://learn.utcode.net/docs/web-servers/node-js/">はじめてのNode.js</a>を確認して、(Widnowsの方はWSLと、)Node.jsをインストールしてください。また、<a href="https://learn.utcode.net/docs/web-servers/git-github-init/">GitとGitHubのセットアップ</a>の内容も終わらせておいてください。</p>
    <p style:margin-bottom="30px"><a href="https://learn.utcode.net/docs/web-servers/module/">モジュールとnpm</a><a href="https://learn.utcode.net/docs/web-servers/git/">Gitを用いたバージョン管理</a><a href="https://learn.utcode.net/docs/web-servers/github/">GitとGithubを用いた共同開発</a>の知識も使うので、わからなくなったら参考にしてください。</p>
    <h2>1.GitHubのリポジトリを作成する</h2>
    <p>まず、GitHubにサインインし、画面右上の+ボタンを押し、New repositoryを選択してください。(赤い丸)</p>
    <img src={picture1} alt="githubの画面1" style="width:95%; max-width:700px; height:auto; margin-right:10px"/>
    <p>Repository nameは、<strong>GitHub Pagesで公開したい場合は(ユーザー名).github.io</strong>、それ以外の場合は好きな名前をつけてください。Choose visibilityは、<strong>GitHub Pagesで公開したい場合はpublic</strong>、そうでなければ好きなものを選んでください。その他の設定は変える必要はありません。ここまでできたら、Create Repositoryを押してください。</p>
    <img src={picture2} alt="githubの画面2" style="width:95%; max-width:700px; height:auto; margin-right:10px"/>
    <p>プロジェクトが作成できたら、プロジェクトの画面を開き、git@github.com:(ユーザー名)/(リポジトリ名).gitという文字列を(クリップボードに)コピーしてください。</p>
    <img src={picture3} alt="githubの画像3" style="width:95%; max-width:700px; height:auto; margin-right:10px"/>
    <p>(以下、Windowsの人はWSLを使っている前提です。)コピーできたら、リポジトリをクローンしたい場所をターミナルで開き、次のコマンドを実行します。</p>
    <Highlight style="max-width: 1000px" language={bash} code={"git clone git@github.com:(ユーザー名)/(リポジトリ名).git"}/>
    <p>そしたら、クローンしたディレクトリに移動してください。(<code {@attach highlightAttachment}>cd (リポジトリ名)</code>で移動できます。)</p>
    <p>つぎに、その場所で次のコマンドを実行しプロジェクトを作成してください。聞かれた質問は、とくに希望がなければデフォルトのままエンターを押して進んで構いません。</p>
    <Highlight style="max-width: 1000px" language={bash} code={"npx sv create"}/>
    <img src={picture4} alt="githubの画面4" style="width:95%; max-width:700px; height:auto; margin-right:10px"/>
    <p>これができたら、次のコマンドを実行してテンプレートが出来上がっていることを確認しましょう。</p>
    <Highlight style="max-width: 1000px" language={bash} code={"npm run dev"}/>
    <p><a href="http://localhost:5173/">http://localhost:5173/</a>をブラウザで開くか、出てきたポップアップのOpen in browserボタンを押すかすると開けると思います。</p>
    <p>とりあえず動くことがわかったので、GitHubにpushしてみましょう。まず、次のコマンドで変更をaddします。</p>
    <Highlight style="max-width: 1000px" language={bash} code={"git add --all"}/>
    <p>そしたら、変更をcommitします。</p>
    <Highlight style="max-width: 1000px" language={bash} code={'git commit -m "何らかのコミットメッセージ"'}/>
    <p>ここまで来たら、最後にリモートにpushして変更を反映させます。</p>
    <Highlight style="max-width: 1000px" language={bash} code={"git push origin HEAD"}/>
    <p>GitHubを見ると、プロジェクトの内容が表示されていると思います。</p>
    <Pager prevTitle="トップに戻る" prevURL={resolve("/")} nextTitle="次へ" nextURL={resolve("/sveltekit/2-deploy-to-github")}/>
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