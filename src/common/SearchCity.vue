<template>
	<div class="wrap">
		<ul class="city-wrap">
			<li :class='{"color-primary":city===""}'><span @click='chooseCity("")'>全国</span></li>
			<li v-for='(item,index) in cityData'>
				<div class="type color-primary">
					<span v-text='item.name'></span>
				</div>
				<div class="cities">
					<span v-for='(cityItem,index) in item.cities' v-text='cityItem.name' :class='{"color-primary":city===cityItem.name}' @click='chooseCity(cityItem.name)'></span>
				</div>
			</li>
		</ul>
	</div>
	
</template>
<script type="text/javascript">
	import cityData from '../assets/js/city';
	export default {
		data(){
			return{
				cityData: cityData,
			}
		},
		props:{
			city:{
				type: String,
				require: true
			}
		},
		methods:{
			chooseCity(city){
				this.$emit('handlerCity',city)
			}
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.wrap{
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 10;
		width: 600px;
		height: 380px;
		padding: 30px 40px;
	}
	.city-wrap{
		width: 520px;
		height: 320px;
		overflow-x: hidden;
		overflow-y: scroll;
		line-height: 32px;
		span{
			cursor: pointer;
		}
		li{
			overflow: hidden;
		}
	}
	.type,.cities{
		float: left;
	}
	.type{
		width: 10%;
	}
	.cities{
		width: 90%;
		span{
			margin-right: 20px;
		}
		span:hover{
			color: #007FD6;
		}
	}
</style>