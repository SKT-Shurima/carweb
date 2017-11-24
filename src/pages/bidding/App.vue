<template>
  <div id="app">
    <v-header :nav-index='navIndex'></v-header>
    <div class="wrap-center">
    	<div class="search-wrap">
			<div class="tips">
				<span>当前城市</span><button class="border-gray-1px change-city" @click='cityShow=!cityShow'>{{city?city:'全国'}}<i class="el-icon-arrow-down" style='margin-left:6px;'></i></button>
			</div>
			<div class="search-box">
				<v-search @searchText='getSearchText'></v-search>	
			</div>
		</div>
		<div class="city-list" v-show='cityShow'>
			<v-search-city @handlerCity='getCity' :city='city'></v-search-city>
		</div>
    </div>
    <div class="type-box wrap-center" v-show='is_proxy!=1'>
    	<ul class="type-list">
    		<li class="color-primary">车系</li>
    		<li v-for='(item,index) in series' :key='index'>
    			<button class="btn-text-default" :class='{"btn-text-primary":place_type==item.place_type}' v-text='item.name' @click='getTypeList(item.place_type,1)'></button>
    		</li>
    	</ul>
    	<ul class="type-list" style="margin-left: 30px;">
    		<li class="color-primary">类别</li>
    		<li v-for='(item,index) in types' :key='index'>
    			<button class="btn-text-default" :class='{"btn-text-primary":worth_type==item.worth_type}' v-text='item.name' @click='getTypeList(item.worth_type,2)'></button>
    		</li>
    	</ul>
    </div>
    <div class="bg-gray">
      	<section class="goods-wrap wrap-center">
      		<div class="no-service" v-show='noServiceShow'>
      			您当前所在城市暂未开通有个竞拍服务，已为您转到全国竞拍大厅
      		</div>
      		<div v-if='goods.length'>
      			<ul class="goods-box">
		          	<v-good-list v-for='(goodItem,goodIndex) in goods' :goods='goodItem' :key='goodIndex' :index='goodIndex'></v-good-list>
		        </ul>
		        <v-pagination  @changePage='changePage' :total-page='total_page' ref='pagination'></v-pagination>
      		</div>
	        <div class="no-content" v-else>
	          	暂无数据
	        </div>
      	</section>
    </div>
    <v-footer></v-footer>  
</div>
</template>
<script>
  import vHeader from 'common/Header';
  import vSearch from 'common/Search';
  import vSearchCity from 'common/SearchCity'; 
  import vGoodList from 'common/GoodList';
  import vPagination from 'common/Pagination';
  import vFooter from 'common/Footer';
  import {getReq} from '../../assets/js/api';
  import {errorRes} from '../../assets/js/check';
  export default {
    data(){
      return {
        navIndex: 1,
        cityShow: false,
        page: 1,
        pageSize: 10,
        total_page: 1,
        goods: [],
        city: '杭州市',
        is_proxy: 1,
        noServiceShow: false,
        place_type: 0,
        worth_type: 0,
        series: [{name:'综合',place_type:0},
        {name:'日系车',place_type:1},
        {name:'欧系车',place_type:2},
        {name:'国产车',place_type:3}],
        types: [{name:'综合',worth_type:0},
        {name:'豪华车',worth_type:1},
        {name:'缺陷车',worth_type:2},
        {name:'低档车',worth_type:3}]
      }
    },
    components:{
      vHeader,vSearch,vSearchCity,vGoodList,vPagination,vFooter
    },
    methods:{
    	getCity(city){
			this.city = city;
			this.cityShow = false;
			this.page = 1;
			this.$refs.pagination.currentPage = 1;
			this.getCityList();
		},
    	getSearchText(search_text){
			window.location.href = `search.html?search_text=${search_text}`;
		},
	    changePage(page){
	        this.page = page;
	        this.getCityList();
	    },
      	getCityList(){
	        let params ={
	        	token: getCookie('token'),
	          	city: this.city,
	          	page: this.page,
	          	pageSize: this.pageSize
	        }
	        getReq('/home/carindexPage',params).then(res=>{
	          	let {errcode,message,content} = res;
	          	if (errcode==0) {
	 				      this.is_proxy = content.is_proxy; 
		          	if (content.is_proxy==1) {
		          		this.goods = content.car_info;
		            	this.total_page = Math.ceil(content.total_count/this.pageSize);
		          	}else{
		          		this.city='';
		          		this.getTypeList();
		          	}
	          	}else{
	            	errorRes(errcode,message);
	          	}
	        })
      	},
      	getTypeList(type,style){
      		this.noServiceShow = false;
      		style?style==1?this.place_type=type:this.worth_type=type:this.noServiceShow = true;
      		let params = {
      			token: getCookie('token'),
      			place_type: this.place_type,
      			worth_type: this.worth_type,
      			page: this.page,
      			pageSize: this.pageSize
      		}
      		getReq('/home/carsort',params).then(res=>{
      			let {errcode,message,content} = res;
	          	if (errcode==0) {
	          		this.goods = content.car_info;
	            	this.total_page = Math.ceil(content.total_count/this.pageSize);
	          	}else{
	            	errorRes(errcode,message);
	          	}
      		})
      	}
    },
    created(){
      	this.$nextTick(()=>{
        	this.getCityList();
      	})
    }
  }
</script>
<style type="text/css" lang='scss' scoped>
	.search-wrap{
		height: 92px;
		padding: 26px 0px;
	}
	.tips{
		float: left;
		line-height: 40px;
		font-size: 16px;
		.change-city{
			margin-left: 20px;
			padding: 4px 10px;
		} 
	}
	.city-list{
		position: relative;
		height: 0;
		left: 84px;
		margin: 0px auto;
		text-align: left;
	}
	.search-box{
		float: right;
	}
	.type-box{
		padding: 24px 0px;
		line-height: 30px;
		overflow: hidden;
		button{
			width: 80px;
			line-height: 28px;
		}
		.type-list{
			float: left;
			overflow: hidden;
			li{
				float: left;
				margin-left: 20px;
				overflow: hidden;
			}
		}
	}
  	.goods-wrap{
   		min-height: 400px;
   		padding-top: 60px;
   		.no-service{
   			font-size: 14px;
   			line-height: 20px;
   			text-align: center;
   			margin-bottom: 40px;
   		}
  	}
  	.goods-box{
    	overflow: hidden;
  	}
</style>
