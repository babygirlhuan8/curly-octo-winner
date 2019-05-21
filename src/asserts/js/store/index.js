import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        todos: [
            { id: 1, text: '第一个', done: true },
            { id: 2, text: '第二个', done: false },
            { id: 3, text: '第三个', done: true }
        ]
    },
    getters: {
        doneTodos(state) {
            return state.todos.filter(item => item.done);
        }
    },
    mutations: {
        increment(state, payload) {
            state.count += payload.amount;
        }
    },
    actions: {
        innerIncrement({commit, dispatch}) {
            commit('increment', {amount: 10});
            dispatch('print', '********');
        },
        print({}, msg) {
            console.log('msg:', msg);
        }
    }
})