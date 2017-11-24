<template>
	<div class="swiper">
		<el-carousel trigger="click" height="650px">
	      <el-carousel-item v-for="(item,index) in banner" :key="index">
	        <img :src="item.image" :alt='item.banner_name' @click='jump(item.action)'>
	      </el-carousel-item>
	    </el-carousel>
	</div>
</template>
<script type="text/esmascript-6">
	import {getReq} from '../../assets/js/api';
	import {errorRes} from '../../assets/js/check';
	export default {
		data() {
			return{
			    banner: []
			}
		},
		methods:{
			getBanner(){
				let token = getCookie('token');
				let params = {
					token: token?token:'',
					city: '杭州'
				}
				getReq('/home/carindex',params).then(res=>{
					let {errcode,message,content} = res;
					if (errcode==0) {
						this.banner = content.banner;
					}else{
						errorRes(errcode,message);
					}
				})
			},
			jump(action){
				if (action.jump) {
					let params = action.params;
					let  u = "";
					if (params) {
						for( let i = 0 ; i < params.length;i++){
							u += `${params[i].key}=${params[i].value}&` ;
						}
					}
					window.open(`/${action.jump}?${u}`);
				}
			}
		},
		created() {
			this.$nextTick(()=>{
				this.getBanner();
			})
		}
	}
	
</script>
<style type="text/css" lang='scss' scoped>
	.swiper{
	    width: 100%;
	    height: 650px;
	    img{
			width: 100%;
			height: 100%;
		}
	  }
</style>