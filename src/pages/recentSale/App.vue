<template>
  <div id="app">
    <v-header></v-header>
    <div class="bread-nav wrap-center">
      <span><a href="index.html">首页</a></span><i class="el-icon-arrow-right color-gray"></i><span>最近成交</span>
    </div>
    <div class="bg-gray">
      <section class="goods-wrap wrap-center">
        <ul class="goods-box" v-if='goods.length'>
          <v-good-list v-for='(goodItem,goodIndex) in goods' :goods='goodItem' :key='goodIndex' :index='goodIndex'></v-good-list>
        </ul>
        <div class="no-content" v-else>
          暂无数据
        </div>
        <v-pagination  @changePage='changePage' :total-page='total_page'></v-pagination>
      </section>
    </div>
    <v-footer></v-footer
>  </div>
</template>
<script>
  import vHeader from 'common/Header';
  import vGoodList from 'common/GoodList';
  import vPagination from 'common/Pagination';
  import vFooter from 'common/Footer';
  import {getReq} from '../../assets/js/api';
  import {errorRes} from '../../assets/js/check';
  export default {
    data(){
      return {
        page: 1,
        pageSize: 10,
        total_page: 1,
        goods: []
      }
    },
    components:{
      vHeader,vGoodList,vPagination,vFooter
    },
    methods:{
      changePage(page){
        this.page = page;
        this.getList();
      },
      getList(){
        let params ={
          page: this.page,
          pageSize: this.pageSize
        }
        getReq('/home/recentDealPage',params).then(res=>{
          let {errcode,message,content} = res;
          if (errcode==0) {
            this.goods = content.car_list;
            this.total_page = Math.ceil(content.total_count/this.pageSize);
          }else{
            errorRes(errcode,message);
          }
        })
      }
    },
    created(){
      this.$nextTick(()=>{
        this.getList();
      })
    }
  }
</script>
<style type="text/css" lang='scss' scoped>
  .goods-wrap{
    min-height: 400px;
    padding-top: 60px;
  }
  .goods-box{
    overflow: hidden;
  }
</style>
