<template>
    <div id="app">
        <router-view class="view"></router-view>
    </div>
</template>

<script>

export default {
    name: "app",
    data: function() {
        return {
            message: "hello vue!!!"
        };
    }
};
</script>