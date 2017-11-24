<template>
	<li class="dynamic-list" :class='{"margin-r":(index+1)%3}'>
		<dl @click='dynamicDeatil(dynamic.essay_id)'>
			<dt>
				<img :src="dynamic.cover">
			</dt>
			<dd class="ellipsis-2" v-text='dynamic.title'></dd>
		</dl>
	</li>
</template>
<script type="text/javascript">
	export default {
		props:{
			dynamic:{
				type: Object
			},
			index:{
				type: Number
			}
		},
		methods:{
			dynamicDeatil(id){
				window.open(`dynamicDetail.html?essay_id=${id}`);
			}
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.dynamic-list{
		float: left;
		width: 350px;
		height: 290px;
		box-shadow: 0 2px 4px 1px #ddd;
		margin-bottom: 40px;
		cursor: pointer;
		dt{
			width: 100%;
			height: 210px;
			img{
				width: 100%;
				height: 100%;
			}
		}
		dd{
			margin: 18px 20px;
			font-size: 16px;
			line-height: 22px;
			height: 44px;
		}
	}
	.margin-r{
		margin-right: 40px;
	}
</style>