<template>
  <div id="app">
    <v-header></v-header>
    <section class="down-wrap bg-primary-img">
    	<div class="down-box wrap-center">
    		<div class="app-wrap"></div>
    		<div class="app-intro">
    			<h1>有个车APP</h1>
    			<h1>掌上拍车更方便</h1>
    			<h4>文案</h4>
    			<div class="qrcode-wrap">
    				<dl>
						<dt class="qrcode-Android"></dt>
						<dd class="color-gray">安卓客户端</dd>
					</dl>
					<dl style="margin-left: 32px;">
						<dt class="qrcode-iOS"></dt>
						<dd class="color-gray">iOS客户端</dd>
					</dl>
    			</div>
    		</div>
    	</div>
    </section>
    <v-footer></v-footer>  
</div>
</template>
<script>
  import vHeader from 'common/Header';
  import vFooter from 'common/Footer';
  export default {
    data(){
      return {
        navIndex: 1,
      }
    },
    components:{
      vHeader,vFooter
    },
    methods:{
    	
    }
  }
</script>
<style type="text/css" lang='scss' scoped>
	.down-wrap{
		width: 100%;
		height: 690px;
	}
	.down-box{
		overflow: hidden;
		padding-top: 133px;
		.app-wrap,.app-intro{
			float: left;
			width: 500px;
			height: 574px;
			margin-left: 80px;
		}
		.app-wrap{
			background: url('../../../static/img/app_phone.png') no-repeat;
		}
		.app-intro{
			color: #fff;
			h1{
				font-size: 50px;
				line-height: 80px;
			}
			h4{
				font-size: 20px;
				line-height: 30px;
				margin: 40px 0px 56px;
			}
		}
		.qrcode-wrap{
			width: 320px;
			height: 200px;
			border-radius: 5px;
			padding: 40px 44px;
			background-color: #fff;
			overflow: hidden;
			dl{
				float: left;
			}
			dt{
				width: 100px;
				height: 100px;
				background-size: cover;
			}
			dd{
				font-size: 12px;
				margin-top: 16px;
				text-align: center;
			}
		}
	}
</style>
