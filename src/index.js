
// import Vue from '../node_modules/vue/dist/vue.js'
import Vue from 'vue';
import app from './App.vue';
import store from './asserts/js/store/index';
new Vue({
    render: h => h(app),
    store
}).$mount('#app');
