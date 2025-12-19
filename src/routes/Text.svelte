<script>
    import { resolve } from "$app/paths";

</script>
<div>
    <h1 style:margin-bottom="10px">このサイトの概要</h1>
    <p style:margin-bottom="30px">このサイトは、Webページをデザインし、それを公開する方法を見ていきます。GitHub Pagesで公開する方法と、Cloudflare Pagesで公開する方法を見ていくんじゃないかと思います。ut.code(); Learnで学んだことを活かして、ホームページ作成にチャレンジしてみましょう！</p>
    <h2 style:margin-bottom="10px">GitHub Pagesとは</h2>
    <p>GitHub Pagesは、静的なWebサイトを無料でホスティングしてくれるサービスです。つまり、サーバー側の処理以外なら、Webページをタダで公開することができます。GitHubの個人アカウントか組織アカウントがあれば誰でもページを作成、公開できます。</p>
    <p style:margin-bottom="30px">注意点としては、<strong>サイトは1GB以内でないといけない</strong>こと、<strong>月100GBまでの帯域幅制限と月100000リクエストまでの制限がある</strong>こと、<strong>商用利用(広告も含む)が認められていない</strong>ことなどがあります。写真などを使うときは解像度を控えめにして容量を抑え、またお金儲けはしないようにしましょう。</p>
    <h2 style:margin-bottom="10px">Cloudflare Pagesとは</h2>
    <p style:margin-bottom="30px">なんか無料で無制限みたいです。すごいですね。</p>
    <h2 style:margin-bottom="10px">本編</h2>
    <p style:margin-bottom="15px">以下の3つの方法を紹介します。下に行けば行くほど内容は高度になりますが、順番はないので好きなものを選んでください。</p>
    <h2><a href={resolve("/directly/page1")}>1.GitHubのソースコードを直接配信</a></h2>
    <h2><a href={resolve("/vite-ts/page1")}>2.ViteでTypeScriptで開発したものを配信</a></h2>
    <h2 style:margin-bottom="15px"><a href={resolve("/sveltekit/page1")}>3.SvelteKitを用いて開発したものを配信</a></h2>
    <p>1.GitHubのソースコードを直接配信では、難しいことは一切せずにHTMLとCSSとJavaScriptで書いたページをとりあえず配信できればいいというときにおすすめです。が、解説することは少ないので1ページで終わると思います。</p>
    <p>2.ViteでTypeScriptで開発したものを配信では、少しレベルアップして便利に開発したいときにおすすめです。TypeScriptとは書いていますが、JavaScriptでも同じ事ができます。</p>
    <p>3.SvelteKitを用いて開発したものを配信では、最近勢いのあるフレームワークSvelteKitを使い、便利に開発していきます。新しく覚えることも多いですが、実務に一番近いですし便利な機能も多いので、チャレンジしてみて損はありません。このサイト自体もこの方法で作られています。</p>
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