<template>
	<div class="car-wrap">
		<div class="car-pic">
			<dl>
				<dt class="car-img-big">
					<img :src="cover">
				</dt>
				<dd class="car-img-list">
					<div class="pre btn-text-default" @click='changeCover(0)'>
						<i class="el-icon-arrow-left"></i>
					</div>
					<div class="list-wrap">
						<ul class="list-box">
							<li v-for='(item,index) in car-pics' :key='index' @click='picIndex=index' :class='{"active":picIndex==index}'>
								<img :src="item.name" :alt='item.desc'>
							</li>
						</ul>
					</div>
					<div class="next btn-text-default" :class='{"btn-text-primary":picIndex!==car_pics.length}' @click='changeCover(1)'>
						<i class="el-icon-arrow-right"></i>
					</div>
				</dd>
			</dl>
		</div>
		<div class="car-intro">
			<h1 class="ellipsis-1 title"></h1>
			<div class="price"><span class="color-gray">指导价</span><em class="color-price">万</em></div>
			<div class="car-info">
				<ul class="info">
					<li>
						<dl>
							<dt></dt>
							<dd class="color-gray">车牌</dd>
						</dl>
					</li>
					<li>
						<dl>
							<dt></dt>
							<dd class="color-gray">车辆所在地</dd>
						</dl>
					</li>
					<li>
						<dl>
							<dt></dt>
							<dd class="color-gray">注册时间</dd>
						</dl>
					</li>
					<li>
						<dl>
							<dt></dt>
							<dd class="color-gray">表显里程</dd>
						</dl>
					</li>
				</ul>
				<div class="level">
					<dl>
						<dt></dt>
						<dd class="color-primary">车况等级</dd>
					</dl>
					<dl>
						<dt></dt>
						<dd class="color-primary">综合评分</dd>
					</dl>
				</div>
			</div>
			<div class="sale-info">
				<!-- 出售信息 -->
				<div>
					<ul class="sale-price">
						<li>
							<span>底价：</span><em></em>
						</li>
						<li>
							<span>当前竞价：</span><em></em>
						</li>
						<li>
							<span>距离开始：</span><em></em>
						</li>
						<li>
							<span>竞拍结束：</span><em></em>
						</li>
						<li>
							<span>竞拍人数：</span><em></em>
						</li>
					</ul>
					<div class="sale-bidding">
						<div>我的出价：<em class="color-primary"></em></div>
						<div class="bid-input border-gray-1px">
							<input type="number" v-model='bid_price'>
						</div>
						<div class="color-light-gray">服务费：{{service_price}}</div>
						<div class="sale-btn">
							<button class="bg-primary">出价</button>
							<button class="bg-green" style="margin-left:10px;">+100</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				picIndex: 0,
				bid_price: '',
				service_price: ''
			}
		},
		props: {
			cover:{
				type: String,
				default: ''
			},
			car_pics: {
				type: Array,
				default: []
			}
		},
		methods:{
			changeCover(mask){
				mask?++this.picIndex:--this.picIndex;
			}
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.car-wrap{
		overflow: hidden;
	}
	.car-pic,.car-intro{
		float: left;
	}
	.car-pic{
		width: 520px;
		.car-img-big{
			width: 100%;
			height: 360px;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.car-img-list{
			width: 100%;
			overflow: hidden;
			margin-top: 10px;
			div{
				float: left;
			}
			.pre,.next{
				width: 20px;
				height: 76px;
				line-height: 76px;
				font-size: 12px;
			}
			.list-wrap{
				width: 470px;
				height: 76px;
				overflow: hidden;
				margin: 0px 5px;
			}
			.list-box{
				li{
					float: left;
					width: 106px;
					height: 72px;
					border: 2px solid transparent;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.active{
					border-color: #007FD6;
				}
			}
		}
	}
	.car-intro{
		width: 600px;
		margin-left: 20px;
		.title{
			font-size: 24px;
			line-height: 36px;
		}
		.price{
			line-height: 40px;
			margin: 36px 0px;
			em{
				margin-left: 10px;
			}
		}
		.car-info{
			overflow: hidden;
		}
		.info{
			float: left;
			overflow: hidden;
			border-right: 1px solid #d8d8d8;
			li{
				float: left;
			}
			dt{
				font-size: 20px;
			}
			dd{
				font-size: 14px;
			}
		}
		.level{
			dt{
				font-size: 32px;
			}
			dd{
				font-size: 14px;
			}
		}
		.sale-info{
			width: 600px;
			height: 200px;
			padding: 30px 50px;
			background-color: #EFF9FF; 
		}
		.sale-price{
			width: 214px;
			border-right: 1px solid #d8d8d8;
			li{
				margin-bottom: 10px;
			}
			span{
				display: inline-block;
				width: 70px;
				height: 20px;
				line-height: 20px;
				font-size: 14px;
			}
		}
		.sale-bidding{
			margin-left: 66px;
			.bid-input{
				width: 190px;
				height: 40px;
			}
			button{
				width: 90px;
				height: 36px;
				line-height: 36px;
				font-size: 18px;
				text-align: center;
				color: #fff;
			}
		}
	}
</style>