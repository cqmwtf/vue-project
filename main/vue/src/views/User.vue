<template>
    <div id="user-b">
		<!--html5 nav-->
		<nav class="j-nav navbar">
	        <div class="logo fl">
				<router-link to='/Home'></router-link>
			</div>
			<span class="user-title">个人中心</span>
			<div class="shopping-cart fr">
				<span class='logot' @click="logout">注销</span>			
			</div>
	    </nav>
		<section class="m-component-user" id="m-user">
	        <div class="m-user-avatar text-center">
	            <span class="avatarPic"><img style="display: inline;" class="lazy img-circle" :src=" 'http://localhost:3000'+this.$store.state.user.data.icon"></span>
				<div class="myname">昵称:{{ this.$store.state.user.data.nikename }}</div>
	            <div class="user_btn">
					<router-link to='Login' class="this">登录</router-link>
					<router-link to='Reg'>注册</router-link>
					
	            	<!-- <a href="login.html" class="this">登录</a>
	            	<a href="register.html">注册</a> -->
	            </div>
	        </div>
	        
	        <div class="head_list">
	        	<ul class="m-user-list">
	        		<li><span>￥0.00</span><br>账户余额</li>
	        		<li>
						<router-link to='/Coupon'>
						<span class="bar"></span><span>4</span><br>优惠卷</router-link></li>
	        		<li><router-link to='/Myorder'><span class="bar"></span><span>2</span><br>我的订单</router-link></li>
	        	</ul>
	        </div>
	        <ul class="m-user-content">
	            <li>
	                <div class="m-user-item">
	                   <a href="javascript:;" class="user-order">邀请好友得大礼包</a>
	                </div>
	                <div class="m-user-item">
	                   <a href="javascript:;" class="user-coupon">我的团单</a>
	                </div>
	            </li>
	            <li>
	            	<div class="m-user-item">
	                   <a href="javascript:;" class="user-site">管理收货地址</a>
	                </div>
	                <div class="m-user-item">
	                   <a href="javascript:;" class="user-set">设置</a>
	                </div>
	                <div class="m-user-item">
	                   <div class="user-score"><span class="pull-right">400-110110</span>联系客服</div>
	                </div>
	            </li>
	            <li class="m-user-footer">
	            粤ICP备8888888 广东·广州
	            </li>
	        </ul>
	    </section>
        </div>
</template>
<script>
import store from '../store.js'
export default {
	beforeRouteEnter(to,from,next){
		if(store.state.user.error == 0){
			next();
		}else{
			next('/Login')
		}
	},
	methods:{
		logout(){
			axios({
				url:'/api/logout',
				method:'PUT',
			}).then(
				res=>{
					if(store.state.user.error==0){
						this.$store.commit('UPDATE_USER',{'error':1})
						localStorage.removeItem('vue_user')
						this.$router.push('/Home')
					}
				}
			)
		}
	}
}
</script>
<style scoped>
	.myname{text-align: center;height: 20px;font: 12px/20px "";}
	.logot{height:35px;width: 60px;display: inline-block;background: rgb(190, 173, 173);text-align: center;border-radius: 5px;font:12px/35px "";color:#fff;}
</style>

