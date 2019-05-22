
// import Vue from '../node_modules/vue/dist/vue.js'
import Vue from 'vue';
import app from './App.vue';
import store from './asserts/js/store';
import router from './asserts/js/routes';

new Vue({
    router,
    render: h => h(app),
    store
}).$mount('#app');
