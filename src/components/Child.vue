<template>
    <div class="child">
        <span class="name">name : {{ name }}</span>
        <span>age: {{ age }}</span>
        <button @click="print('hi')">点我</button>
        <button @click="increase(3)">加数</button>
        <span>count的值：{{ count }}</span>
        <div>localValue: {{ localvar }}</div>
        <ul>
            <li v-for="item in getGetters()" :key="item.id">{{ item.text }}</li>
        </ul>
        <div>getGetters : {{ getGetters() }}</div>
        <ul>
            <li v-for="item in doneTodos" :key="item.id">{{ item.text }}</li>
        </ul>
        <div>
            <span>调用action：</span>
            <button @click="add">加10</button>
        </div>
        <p>
            <router-link to="/user/test" >Go to User</router-link>
            <router-link :to="{name: 'user', params: {id: 123}}">go to user2</router-link>
            <router-link :to="{path: '/home'}">go home</router-link>
        </p>
    </div>
</template>

<script>
import printMe from '../asserts/js/printMe';
import { mapState, mapGetters, mapActions } from 'vuex';

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
    mounted() {

    },
    computed: {
        localvar() {
            return this.age;
        },
        ...mapState({
            count: state => state.count
        }),
        ...mapGetters(['doneTodos'])
    },
    name: 'child',
    methods: {
        print(msg) {
            printMe(msg);
        },
        increase(amount) {
            this.$store.commit('increment', {
                amount
            });
        },
        getGetters() {
            return this.$store.getters.doneTodos;
        },
        ...mapActions({
            add: 'innerIncrement'
        })
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