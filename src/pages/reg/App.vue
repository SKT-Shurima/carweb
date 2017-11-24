<template>
  <div id="app">
    <v-header></v-header>
    <section class="login-wrap bg-primary-img" v-if='progress==1'>
		<el-form :model="ruleForm" label-position="left" label-width="0px" class="login-box">
	    	<h3 class="title">注册</h3>
	    	<el-form-item>
	      		<el-input type="text" v-model="ruleForm.phone" auto-complete="off" placeholder="请输入您的手机号">
	      			<img src="../../../static/img/Login_phone.png" height="23" width="15" slot='prepend'>
	      		</el-input>
	      		<el-button type='primary' style='float: right;width:110px;padding:10px;text-align:center;' @click='send_code' v-text='send_btn' :disabled='time>=0'></el-button>
	    	</el-form-item>
	    	<el-form-item>
	    		<el-input type="text" placeholder="请输入验证码" auto-complete='off' v-model='ruleForm.jpush_token' style='width: 60%;'>
	    			<img src="../../../static/img/Login_code.png" height="21" width="18" slot='prepend'>
	    		</el-input>
	    		<div class="inline-block auth-code">
	    			<img :src="authImg" @click='changeCode'>
	    		</div>
	    	</el-form-item>
	    	<el-form-item style="width:100%;">
	      		<el-button type="primary" style="width:100%;" @click.native.prevent="regNext" class='bg-primary'>下一步</el-button>
	    	</el-form-item>
	    	<div class="login-question">
	    		<a href="login.html" class='color-light-gray reg'>已有账号 立即登录</a>
	    	</div>
	  	</el-form>
    </section>
    <section class="login-wrap bg-primary-img" v-else>
		<el-form :model="ruleForm" label-position="left" label-width="0px" class="login-box">
	    	<h3 class="title">注册</h3>
	    	<el-form-item>
	      		<el-input type="text" v-model="ruleForm.phone" auto-complete="off" placeholder="请输入您的手机号">
	      			<img src="../../../static/img/Login_phone.png" height="23" width="15" slot='prepend'>
	      		</el-input>
	      		<el-button type='primary' style='float: right;width:110px;padding:10px;text-align:center;' @click='send_code' v-text='send_btn' :disabled='time>=0'></el-button>
	    	</el-form-item>
	    	<el-form-item>
	    		<el-input type="text" placeholder="请输入验证码" auto-complete='off' v-model='ruleForm.jpush_token' style='width: 60%;'>
	    			<img src="../../../static/img/Login_code.png" height="21" width="18" slot='prepend'>
	    		</el-input>
	    		<div class="inline-block auth-code">
	    			<img :src="authImg" @click='changeCode'>
	    		</div>
	    	</el-form-item>
	    	<el-form-item style="width:100%;">
	      		<el-button type="primary" style="width:100%;" @click.native.prevent="login" class='bg-primary'>登录1</el-button>
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
	import {postReq} from '../../assets/js/api';
	import {errorRes} from '../../assets/js/check';
  	export default {
	    data(){
	      	return {
	      		progress: 1,
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
	    	regNext(){

	    	},
	    	login(formName) {
      			let params = {
      				phone: this.ruleForm.phone,
      				password: hex_md5(this.ruleForm.password),
      				jpush_token: this.jpush_token
      			}
      			postReq('/user/login',params).then(res=>{
      				let {errcode,message,content} = res;
			        if (errcode==0) {
			        }else{
			            errorRes(errcode,message);
			        }
      			})
	        },
	        changeCode(){

	        }
	    },
	    created(){
	    	this.$nextTick(()=>{
	    		
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
