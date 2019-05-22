<template>
    <div id="app">
        <div>{{ message }}</div>
        <child :age="20" name="Lucy"></child>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
import child from "./components/Child";

export default {
    name: "app",
    components: {
        child
    },
    data: function() {
        return {
            message: "hello vue!!!"
        };
    }
};
</script>