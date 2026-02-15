<script>
    import Frame from "$lib/components/Frame.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";

    import picture1 from "./picture1.jpg";
    import picture2 from "./picture2.jpg";
    import picture3 from "./picture3.png";
    import picture4 from "./picture4.png";
    import picture5 from "./picture5.png";
</script>

<h1>とりあえず公開してみよう</h1>
<p>ここでは、フレームワークなど難しいことは考えず、とりあえず書いたページを公開してみる方法を見ていきます。</p>
<p>まず、Cloudflareのアカウントを持っていない場合は、作ってください。</p>
<p>アカウントを作成して、下の画面が表示された人は、赤丸を付けた始めるを押してください。</p>
<img src={picture1} alt="cloudflareの画面1" style="width:95%; max-width:700px; height:auto; margin-right:10px; border: 1px solid #33140e;"/>
<p>それ以外の人は、Cloudflareにログインして右上の追加のボタンを押し、Pagesを選択してください。</p>
<img src={picture2} alt="cloudflareの画面2" style="width:95%; max-width:700px; height:auto; margin-right:10px; border: 1px solid #33140e;"/>
<p>そしたら、ファイルをドラッグアンドドロップするの始めるを押してください。</p>
<img src={picture3} alt="cloudflareの画面3" style="width:95%; max-width:700px; height:auto; margin-right:10px; border: 1px solid #33140e;"/>
<p>次に、プロジェクトの名前を適当につけてプロジェクトの作成を押してください。</p>
<img src={picture4} alt="cloudflareの画面4" style="width:95%; max-width:700px; height:auto; margin-right:10px; border: 1px solid #33140e;"/>
<p>指定された場所に、プロジェクトのフォルダをドラッグアンドドロップしてください。</p>
<img src={picture5} alt="cloudflareの画面5" style="width:95%; max-width:700px; height:auto; margin-right:10px; border: 1px solid #33140e;"/>
<p>サイトをデプロイを押すと、(プロジェクト名).pages.devでサイトが公開されていると思います。以上。</p>

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