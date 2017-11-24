<template>
  <div id="app">
    <v-header></v-header>
    <div class="bread-nav wrap-center">
      	<span><a href="bidding.html">竞拍</a></span><i class="el-icon-arrow-right color-gray"></i><span>车辆详情</span>
    </div>
    <div class="bg-gray detail-wrap">
    	<section class="wrap-center detail-box wrap">
    		
    	</section>
    </div>
    <v-footer></v-footer>  
</div>
</template>
<script>
  import vHeader from 'common/Header';
  import vCarDetail from 'components/carDetail/CarDetail';
  import vFooter from 'common/Footer';
  import {postReq} from '../../assets/js/api';
  import {errorRes} from '../../assets/js/check';
  export default {
    data(){
      return {
        navIndex: 1,
        query: {}
      }
    },
    components:{
      vHeader,vCarDetail,vFooter
    },
    methods:{
    	getDetail(){
    		let params ={
    			token: getCookie('token'),
    			order_id: this.query.order_id
    		}
    		postReq('/goods/getinfo',params).then(res=>{
	          	let {errcode,message,content} = res;
	          	if (errcode==0) {
	 				 
	          	}else{
	            	errorRes(errcode,message);
	          	}
	        })
    	}
    },
    created(){
      	this.$nextTick(()=>{
      		this.query = getRequest();
        	// this.getDetail();
      	})
    }
  }
</script>
<style type="text/css" lang='scss' scoped>
	.detail-wrap{
		padding: 20px 0px 70px;
		.detail-box{
			padding: 30px;
		}
	}
</style>
