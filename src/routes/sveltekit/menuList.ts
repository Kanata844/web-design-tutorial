import { resolve } from "$app/paths";

export const menuList = [
    {
        title: "プロジェクト作成",
        url: resolve("/sveltekit/1-create-project"),
    },
    {
        title: "GitHub Pagesにデプロイする",
        url: resolve("/sveltekit/2-deploy-to-github"),
    },
    {
        title: "Cloudflare Pagesにデプロイする",
        url: resolve("/sveltekit/3-deploy-to-cloudflare"),
    },
    {
        title: "Svelteことはじめ",
        url: resolve("/sveltekit/4-svelte-start"),
    },
    {
        title: "stateを使ってみる",
        url: resolve("/sveltekit/5-state"),
    },
    {
        title: "コンポーネントを利用する",
        url: resolve("/sveltekit/6-components")
    },
    {
        title: "Eachブロック、Ifブロック",
        url: resolve("/sveltekit/7-each-if")
    },
    {
        title: "ページ遷移、画像の使い方",
        url: resolve("/sveltekit/8-routing-images")
    },
    {
        title: "自作コンポーネントの入れ子",
        url: resolve("/sveltekit/9-nested-components")
    },
    {
        title: "ちょっとした小技",
        url: resolve("/sveltekit/10-tips")
    }
]