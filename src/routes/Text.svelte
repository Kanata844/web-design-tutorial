<script>
    import { resolve } from "$app/paths";

</script>
<div>
    <h1 style:margin-bottom="10px">このサイトの概要</h1>
    <p style:margin-bottom="30px">このサイトは、Webページをデザインし、それを公開する方法を見ていきます。ut.code(); LearnではRenderにデプロイする方法が紹介されていましたが、ここではGitHub Pagesで公開する方法と、Cloudflare Pagesで公開する方法を見ていくんじゃないかと思います。ut.code(); Learnで学んだことを活かして、ホームページ作成にチャレンジしてみましょう！</p>
    <h2 style:margin-bottom="10px">GitHub Pagesとは</h2>
    <p>GitHub Pagesは、静的なWebサイトを無料でホスティングしてくれるサービスです。つまり、サーバー側の処理以外なら、Webページをタダで公開することができます。GitHubの個人アカウントか組織アカウントがあれば誰でもページを作成、公開できます。</p>
    <p style:margin-bottom="30px">注意点としては、ビルドは1時間に10回までなこと、<strong>サイトは1GB以内でないといけない</strong>こと、<strong>月100GBまでの帯域幅制限と月100000リクエストまでの制限がある</strong>こと、<strong>商用利用(広告も含む)が認められていない</strong>ことなどがあります。写真などを使うときは解像度を控えめにして容量を抑え、またお金儲けはしないようにしましょう。</p>
    <h2 style:margin-bottom="10px">Cloudflare Pagesとは</h2>
    <p style:margin-bottom="30px">同じく無料で静的なWebサイトをホスティングしてくれますが、こちらは帯域幅にもリクエストの数にも制限はありません。どれだけ沢山の人に見られても大丈夫です。すごいですね。注意点としては、<strong>ビルドの回数が月500回まで</strong>なことです。一人で普通に開発する分には問題ないですが、大人数でGitHubにプッシュしまくってたら割とすぐに使い切っちゃうと思うので、何らかの対策が必要です。</p>
    <h2 style:margin-bottom="10px">本編</h2>
    <p style:margin-bottom="15px">以下の3つの方法を紹介します。下に行けば行くほど内容は高度になりますが、順番はないので好きなものを選んでください。</p>
    <h2><a href={resolve("/vite-ts/page1")}>1.ViteでTypeScriptで開発(準備中)</a></h2>
    <h2><a href={resolve("/astro/page1")}>2.Astroで開発(準備中)</a></h2>
    <h2 style:margin-bottom="15px"><a href={resolve("/sveltekit/1-create-project")}>3.SvelteKitを用いて開発</a></h2>
    <p>1.ViteでTypeScriptで開発では、Viteというものを使って便利に開発していきます。TypeScriptとは書いていますが、JavaScriptでも同じ事ができます。</p>
    <p>2.Astroで開発では、Astroというフレームワークを使って、便利に開発していきます。これはWebアプリというよりはWebサイトを作るのに非常に適しているフレームワークとなっており、手軽で便利だと思います。</p>
    <p style:margin-bottom=20px>3.SvelteKitを用いて開発では、最近勢いのあるフレームワークSvelteKitを使い、便利に開発していきます。Webアプリを作りたいときにもってこいの、人気のフレームワークです。このサイト自体もこの方法で作られています。(SvelteKitのいいところはあまり活かせていませんが……)</p>
    <p>また、おまけとして、<a href="/directly">生のHTMLとCSSとJavaScriptだけで作ったページをCloudflare Pagesで公開する方法</a>も紹介しておきます。</p>
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