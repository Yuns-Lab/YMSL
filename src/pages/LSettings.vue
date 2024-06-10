<script setup>
import { onMounted, reactive } from "vue";
import { default as LSSidebar } from "$/!Settings/Sidebar.vue";
import Card from "$/public/Card.vue";
import JavaSettingItem from "$/!Settings/JavaSettingItem.vue";
import {
    readJsonFile,
    LMSL_DATA_PATH,
    LMSL_TEMP_PATH,
} from "@/plugins/common/FileHandler.js";
import { ElScrollbar } from "element-plus";

const config = reactive({
    pageNow: 0,
    java_list: [],
    choose_now: "",
    is_loaded: false,
});

const handleSwitchPage = (payload) => {
    config.pageNow = payload.page;
};

onMounted(() => {
    setTimeout(() => {
        readJsonFile(`${LMSL_TEMP_PATH}\\java.tmp.json`).then((data) => {
            config.java_list = data;
            config.is_loaded = true;
        });
    }, 3000);
});
</script>

<template>
    <div id="LSettings">
        <LSSidebar style="grid-area: sidebar" @switchPage="handleSwitchPage" />
        <div id="LSettings__body">
            <ElScrollbar>
                <div
                    class="LSettings__page"
                    :class="{ active: config.pageNow == 0 }">
                    <Card>
                        <template #title>Java 设置</template>
                        <div v-if="config.is_loaded">
                            <JavaSettingItem :choosed="true">
                                <template #javaName>自动选择</template>
                            </JavaSettingItem>
                            <JavaSettingItem
                                v-for="java in config.java_list"
                                :key="java.path">
                                <template #javaName>
                                    {{
                                        java.version.startsWith("8")
                                            ? `8u${java.version.split("_")[1]}`
                                            : java.version
                                    }}
                                </template>
                                <template #javaPath>
                                    {{ java.path }}
                                </template>
                                <template #isJre>
                                    {{ java.isJre ? "JRE" : "JDK" }}
                                </template>
                                <template #isX86>
                                    {{ java.isX86 ? "，32位" : "" }}
                                </template>
                            </JavaSettingItem>
                        </div>
                    </Card>
                </div>
            </ElScrollbar>
        </div>
    </div>
</template>

<style scoped lang="less">
div#LSettings {
    display: grid;
    grid-template-columns: 160px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "sidebar main";
    height: 100%;
    width: 100%;
    div#LSettings__body {
        grid-area: main;
        position: relative;
        div.LSettings__page {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 24px;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            &.active {
                opacity: 1;
            }
        }
    }
}
</style>
