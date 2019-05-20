<template>
    <div class="child">
        <span class="name">name : {{ name }}</span>
        <span>age: {{ age }}</span>
        <button @click="print('hi')">点我</button>
    </div>
</template>

<script>
import printMe from '../asserts/js/printMe';
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
    name: 'child',
    methods: {
        print(msg) {
            printMe(msg);
        }
    }
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