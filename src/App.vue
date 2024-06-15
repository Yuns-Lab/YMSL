<script setup>
import { onMounted } from "vue";
import { default as Titlebar } from "$/public/Titlebar/Bar.vue";
import { ModJava } from "./plugins/common/Java.js";
import { writeJsonFile, YMSL_TEMP_PATH } from "./plugins/common/FileHandler";

onMounted(async () => {
    // Java Finding
    if (
        localStorage.getItem("isFirstLoad") === "true" ||
        localStorage.getItem("isFirstLoad") === null
    ) {
        const ModuleJava = new ModJava();
        const resp = await ModuleJava.main();
        setTimeout(() => {
            writeJsonFile(`${YMSL_TEMP_PATH}\\java.tmp.json`, resp);
            localStorage.setItem("isFirstLoad", "false");
        }, 5000);
    }
});
</script>

<template>
    <div id="Window">
        <Titlebar data-tauri-drag-region />
        <div id="Body">
            <Suspense>
                <RouterView />
            </Suspense>
        </div>
    </div>
    <div id="changePageDoor"></div>
</template>

<style scoped lang="less">
div#Window {
    user-select: none;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: url("./assets/img/16.png");
    background-size: cover;
    background-position: center;
    &.roundwindow {
        border-radius: 8px;
    }
    div#Body {
        background-color: var(--color-green-deeper-trans);
        width: 100%;
        height: calc(100% - 48px);
        position: relative;
    }
}
div#changePageDoor {
    position: absolute;
    width: 100%;
    height: calc(100% - 48px);
    top: 48px;
    left: 0;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 999;
    &::before {
        content: "";
        position: absolute;
        width: 50%;
        height: 100%;
        border-radius: 8px;
        background-color: var(--color-green-deeper2);
        transform: translateX(-100%);
        transition: transform 0.5s ease-in-out;
        border-radius: 0;
    }
    &::after {
        content: "";
        position: absolute;
        width: 50%;
        height: 100%;
        border-radius: 8px;
        background-color: var(--color-green-deeper2);
        left: 50%;
        transform: translateX(100%);
        transition: transform 0.5s ease-in-out;
        border-radius: 0;
    }
    &.close {
        &::before,
        &::after {
            transform: translateX(0%);
        }
    }
}
</style>
