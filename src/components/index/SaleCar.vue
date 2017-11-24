<template>
	<div class="wrap-center">
		<div>
			<div class="input-wrap">
				<label class="input-box border-primary-1px">
					<span class="city">{{city}}<i class="el-icon-caret-bottom" @click='show=!show'></i></span>
					<em style="margin: 0px 10px;">|</em>
					<input type="number" v-model='phone' :placeholder="placeholder" onkeypress="return(/[\d]/.test(String.fromCharCode(event.keyCode)))" @keyup.enter='applySale'>
				</label>
				<button class="btn-primary sale" @click='applySale'>
					我要卖车
				</button>
			</div>
		</div>
		<div  class="city-list">
			<div class="inline-block" v-show='show'>
				<v-search-city @handlerCity='getCity' :city='city'></v-search-city>
			</div>
		</div>
	</div>
	
</template>
<script type="text/javascript">
	import vSearchCity from 'common/SearchCity';
	import {getReq,postReq} from '../../assets/js/api';
	import {errorRes,checkPhone,checkVal} from '../../assets/js/check';
	export default {
		data(){
			return {
				show: false,
				phone: '',
				placeholder: '请输入手机号，已有0位用户点击提交',
				city: ''
			}
		},
		components:{
			vSearchCity
		},
		methods:{
			getCity(city){
				this.city = city;
				setCookie('saleCity',city,30*24)
				this.show = false;
			},
			getSaleInfo(){
				let params = {
					token: getCookie('token')
				}
				getReq('/sell/getInfo',params).then(res=>{
		          	let {errcode,message,content} = res;
		          	if (errcode==0) {
		            	this.placeholder = `请输入手机号，已有${content.total_count}位用户点击提交`;
		          	}else{
		            	errorRes(errcode,message);
		          	}
		        })
			},
			applySale(){
				var token = getCookie('token');
				token = checkVal(token,'请先登录');
				if (!token) {
					return false;
				}
				var phone=checkPhone(this.phone);
				if (!phone) {
					return false;
				}
				let params = {
					token: token,
					city: this.city,
					phone: phone
				}
				postReq('/sell/apply',params).then(res=>{
					let {errcode,message,content} = res;
		          	if (errcode==0) {
		          		checkVal('',message);
		          	}else{
		            	errorRes(errcode,message);
		          	}
				})
			}
		},
		created(){
			this.$nextTick(()=>{
				var city = getCookie('saleCity');
				this.city = city?city:'杭州市';
				this.getSaleInfo();
			})
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.wrap-center{
		text-align: center;
		margin: 50px auto 76px;
	}
	.input-wrap{
		display: inline-block;
		overflow: hidden;
	}
	.input-box{
		float: left;
		width: 600px;
		text-align: left;
		line-height: 38px;
		padding: 0px 20px;
		input{
			width: 70%;
		}
	}
	.sale{
		float: left;
		width: 120px;
	}
	.city-list{
		position: relative;
		width: 720px;
		height: 0;
		margin: 0px auto;
		text-align: left;
	}
</style>