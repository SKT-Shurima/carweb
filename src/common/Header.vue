<template>
	<div class="wrap">
		<div class="wrap-center">
	    	<div class="header-wrap">
	    		<a href="index.html">
	    			<div class="header-logo"></div>
	    		</a>
	    		<nav class="nav-list">
	    			<a :href="item.href" v-for='(item,index) in navList' v-text='item.name' target="_blank" :class='{"color-primary":navIndex==index}'>首页</a>
	    		</nav>
	    	</div>
	    </div>
	</div>
</template>
<script>
    export default {
        data(){
            return {
            	navList: [
            		{href: 'index.html',name:'首页'},
            		{href: 'bidding.html',name:'竞拍'},
            		{href: 'saleCar.html',name:'高价卖车'},
            		{href: 'queryService.html',name:'车辆查询服务'},
            		{href: 'beautyService.html',name:'维修美容服务'},
            		{href: 'download.html',name:'APP下载'},
            		{href: 'personCenter.html',name:'个人中心'}]
            }
        },
        props:{
        	navIndex:{
        		type: Number,
        		require: true,
        		default: 0
        	}
        }
    }
</script>
<style type="text/css" lang='scss' scoped>
	.header-wrap{
		overflow: hidden;
		padding: 26px 0px;
	}
	.header-logo{
		float: left;
		width: 180px;
		height: 38px;
		background: url('../../static/img/header_logo.png') no-repeat;
	}
	.nav-list{
		float: right;
		a{
			font-size: 18px;
			margin: 0px 16px;
			padding: 8px 0px;
		}
		.color-primary{
			border-bottom: 3px solid #007FD6;
		}
	}
</style>
