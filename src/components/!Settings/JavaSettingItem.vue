<script setup>
import { ElCard, ElButton, ElIcon } from "element-plus";
import { Select } from "@element-plus/icons-vue";

const props = defineProps({
    choosed: Boolean,
});

const emit = defineEmits(["choose"]);

const choose = () => {
    if (!props.choosed) emit("choose");
};
</script>

<template>
    <div class="JavaSettingItem">
        <ElCard
            class="JSI__card"
            :class="{ green: props.choosed }"
            @click="choose()">
            <span class="JSI__card_content">
                <span style="width: 16px">
                    <ElIcon
                        v-if="props.choosed"
                        style="transform: translateY(3px)">
                        <Select />
                    </ElIcon>
                </span>
                <span class="JSI__left" style="margin-left: 12px">
                    <slot name="isJre"></slot>
                    {{}}
                    <slot name="javaName"></slot>
                    <span style="display: block; width: 50.78px; height: auto">
                        <slot name="isX86"></slot>
                    </span>
                </span>
                <span style="margin-left: 36px">
                    <slot name="javaPath"></slot>
                </span>
            </span>
        </ElCard>
    </div>
</template>

<style lang="less">
div.JavaSettingItem {
    margin-bottom: 8px;
}

.el-card.JSI__card {
    height: 44px;
    cursor: pointer;
    &.green {
        background-color: var(--color-green2);
        cursor: auto;
    }
    .el-card__body {
        padding-top: 6px;
        padding-bottom: 6px;
    }
    span.JSI__card_content {
        height: 32px;
    }
}

span.JSI__card_content,
span.JSI__left {
    display: flex;
    align-items: center;
}
</style>
