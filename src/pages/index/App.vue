<template>
  <div id="app">
    <v-header :nav-index='navIndex'></v-header>
    <v-swiper-banner></v-swiper-banner>
    <v-search-box></v-search-box>
    <v-show-intro></v-show-intro>
    <v-sale-car></v-sale-car>
    <div class="ad"></div>
    <v-recent-sale></v-recent-sale>
    <div class="app-download">
      <a href="download.html" target="_blank"></a>
    </div>
    <v-dynamic></v-dynamic>
    <div class="address">
      <div class="wrap-center">
        <h1>杭州有个车有限公司</h1>
        <ul class="address-detail">
          <li>地址：杭州市滨江区合川路3111号近铁中心3号楼</li>
          <li>服务电话：1010-8885（8：00 - 20：00）</li>
          <li>服务邮箱：service@ttpai.cn</li>
        </ul>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import vHeader from 'common/Header';
  import vSwiperBanner from 'components/index/SwiperBanner';
  import vSearchBox from 'components/index/SearchBox';
  import vShowIntro from 'components/index/ShowIntro';
  import vSaleCar from 'components/index/SaleCar';
  import vRecentSale from 'components/index/RecentSale';
  import vDynamic from 'components/index/Dynamic';
  import vFooter from 'common/Footer'
  export default {
    data(){
      return {
          currentIndex: 0,
          navIndex: 0
      }
    },
    components:{
      vHeader,vSwiperBanner,vSearchBox,vShowIntro,vSaleCar,vRecentSale,vDynamic,vFooter
    }
  }
</script>
<style type="text/css" lang='scss' scoped>
  .ad,.app-download,.address{
    width: 100%;
    height: 475px;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  .ad{
    background: url('../../../static/img/home_ad.jpg');
  }
  .app-download{
    position: relative;
    background-image: url('../../../static/img/home_app_download.jpg');
    a{
      position: absolute;
      left: 15%;
      width: 200px;
      height: 50px;
      bottom: 88px;
    }
  }
  .address{
    height: 350px;
    background-image: url('../../../static/img/home_bg_adress.jpg');
    color: #fff;
  }
  .address h1{
    font-size: 28px;
    padding: 96px 0px 64px;
  }
  .address-detail{
    font-size: 16px;
    line-height: 30px;
  }
</style>
