<template>
  <div id="app">
    <v-header></v-header>
    <section class="login-wrap bg-primary-img">
		<el-form :model="ruleForm" label-position="left" label-width="0px" class="login-box">
	    	<h3 class="title">会员登录</h3>
	    	<el-form-item>
	      		<el-input type="text" v-model="ruleForm.phone" auto-complete="off" placeholder="请输入您的手机号">
	      			<img src="../../../static/img/Login_phone.png" height="23" width="15" slot='prepend'>
	      		</el-input>
	    	</el-form-item>
	    	<el-form-item>
	      		<el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="请输入登录密码">
	      			<img src="../../../static/img/Login_Password.png" height="20" width="18" slot='prepend'>
	      		</el-input>
	    	</el-form-item>
	    	<el-form-item>
	    		<el-input type="text" placeholder="请输入验证码" auto-complete='off' v-model='ruleForm.jpush_token' style='width: 60%;' @keyup.enter.native='login'>
	    			<img src="../../../static/img/Login_code.png" height="21" width="18" slot='prepend'>
	    		</el-input>
	    		<div class="inline-block auth-code">
	    			<img :src="authImg" @click='getCode'>
	    		</div>
	    	</el-form-item>
	    	<el-form-item style="width:100%;">
	      		<el-button type="primary" style="width:100%;" @click.native.prevent="login" class='bg-primary'>登录</el-button>
	    	</el-form-item>
	    	<div class="login-question">
	    		<a href="reg.html" target="_blank" class='color-light-gray reg'>注册新用户</a>
	    		<a href="forgetPassword.html" target="_blank" class='color-light-gray forget-password'>忘记密码？</a>
	    	</div>
	  	</el-form>
    </section>
    <v-footer></v-footer>  
</div>
</template>
<script>
	import vHeader from 'common/Header';
	import vFooter from 'common/Footer';
	import {postReq,getReq} from '../../assets/js/api';
	import {checkPhone,errorRes,checkVal} from '../../assets/js/check';
  	export default {
	    data(){
	      	return {
		        token: '',
		        authImg: '',
		        ruleForm: {
		          	phone: '',
		          	password: '',
		          	jpush_token: ''
		        },
	      	}	
	    },
	    components:{
	      vHeader,vFooter
	    },
	    methods:{
	    	login(formName) {
	    		var phone = checkPhone(this.ruleForm.phone);
	    		console.log(phone)
	    		if (!phone) {
	    			return false;
	    		}
	    		var password = checkVal(this.ruleForm.password,'请输入密码');
	    		if (!password) {
	    			return false;
	    		}
	    		var jpush_token = checkVal(this.ruleForm.jpush_token,'请输入验证码');
	    		if (!jpush_token) {
	    			return false;
	    		} 
      			let params = {
      				phone: phone,
      				password: hex_md5(password),
      				jpush_token: jpush_token
      			}
      			postReq('/user/login',params).then(res=>{
      				let {errcode,message,content} = res;
			        if (errcode==0) {
			        	setCookie('token',content.token,30*24);
						window.location.replace('index.html');
			        }else{
			            errorRes(errcode,message);
			        }
      			})
	        },
	        getCode(){
	        	getReq('/user/createToken',{}).then(res=>{
	    			let {errcode,message,content} = res;
			        if (errcode==0) {
			        	this.authImg = `http://carbid.zertone2.com/web/user/createVerify?token=${content.token}`;
			        }else{
			            errorRes(errcode,message);
			        }
	    		})
	        }
	    },
	    created(){
	    	this.$nextTick(()=>{
	    		this.getCode();
	    	})
	    }
  	}
</script>
<style type="text/css" lang='scss' scoped>
	.auth-code{
		float: right;
		width: 35%;
		height: 40px;
		border: 1px solid #d8dce5;
		border-radius: 4px;
		img{
			width: 100%;
			height: 100%;
			cursor: pointer;
		}
	}
	.login-question{
		overflow: hidden;
		font-size: 14px;
		line-height: 20px;
		a{
			text-decoration: underline;
		}
		.reg{
			float: left;
		}
		.forget-password{
			float: right;
		}
	}
</style>
