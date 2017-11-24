<template>
	<div class="bg-gray">
		<div class="wrap-center show-wrap">
			<div class="title">
				<h1><a href="recentSale.html" target="_blank">最近成交<i class="icon-right el-icon-arrow-right"></i></a></h1>
				<h2>共帮助<strong class="color-primary" v-text='order_count'></strong>名车主成功拍卖</h2>
			</div>
			<div class="goods-wrap">
				<el-carousel trigger="click" height="700px" :interval='5000'>
			      <el-carousel-item v-for="(item,index) in car_list" :key="index">
			        <ul>
						<v-good-list v-for='(goodItem,goodIndex) in item' :goods='goodItem' :key='goodIndex' :index='goodIndex'></v-good-list>
					</ul>
			      </el-carousel-item>
			    </el-carousel>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {getReq} from '../../assets/js/api';
	import {errorRes} from '../../assets/js/check';
	import vGoodList from 'common/GoodList'
	export default {
		data(){
			return {
				order_count: '0',
				car_list: []
			}
		},
		components: {
			vGoodList
		},
		created(){
			this.$nextTick(()=>{
				getReq('/home/recentDeal',{}).then(res=>{
					let {errcode,content,message} = res;
					if (errcode==0) {
						this.order_count = content.order_count;
						var list =[];
						for (let j= 0; j < parseInt(content.car_list.length/8)+1; j++) {
							 list[j] = content.car_list.splice(0,8);
						}
						this.car_list = list;
					}else{
						errorRes(errcode,message);
					}
				})
			})
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.show-wrap{
		text-align: center;
		overflow: hidden;
		padding-bottom: 70px;
	}
	.title{
		margin-bottom: 50px;
		h1{
			font-size: 24px;
			margin: 80px 0px 36px;
		}
		h2{
			font-size: 18px;
			line-height: 56px;
		}
		strong{
			font-size: 40px;
			margin: 0px 10px;
			vertical-align: -5px;
		}
	}
	
</style>