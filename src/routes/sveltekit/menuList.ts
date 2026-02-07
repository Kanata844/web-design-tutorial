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
        url: resolve("/sveltekit/page3")
    }
]