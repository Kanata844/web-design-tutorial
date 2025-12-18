<script>
    import Body from "$lib/components/Body.svelte";
    import Header from "$lib/components/Header.svelte";

    import {menuList} from "../menuList.ts";
</script>

<Header/>
<Body menuList={menuList}><p>あ</p></Body>