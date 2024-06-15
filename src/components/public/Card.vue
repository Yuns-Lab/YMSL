<script setup>
import { ElCard } from "element-plus";
</script>

<template>
    <ElCard>
        <template #header>
            <slot name="header"></slot>
        </template>
        <slot></slot>
    </ElCard>
</template>

<style scoped lang="less">
.el-card {
    background-color: var(--color-white-trans3);
}
</style>
