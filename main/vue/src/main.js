import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './axios'

// 引入自定义插件
import loading from './components/loading'//默认会找index.js
Vue.use(loading)//安装

//服务器资源指向
//全局 baseUrl
let config = require('../config/config')
window.baseUrl = config.baseUrl.localhost

import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;

import store from './store'

Vue.config.productionTip = false
import './assets/css/frameui.css';
import './assets/css/index.css';
import './assets/js/jquery.min.js';
import './assets/js/amazeui.widgets.helper';

// 同步本地数据到状态仓库
let user = localStorage.getItem('vue_user');
user && store.commit('UPDATE_USER',JSON.parse(user))

new Vue({
  render: h => h(App),
  router,
  store,
  data:{
    bLoading:false
  },
}).$mount('#app')
