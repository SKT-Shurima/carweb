<template>
	<div class="bg-gray">
		<div class="wrap-center">
			<div class="inline-block box ">
				<v-search @searchText='getSearchText'></v-search>
				<div class="bidding-box">
					<button class="btn-primary bidding">
						<i class="icon"></i>
						竞拍大厅
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import vSearch from 'common/Search'
	export default {
		components: {
			vSearch
		},
		methods:{
			getSearchText(search_text){
				window.open(`search.html?search_text=${search_text}`);
			}
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.wrap-center{
		padding: 60px 0px;
		text-align: center;
	}
	.box{
		overflow: hidden;
	}
	.bidding-box{
		float: left;
	}
	.bidding{
		width: 134px;
		margin-left: 36px;
	}
</style>