<template>
	<div class="input-wrap inline-block">
		<label class="input-box border-primary-1px">
			<input type="text" v-model='val' placeholder="搜索品牌如“大众”车牌如“浙A”地区如“杭州”" @keyup.enter='search'>
		</label>
		<button class="btn-primary search" @click='search'>
			搜索
		</button>
	</div>
</template>
<script type="text/javascript">
	import {checkVal} from '../assets/js/check';
	export default {
		data(){
			return{
				val: ''
			}
		},
		methods: {
			search(){
				if (checkVal(this.val,'请输入搜索内容')) {
					this.$emit('searchText',this.val);
				}
			}
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.input-wrap{
		overflow: hidden;
		float: left;
	}
	.input-box{
		float: left;
		width: 464px;
		text-align: left;
		line-height: 38px;
		padding: 0px 20px;
	}
	.search{
		float: left;
		width: 90px;
	}
</style>