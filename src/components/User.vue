<template>
    <div class="user">
        <div>
            user组件参数：
            {{ $route.params }}
            {{ id }}
        </div>
        <div>
            <button @click="go">编程式导航</button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'user',
    props: {
        id: {
            type: String,
            default: '234'
        }
    },
    methods: {
        go() {
            // this.$router.push(`/user/${this.id}/profile`)

            // 对象
            // this.$router.push({ path: `/user/${this.id}/profile` })

            // 命名的路由
            // this.$router.push({ name: 'profile', params: { id: '999' }})

            // 带查询参数，变成 /register?plan=private
            this.$router.push({ path: `/user/${this.id}/profile`, query: { plan: 'private' }})
        }
    }
}
</script>