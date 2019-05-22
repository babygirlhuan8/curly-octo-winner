<template>
    <div class="home">
        name属性：{{ name }}
        <child :age="20" name="Lucy"></child>
    </div>
</template>

<script>
import child from "./Child";

export default {
    name: 'home',
    props: {
        name: String
    },
    components: {
        child
    }
}
</script>