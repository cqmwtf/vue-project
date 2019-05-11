<template>
    <div id="register-b">
		<!--html5 nav-->
		<nav class="j-nav navbar">
	        <div class="logo fl">
					<router-link to='/Home'></router-link>
				<!-- <a href="user.html"></a> -->
			</div>
			<router-link to='/Login' tag='span'></router-link>
			<!-- <span class="user-title">登录</span> -->
			<div class="registerBtn">
			<router-link to='/Reg'>注册</router-link>
				<!-- <a href="register.html">注册</a> -->
			</div>
	    </nav>
		<div class="register-box">
			<form action="" class="am-form" id="doc-vld-msg">
				<fieldset>
				    <div class="am-form-group">
				      	<label for="doc-ipt-3" class="am-u-sm-2 j-form-label">
					    	<span class="registericon registericon-user"></span>
					  	</label>
				      	<input type="text" v-model="username" id="doc-vld-name-2-1" placeholder="用户名/邮箱" data-validation-message="请输入用户名或登录邮箱" required/>
				    </div>
				    <div class="am-form-group">
				      	<label for="doc-vld-pwd-1" class="am-u-sm-2 j-form-label">
			    	  		<span class="registericon registericon-password"></span>
			    	  	</label>
				      	<input type="text" v-model="password" id="doc-vld-pwd-1" data-validation-message="请输入密码" placeholder="请输入密码" required/>
								<!-- <label for="doc-vld-pwd-1" class="am-u-sm-2 j-form-label">
			    	  		<span class="registericon registericon-password"></span>
			    	  	</label>
				      	<input type="text" v-model="nikename" id="doc-vld-pwd-1" data-validation-message="请输入昵称" placeholder="请输入昵称" required/> -->
				    </div>
				    <!-- <button class="btn am-btn am-btn-secondary" @click="login">登 录</button> -->
						<p  class="btn am-btn am-btn-secondary" @click="login">登录</p>
				</fieldset>
			</form>
			<div class="text-right">
	            <a href="javascript:;" class="m-login-link">忘记密码？</a>
	        </div>	
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			username:'',
			password:'',
			// nikename:'',
			error:false
		}
	},
	methods:{
		login(){
			this.$store.dispatch(
				'UPDATE_USER',
				{
					username:this.username,
					password:this.password,
					nikename:this.nikename
				}
			).then(
				data=>{
					// console.log(data.error);
					if(data.error==0){
						// console.log()
						localStorage.setItem('vue_user',JSON.stringify(data));
						this.$router.push('/User')					
					}else{
						this.error = true
					}
				}
			)
		}
	}
}
</script>


