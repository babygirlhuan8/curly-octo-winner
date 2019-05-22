import VueRouter from 'vue-router';
import Vue from 'vue';
import home from '../../../components/Home';
import user from '../../../components/User';
import UserProfile from '../../../components/UserProfile';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', component: home
        },
        {
            path: '/home',
            component: home,
            props: {
                name: 'home'
            }
        },
        {
            path: '/user/:id',
            name: 'user',
            component: user,
            props: true,
            children: [
                {
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: 'profile',
                    component: UserProfile,
                    name: 'profile'
                }
            ]
        }
    ]
});
