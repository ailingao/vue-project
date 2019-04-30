import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/pages/index'
import two from '../components/pages/two'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: '/app/', //服务器文件位置根目录
    routes: [{
        path: '/index',
        name: 'index',
        component: index
    }, {
        path: '/two',
        name: 'two',
        component: two
    }]
})