<template>
  <div id="app">
    <v-header></v-header>
    <section class="login-wrap bg-primary-img">
		<el-form :model="ruleForm" label-position="left" label-width="0px" class="login-box">
	    	<h3 class="title">会员登录</h3>
	    	<el-form-item prop="phone">
	      		<el-input type="text" v-model="ruleForm.phone" auto-complete="off" placeholder="请输入您的手机号">
	      			<img src="../../../static/img/Login_phone.png" height="23" width="15" slot='prepend'>
	      		</el-input>
	    	</el-form-item>
	    	<el-form-item prop="checkPass">
	      		<el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="请输入登录密码">
	      			<img src="../../../static/img/Login_Password.png" height="20" width="18" slot='prepend'>
	      		</el-input>
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
	import {postReq} from '../../assets/js/api';
	import {errorRes} from '../../assets/js/check';
  	export default {
	    data(){
	      	return {
		        navIndex: 1,
		        authImg: 'http://app.shuaibomall.net/web/customerAction/createVerify?token=8724bedfaaec76fb76393933fa4f1fcceede379f',
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
