import { resolve } from "$app/paths";

export const menuList = [
    {
        title: "プロジェクト作成",
        url: resolve("/sveltekit/page1"),
    },
    {
        title: "GitHub Pagesにデプロイする",
        url: resolve("/sveltekit/page2"),
    },
    {
        title: "Cloudflare Pagesにデプロイする",
        url: resolve("/sveltekit/page3"),
    },
    {
        title: "Svelteことはじめ",
        url: resolve("/sveltekit/page4"),
    },
    {
        title: "stateを使ってみる",
        url: resolve("/sveltekit/page5"),
    },
    {
        title: "コンポーネントを利用する",
        url: resolve("/sveltekit/page6")
    },
    {
        title: "Eachブロック、Ifブロック",
        url: resolve("/sveltekit/page7")
    },
    {
        title: "ページ遷移、画像の使い方",
        url: resolve("/sveltekit/page8")
    },
    {
        title: "自作コンポーネントの入れ子",
        url: resolve("/sveltekit/page9")
    },
    {
        title: "ちょっとした小技",
        url: resolve("/sveltekit/page10")
    }
]