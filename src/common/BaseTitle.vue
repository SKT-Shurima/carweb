<template>
	<div class="title-wrap">
		<div class="title bg-primary" v-text='title'></div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:{
			title:{
				type: String,
				default: ''
			}
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.title-wrap{
		border-bottom: 1px solid #ced3d6;
		.title{
			width: 150px;
			height: 36px;
			line-height: 36px;
			color: #fff;
		}
	}
</style>