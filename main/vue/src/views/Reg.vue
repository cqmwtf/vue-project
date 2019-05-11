<template>
    <div id="register-b">
		<!--html5 nav-->
		<nav class="j-nav navbar">
	        <div class="logo fl">
					<router-link to='/Home'></router-link>
				<!-- <a href="user.html"></a> -->
			</div>
			<span class="user-title">注册会员</span>
	    </nav>

		<div class="register-box">
			<form action="" class="am-form" id="doc-vld-msg">
				<fieldset>
				    <div class="am-form-group">
				      	<label for="doc-ipt-3" class="am-u-sm-2 j-form-label">
					    	<span class="registericon registericon-user"></span>
					  	</label>
				      	<input v-model="username" class="name" id="doc-vld-name-2-1" style="float: left;width: 56%;" data-validation-message="请输入用户名" placeholder="用户名" required/>
				      	<span class="input-group-btn">
		                    <button class="btn btn-default" type="button" id="TestGetCode"><span>啥都支持</span><span class="hide">还剩<b id="timeout">60</b>秒</span></button>
		                </span>
				    </div>
				    <div class="am-form-group">
				      	<label for="doc-vld-pwd-1" class="am-u-sm-2 j-form-label">
			    	  		<span class="registericon registericon-password"></span>
			    	  	</label>
				      	<input v-model="password" type="password" id="doc-vld-pwd-1" data-validation-message="请输入手机收到的短信验证码" placeholder="密码" required/>
								<label for="doc-vld-pwd-1" class="am-u-sm-2 j-form-label">
			    	  		<span class="registericon registericon-password"></span>
			    	  	</label>
				      	<input v-model="nikename" type="text" id="doc-vld-pwd-1" data-validation-message="请输入手机收到的短信验证码" placeholder="昵称" required/>
				    </div>
						<div v-show="error">您输入的用户名太火，请换一个用户名....</div>
				    <!-- <button class="btn am-btn am-btn-secondary" type="submit" @click="reg">注 册</button> -->
							<p  class="btn am-btn am-btn-secondary" @click="reg" >注册</p>
				</fieldset>
			</form>
		</div>	
	</div>
</template>
<script>
import store from '../store.js'
import axios from 'axios';
export default {
	data(){
		return {
				username:'',
				password:'',
				nikename:'',
				error:false
		}
	},
	methods:{
		reg(){
			let formData = new FormData();
			formData.append("username", this.username);
			formData.append("password", this.password);
			formData.append("nikename", this.nikename);
			axios({url:'/api/reg',data:formData,method:"POST"}).then((res)=>{
				// console.log(res.data.error);
				if(res.data.error == 0){
					this.$router.push("/login")
				}else{
					this.error = true;
				}
			}
			)
		}
	}
}
</script>
<style scoped>
.name{display: block;
    width: 100%;
    padding: 0.5em;
		height: 40px;
    font-size: 1.6rem;
    line-height: 1.2;
    color: #555555;
    vertical-align: middle;
    background-color: #ffffff;
    background-image: none;
    border: 1px solid #cccccc;
    border-radius: 0;}
</style>




