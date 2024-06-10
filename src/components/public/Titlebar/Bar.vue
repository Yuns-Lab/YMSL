<script setup>
import { invoke } from "@tauri-apps/api";
import { ElTooltip, ElIcon } from "element-plus";
import { CloseBold, SemiSelect } from "@element-plus/icons-vue";
import Logo from "$/Icon/Logo.vue";
import { default as TitlebarButton } from "./Button.vue";
import { push } from "@/plugins/router.js";

const handleMinimize = () => {
    invoke("minimize");
};
const handleClose = () => {
    invoke("close")
};
</script>

<template>
    <div id="Titlebar">
        <ElTooltip content="返回主页" placement="right" effect="light">
            <Logo
                style="width: 34px; height: 34px; cursor: pointer"
                @click="push('/')" />
        </ElTooltip>
        <span id="title">Yun MC Server Launcher</span>
        <TitlebarButton style="margin-left: auto" @click="handleMinimize">
            <template #icon>
                <ElIcon size="20" color="var(--color-white)">
                    <SemiSelect />
                </ElIcon>
            </template>
        </TitlebarButton>
        <TitlebarButton @click="handleClose">
            <template #icon>
                <ElIcon size="22" color="var(--color-red)">
                    <CloseBold />
                </ElIcon>
            </template>
        </TitlebarButton>
    </div>
</template>

<style scoped lang="less">
div#Titlebar {
    height: 48px;
    background-color: var(--color-green);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
    padding: 0 12px;
    font-size: 12px;
    span#title {
        color: var(--color-white);
        font-size: 1.3em;
        letter-spacing: 0.05em;
    }
}
</style>
