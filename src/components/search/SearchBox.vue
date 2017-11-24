<template>
	<div class="search-wrap wrap-center">
		<div class="tips">
			共为您找到{{totalCount}}个与“{{searchText}}”相关的结果	
		</div>
		<div class="search-box">
			<v-search @searchText='getSearchText'></v-search>	
		</div>
	</div>
</template>
<script type="text/javascript">
	import vSearch from 'common/Search';
	export default {
		props:{
			totalCount: {
				require: true,
				default: 0
			},
			searchText: {
				type: String,
				require: true,
				default: ''
			}
		},
		components:{
			vSearch
		},
		methods:{
			getSearchText(search_text){
				window.location.href = `search.html?search_text=${search_text}`;
			}
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.search-wrap{
		overflow: hidden;
		padding: 26px 0px;
	}
	.tips{
		float: left;
		line-height: 40px; 
	}
	.search-box{
		float: right;
	}
</style>