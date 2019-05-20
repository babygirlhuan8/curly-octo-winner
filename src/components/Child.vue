<template>
    <div class="child">
        <span class="name">name : {{ name }}</span>
        <span>age: {{ age }}</span>
    </div>
</template>

<script>
export default {
    props: {
        age: {
            default: 0,
            type: Number
        },
        name: {
            type: String,
            required: true
        }
    },
    name: 'child'
}
</script>

<style lang="less" scoped>
.child {
    box-sizing: border-box;
    transform: translateY(0);
    .name {
        font-size: 18px;
        color: #fcd;
    }
}
</style>