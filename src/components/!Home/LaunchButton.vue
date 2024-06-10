<script setup>
import { onMounted, ref } from "vue";
import { useVersionStore } from "@/plugins/stores.js";

const version_name = ref("undefined");
const versionStore = useVersionStore();

onMounted(() => {
    version_name.value = versionStore.versionNow;
});
</script>

<template>
    <button class="LaunchButton">
        <div class="LaunchButtonContent">
            <span>启动服务器</span>
            <span>{{ version_name }}</span>
        </div>
    </button>
</template>

<style scoped lang="less">
button.LaunchButton {
    width: 320px;
    height: 96px;
    background-color: var(--color-white-trans3);
    outline: none;
    border: 2px solid var(--color-green);
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;
    transform: translate(0, 0);
    div.LaunchButtonContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 8px;
        span:nth-child(1) {
            font-size: 1.75em;
            font-weight: 700;
            color: var(--color-green);
        }
        span:nth-child(2) {
            font-size: 1em;
            font-weight: 400;
            color: var(--color-gray-lighter);
        }
    }
    &:hover {
        background-color: var(--color-white);
    }
    &:active {
        transform: translate(1px, 1px);
    }
}
</style>
