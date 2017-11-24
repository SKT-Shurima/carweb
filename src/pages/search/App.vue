<template>
  <div id="app">
    <v-header></v-header>
    <v-search-box :total-count='total_count' :search-text='query.search_text'></v-search-box>
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
  import vSearchBox from 'components/search/SearchBox'
  import vGoodList from 'common/GoodList';
  import vPagination from 'common/Pagination';
  import vFooter from 'common/Footer'
  import {getReq} from '../../assets/js/api';
  import {errorRes} from '../../assets/js/check';
  export default {
    data(){
      return {
        navIndex: 0,
        query:{
          search_text: ''
        },
        page: 1,
        pageSize: 10,
        total_count: 0,
        total_page: 1,
        goods: []
      }
    },
    components:{
      vHeader,vSearchBox,vGoodList,vPagination,vFooter
    },
    methods:{
      changePage(page){
        this.page = page;
        this.getList();
      },
      getList(){
        let params ={
          search_text: this.query.search_text,
          page: this.page,
          pageSize: this.pageSize
        }
        getReq('/search/search',params).then(res=>{
          let {errcode,message,content} = res;
          if (errcode==0) {
            this.goods = content.order_list;
            this.total_count = content.total_count;
            this.total_page = Math.ceil(content.total_count/this.pageSize);
          }else{
            errorRes(errcode,message);
          }
        })
      }
    },
    created(){
      this.$nextTick(()=>{
        this.query = getRequest();
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
