import VueRouter from 'vue-router';
import Vue from 'vue';
import home from '../../../components/Home';

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', component: home
        },
        {
            path: '/foo', component: home
        },
        {
            path: '/bar', component: Bar
        }
    ]
});
