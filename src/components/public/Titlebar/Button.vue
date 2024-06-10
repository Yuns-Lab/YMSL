<template>
    <button class="ly-titlebarbtn">
        <slot name="icon"></slot>
    </button>
</template>

<style scoped lang="less">
button.ly-titlebarbtn {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    width: 40px;
    height: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15%;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: var(--color-white-trans);
    }
}
</style>
