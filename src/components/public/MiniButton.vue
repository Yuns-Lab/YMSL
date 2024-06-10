<script setup>
const props = defineProps({
    text: String,
    width: Number,
    height: Number,
});
</script>

<template>
    <button
        class="LaunchMiniButton"
        :style="{ width: props.width + 'px', height: props.height + 'px' }">
        <span class="LaunchMiniButton__text">
            {{ props.text }}
            <slot></slot>
        </span>
    </button>
</template>

<style scoped lang="less">
button.LaunchMiniButton {
    background-color: var(--color-white-trans3);
    outline: none;
    border: 2px solid var(--color-green);
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;
    transform: translate(0, 0);
    span.LaunchMiniButton__text {
        font-size: 1.1em;
        font-weight: 550;
        color: var(--color-black);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &:hover {
        background-color: var(--color-white);
    }
    &:active {
        transform: translate(1px, 1px);
    }
}
</style>
