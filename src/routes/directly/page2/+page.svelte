<script>
    import Frame from "$lib/components/Frame.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";

    import {menuList} from "../menuList.ts";
</script>

<Frame menuList={menuList}></Frame>