<script setup>
import { ElIcon } from "element-plus";
import { Setting } from "@element-plus/icons-vue";
import LaunchButton from "./LaunchButton.vue";
import { default as SubpageButton } from "$/public/MiniButton.vue";
import { push } from "@/plugins/router.js";
</script>

<template>
    <div id="LaunchGroup">
        <SubpageButton
            style="grid-area: lsetting"
            @click="push('/launcher/settings')">
            <ElIcon :size="24" style="margin-left: 2px">
                <Setting />
            </ElIcon>
        </SubpageButton>
        <SubpageButton
            style="grid-area: vchoose"
            @click="push('/instance/settings')"
            text="实例列表" />
        <SubpageButton
            style="grid-area: vsetting"
            @click="push('/instance/list')"
            text="进程列表" />
        <LaunchButton style="grid-area: launch" />
    </div>
</template>

<style scoped lang="less">
div#LaunchGroup {
    display: grid;
    grid-template-columns: 45.5px 150px 3fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        "lsetting vchoose launch"
        "anothing vsetting launch";
    grid-gap: 5px 10px;
    transform: translateY(180px);
    transition: transform 0.2s ease-in-out;
    animation: GroupButtonFadeUp 0.7s ease-in-out forwards;
}

@keyframes GroupButtonFadeUp {
    0% {
        transform: translateY(180px);
    }
    100% {
        transform: translateY(0);
    }
}
</style>
