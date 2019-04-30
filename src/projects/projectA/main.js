// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from '../../resource'; //通过import引入
import VueLazyload from 'vue-lazyload';
import vuescroll from 'vuescroll';
// import Mock from './mockJS/mock.js';
import BASE from '../../commom/assets/js/global.js'; //全局公用方法
import HTTP from '../../commom/assets/js/http.js'; //全局公用http请求
Vue.use(VueLazyload, {
    preload: 1.3, //预加载的宽高
    loading: 'https://i0.ulecdn.com/ulewap/i/290x290x2x.png',
    error: 'img加载失败时现实的图片的路径',
    attempt: 3, //尝试加载的次数
    listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'] //你想让vue监听的事件
});
Vue.use(vuescroll, {
    ops: {}, // 在这里设置全局默认配置
    name: 'myScroll' // 在这里自定义组件名字，默认是vueScroll
});
Vue.use(BASE);
Vue.use(HTTP);
Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    resource,
    components: { App },
    template: '<App/>'
})