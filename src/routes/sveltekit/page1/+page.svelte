<script>
    import Text from "./Text.svelte";

    import {menuList} from "../menuList.ts";
    import Frame from "$lib/components/Frame.svelte";
</script>

<Frame menuList={menuList}>
    <Text/>
</Frame>
