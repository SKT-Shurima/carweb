<template>
	<ul class="wrap-center intro-wrap">
        <li v-for='(item,index) in introList'>
          <dl>
            <dt :class='`intro-${index+1}`' class="intro-img"></dt>
            <dd class="title" v-html='item.title'></dd>
            <dd class="intro color-gray" v-html='item.intro'></dd>
          </dl>
        </li>
      </ul>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				introList: [{
		            title: '免费上门检测',
		            intro: '随时随地检测&nbsp;&nbsp;安心省心放心'
		        },{
		            title: '全国买家竞价',
		            intro: '万名买家竞价&nbsp;&nbsp;给你一个最高价'
		        },{
		            title: '高价胜出获得',
		            intro: '公平&nbsp;&nbsp;公正&nbsp;&nbsp;透明&nbsp;&nbsp;买卖双方都放心'
		        },{
		            title: '成交当场付款',
		            intro: '实体店成交&nbsp;&nbsp;当场付款&nbsp;&nbsp;过户无忧'
		        }],
			}
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.intro-wrap{
		text-align: center;
		overflow: hidden;
		li{
			width: 25%;
			float: left;
		}
	}
	.intro-img{
	    width: 130px;
	    height: 130px;
	    margin:0px auto;
	}
	.title{
	    font-size: 18px;
	    line-height: 28px;
	}
	.intro{
	    font-size: 14px;
	    line-height: 20px;
	}
	@for $i from 1 to 5 {
    .intro-#{$i} {
        background: url('../../../static/img/home_sele_#{$i}.png');
    }
}
</style>