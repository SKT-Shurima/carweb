<template>
	<div class="wrap-center">
		<div class="wrap">
			<div class="footer-l">
				<div class="footer-logo"></div>
				<ul class="color-gray">
					<li class="contact-type">
						<span>服务电话：400-23456789</span>
						<span style="margin-left: 20px;">电子邮箱：1215561@163.com</span>
					</li>
					<li class="auth">
						<span>Copyright © 2017 杭州有个车网络科技有限公司 </span>
						<span style="margin-left: 20px;">
							<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=" target="_blank"><i class="ghs inline-block"></i>浙ICP备11024029号</a>
						</span>
					</li>
				</ul>
			</div>
			<div class="footer-r">
				<dl>
					<dt class="qrcode-Android"></dt>
					<dd class="color-gray">安卓客户端</dd>
				</dl>
				<dl style="padding:0px 20px; border-right: 1px solid #ddd;">
					<dt class="qrcode-iOS"></dt>
					<dd class="color-gray">iOS客户端</dd>
				</dl>
				<dl style="padding-left: 20px;">
					<dt class="qrcode-wx"></dt>
					<dd class="color-gray">微信公众号</dd>
				</dl>
			</div>   
		</div>
	</div>
</template>
<style type="text/css" lang='scss' scoped>
	.wrap{
		width: 100%;
		height: 220px;
		overflow: hidden;
		padding: 60px 0px 40px;
	}
	.footer-logo{
		width: 150px;
		height: 32px;
		margin-bottom: 36px;
		background: url('../../static/img/footer_logo.png') no-repeat;
	}
	.contact-type{
		font-size: 14px;
		line-height: 20px;
		margin-bottom: 10px;
	}
	.auth{
		font-size: 12px;
	}
	.footer-l{
		float: left;
		a{
			color: #768185;
		}
	}
	.footer-r{
		float: right;
		overflow: hidden;
		margin-top: 16px;
		dl{
			float: left;
		}
		dt{
			width: 80px;
			height: 80px;
			background-size: cover;
		}
		dd{
			font-size: 12px;
			line-height: 30px;
			text-align: center;
		}
	}
	.ghs{
		width: 20px;
		height: 20px;
		vertical-align: -4px;
		background: url('../../static/img/ghs.png') no-repeat;
	}
</style>