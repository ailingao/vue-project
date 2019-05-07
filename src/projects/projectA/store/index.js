// vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建vuex的store
const store = new Vuex.Store({
    state: {
        dowmLoadState: true
    },
    // 更改store的状态
    mutations: {
        increment(state) {
            state.dowmLoadState = true
        },
        decrement(state) {
            state.dowmLoadState = false
        }
    },
    // 有异步的时候， 需要action
    actions: {
        increment(context) {
            context.commit('increment')
        },
        decrement(context) {
            setTimeout(function() {
                context.commit("decrement")
            }, 10)
        }
    },
    // 通过getter 进行数据获取
    getters: {
        dowmLoadState(state) {
            return state.dowmLoadState;
        }
    }
})

export default store