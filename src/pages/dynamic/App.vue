<template>
  <div id="app">
    <v-header></v-header>
    <div class="bread-nav wrap-center">
      <span><a href="index.html">首页</a></span><i class="el-icon-arrow-right color-gray"></i><span>行业动态</span>
    </div>
    <div class="bg-gray">
      <section class="dynamic-wrap wrap-center">
        <ul class="dynamic-box" v-if='essays.length'>
          <v-dynamic-list v-for='(dynamicItem,dynamicIndex) in essays' :dynamic='dynamicItem' :key='dynamicIndex' :index='dynamicIndex'></v-dynamic-list>
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
  import vDynamicList from 'common/DynamicList';
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
        essays: []
      }
    },
    components:{
      vHeader,vDynamicList,vPagination,vFooter
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
        getReq('/home/trendsPage',params).then(res=>{
          let {errcode,message,content} = res;
          if (errcode==0) {
            this.essays = content.essays;
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
  .dynamic-box{
    min-height: 400px;
    padding-top: 60px;
    overflow: hidden;
  }
</style>
