<template>
	<li class="good-list" :class='{"margin-r":(index+1)%4}'>
		<dl>
			<dt class="good-cover">
				<img :src="goods.cover" :alt='goods.car_type'>
			</dt>
			<dd class="good-type ellipsis-2">【{{goods.car_license}}】{{goods.car_type}}</dd>
			<dd class="good-price color-light-gray">指导价<em class="color-price price">{{goods.price}}万</em></dd>
			<dd class="good-detail color-light-gray">{{goods.date_add|dateYM}}&nbsp;&nbsp;|&nbsp;&nbsp;{{goods.car_mileage}}公里&nbsp;&nbsp;|&nbsp;&nbsp;{{goods.area}}</dd>
		</dl>
	</li>
</template>
<script type="text/javascript">
	import {dateYM} from '../assets/js/filter';
	export default {
		props: {
			goods:{
				type: Object
			},
			index:{
				type: Number
			}
		},
		filters:{
			dateYM
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.good-list{
		float: left;
		width: 260px;
		height: 300px;
		text-align: left;
		cursor: pointer;
		box-shadow: 0 2px 4px 1px #ddd;
		margin-bottom: 30px;
	}
	.margin-r{
		margin-right: 32px;
	}
	.good-cover{
		width: 100%;
		height: 180px;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.good-type{
		font-size: 14px;
		line-height: 20px;
		height: 40px;
		padding: 8px 12px;
	}
	.good-price{
		font-size: 12px;
		padding: 10px 12px;
	}
	.good-detail{
		font-size: 12px;
		line-height: 16px;
		padding: 0px 12px;
	}
	.price{
		font-size: 16px;
		margin-left: 10px;
	}
</style>