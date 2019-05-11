import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);
import Home from './views/Home'
import Coupon from './views/Coupon'
import Details from './views/Details'
import User from './views/User'
import Myorder from './views/Myorder'
import Groups from './views/Groups'
import Login from './views/Login'
import Pay from './views/Pay'
import Reg from './views/Reg'
// import Error from './components/Error'

// 配置路由
var routes=[
    {path:'/home',component:Home},
    {path:'/coupon',component:r => { require(['./views/Coupon'], r) }},
    {path:'/details/:id',name:'details',component:r => { require(['./views/Details'], r) }},
    {path:'/myorder',component:r => { require(['./views/Myorder'], r) }},
    {path:'/user',component:r => { require(['./views/User'], r) }},
    {path:'/groups',component:r => { require(['./views/Groups'], r) }},
    {path:'/login',component:r => { require(['./views/Login'], r) }},
    {path:'/pay',component:r => { require(['./views/Pay'], r) }},
    {path:'/reg',component:r => { require(['./views/Reg'], r) }},
    {path:'*',component:Error},
    {path:'/',redirect:'/home'},//跳转
  ];

//   实例化路由
  let router = new VueRouter({
    mode:'history',
    scrollBehavior (to, from, savedPosition) {
      return {
        x:0,
        y:0
      }
    },
    routes
  })
  
  export default router;