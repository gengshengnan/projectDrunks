// 程序的入口文件，加载各种组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import {routerMode} from './config/env'
import './config/rem'
import 'mint-ui/lib/style.css'
// 从点击屏幕上的元素到触发元素的 click 事件，
//移动浏览器会有大约 300 毫秒的等待时间。为什么这么设计呢？ 
// 因为它想看看你是不是要进行双击（double tap）操作
import FastClick from 'fastclick'
//监听所有的dom元素的事件
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production'
})


new Vue({
	router,
	store,
}).$mount('#app')

