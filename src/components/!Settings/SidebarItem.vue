<script setup>
import { ElIcon, ElTooltip } from "element-plus";
const props = defineProps({
    name: String,
    haveResetBtn: Boolean,
    isThis: Boolean,
});
defineEmits(["click", "reset"]);
</script>

<template>
    <span class="SidebarItem" :class="{ hl: isThis }">
        <span class="SidebarItem__body" @click="$emit('click')">
            <ElIcon :size="22" class="SidebarItem__icon">
                <slot></slot>
            </ElIcon>
            <span class="SidebarItem__text">{{ props.name }}</span>
        </span>
        <!-- <ElTooltip
            content="重置本页设置"
            placement="right"
            effect="light"
            :show-after="500">
            <ElIcon
                @click="$emit('reset')"
                :size="14"
                class="SidebarItem__reset"
                v-if="props.haveResetBtn">
                <svg
                    viewBox="0 0 1088 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M576 0a511.68 511.68 0 0 0-448 264.32V160a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H214.336A383.744 383.744 0 0 1 960 512a384 384 0 0 1-384 384c-166.976 0-307.584-107.2-360.512-256H80.768c56.896 220.736 256.704 384 495.232 384A512 512 0 0 0 576 0z"></path>
                </svg>
            </ElIcon>
        </ElTooltip> -->
    </span>
</template>

<style scoped lang="less">
span.SidebarItem {
    position: relative;
    height: 28px;
    display: flex;
    align-items: center;
    padding: 0 8px 6px 12px;
    margin-left: 6px;
    .el-icon.SidebarItem__reset {
        display: none;
    }
    span.SidebarItem__body {
        cursor: pointer;
        width: 100%;
        transform: translateY(-1px);
        .el-icon.SidebarItem__icon {
            transform: translateY(6px);
            margin-right: 8px;
        }
        &:hover {
            span.SidebarItem__text {
                color: var(--color-green-deeper);
            }
            .el-icon.SidebarItem__icon {
                color: var(--color-green-deeper);
            }
        }
        span.SidebarItem__text {
            font-size: 1em;
        }
    }
    &:hover .el-icon.SidebarItem__reset {
        display: block;
    }
    &.hl {
        span.SidebarItem__text {
            color: var(--color-green-deeper);
        }
        .el-icon.SidebarItem__icon {
            color: var(--color-green-deeper);
        }
    }
}

.el-icon.SidebarItem__reset {
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    transform: translateY(2px);
    &:hover {
        color: var(--color-red-deeper);
    }
}
</style>