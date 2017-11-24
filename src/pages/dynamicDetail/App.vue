<template>
  <div id="app">
    <v-header></v-header>
    <div class="bread-nav wrap-center">
      <span><a href="index.html">首页</a></span><i class="el-icon-arrow-right color-gray"></i><span><a href="dynamic.html">行业动态</a></span><i class="el-icon-arrow-right color-gray"></i><span>正文</span>
    </div>
    <div class="bg-gray">
      <section class="wrap-center essay-wrap">
        <div class="essay-box wrap">
          <h1 v-text='title'></h1>
          <div v-html='content'></div>
        </div>
      </section>
    </div>
    <v-footer></v-footer
>  </div>
</template>
<script>
  import vHeader from 'common/Header';
  import vFooter from 'common/Footer';
  import {postReq} from '../../assets/js/api';
  import {errorRes} from '../../assets/js/check';
  export default {
    data(){
      return {
        query:{},
        title: '',
        content: ''
      }
    },
    components:{
      vHeader,vFooter
    },
    methods:{
      getDetail(){
        let params ={
          essay_id: this.query.essay_id
        }
        postReq('/home/trendDetail',params).then(res=>{
          let {errcode,message,content} = res;
          if (errcode==0) {
            this.title = content.title;
            this.content = escape2Html(content.content);
          }else{
            errorRes(errcode,message);
          }
        })
      }
    },
    created(){
      this.$nextTick(()=>{
        this.query = getRequest();
        this.getDetail();
      })
    }
  }
</script>
<style type="text/css" lang='scss' scoped>
  .essay-wrap{
    padding: 30px 0px 90px;
  }
  .essay-box{
    h1{
      padding: 70px 0px;
      text-align: center;
    }
  }
</style>
