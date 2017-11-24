<template>
	<div class="bg-gray">
		<div class="wrap-center">
			<h1><a href="dynamic.html" target="_blank">行业动态<i class="icon-right el-icon-arrow-right"></i></a></h1>
			<ul class="dynamic-wrap dynamic-box">
				<v-dynamic-list v-for='(item,index) in content' :dynamic='item' :index='index' :key='index'></v-dynamic-list>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {postReq} from '../../assets/js/api';
	import {errorRes} from '../../assets/js/check';
	import vDynamicList from 'common/DynamicList';
	export default {
		data(){
			return{
				content: []
			}
		},
		components:{
			vDynamicList
		},
		created(){
			this.$nextTick(()=>{
				let token = getCookie('token');
				let params = {
					token: token?token:''
				}
				postReq('/home/trends',params).then(res=>{
					let {errcode,content,message} = res;
					if (errcode==0) {
						this.content = content;
					}else{
						errorRes(errcode,message);
					}
				})
			})
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.dynamic-box{
		padding-bottom: 100px;
		overflow: hidden;
	}
	h1{
		text-align: center;
		font-size: 24px;
		padding: 80px 0px 36px;
	}
</style>