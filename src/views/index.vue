<template>
	<div class="index-wrap">
		<div class="index-header">
		    <div class="index-head-icon">
				<p class="index-news">
					<router-link to="">
						<img src="../assets/images/index/news.png" alt="">
						<i></i>
					</router-link>
				</p>
				<p class="index-search">
					<router-link to="">
						<img src="../assets/images/index/search.png" alt="">
					</router-link>
				</p>
			</div>
			
			<slider-banner></slider-banner>
			
			<div class="index-nav">
				<ul class="nav-view">
					<li class="nav-view-cell JumpBtnHide">
		                    <p class="nav-icon nav-icon-financing"></p>
		                    <p class="nav-name">理财</p>
		            </li>
		            <li class="nav-view-cell JumpBtnHide">
		                    <p class="nav-icon nav-icon-fund"></p>
		                    <p class="nav-name">基金</p>
		            </li>
		            <li class="nav-view-cell">
		            	<a href="/views/insurance/insurance.html">
		                    <p class="nav-icon nav-icon-insurance"></p>
		                    <p class="nav-name">保险</p>
		                </a>
		            </li>
		            <li class="nav-view-cell">
		            	<a href="/views/loan/loanindex.html">
		                    <p class="nav-icon nav-icon-loan"></p>
		                    <p class="nav-name">贷款</p>
		                </a>
		            </li>
				</ul>
			</div>
		
		  <hot-financing></hot-financing>
		  <hot-fund></hot-fund>
		  <hot-insurance></hot-insurance>
		  
		  <div class="index-about-bankhui index-hot-box">
				<a href="/views/knowbankhui/knowbankhui.html">
					<h2>了解百汇金服<img src="../assets/images/index/indexabout1.png" alt=""></h2>
					<div class="inAbout">
						<ul class="index-about-ul disBox">
							<li class="box-flex disBox">
								<p class="about-img"><img src="../assets/images/index/indexabout2.png" alt=""></p>
								<p class="about-wen box-flex bor-rig">正规持牌金融机构提供金融产品,权威有保障</p>
							</li>
							<li class="box-flex disBox">
								<p class="about-img"><img src="../assets/images/index/indexabout3.png" alt=""></p>
								<p class="about-wen box-flex">一站式金融信息服务平台,金融“零距离”</p>
							</li>
						</ul>
					</div>
				</a>
		   </div>
		   
		   <div class="bankhui-sign">
				<p><span>百汇恒金出品</span></p>
		   </div>
		   
		</div>
	</div>
</template>
<script>
import sliderBanner from '../components/index/sliderBanner.vue'
import hotFinancing from '../components/index/hotFinancing.vue'
import hotFund from '../components/index/hotFund.vue'
import hotInsurance from '../components/index/hotInsurance.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
		   sliderBanner,
		   hotFinancing,
		   hotFund,
		   hotInsurance
		}
	}
</script>
<style scoped>
.index-wrap {
    padding-bottom: 50px;
}
.index-header {
	position: relative;
}
.index-head-icon {
    position: absolute;
    top: 0;
    width: 100%;
    height: 18px;
    z-index: 99;
    margin-top: 10px;
}
.index-news {
    width: 55px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    display: inline-block;
    float: left;
}
.index-search {
    width: 55px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    float: right;
    display: inline-block;
}
.index-head-icon .index-news img {
    width: 17px;
    height: 18px;
    vertical-align: middle;
}
.index-head-icon .index-search img {
    width: 19px;
    height: 18px;
    vertical-align: middle;
}
.index-head-icon .index-news i {
    position: absolute;
    background: red;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    top: 7px;
    display: none;
}
.index-nav, .nav-view {
    width: 100%;
    height: 73px;
    background: #fff;
    box-shadow: 0 0 10px 0 #e4e4e4;
}
.index-nav, .nav-view {
    width: 100%;
    height: 73px;
    background: #fff;
    box-shadow: 0 0 10px 0 #e4e4e4;
}
.nav-view-cell {
    width: 25%;
    height: 73px;
    float: left;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
}
.nav-icon {
    width: 30px;
    height: 30px;
    margin: 10px auto 7px;
}
.nav-icon-financing {
    background: url(../assets/images/index/indexnav1.png) no-repeat;
    background-size: 100% 100%;
}
.nav-name {
    font-size: 13px;
    color: #666666;
}
.nav-icon-fund {
    background: url(../assets/images/index/indexnav2.png) no-repeat;
    background-size: 100% 100%;
}
.nav-icon-insurance {
    background: url(../assets/images/index/indexnav3.png) no-repeat;
    background-size: 100% 100%;
}
.nav-icon-loan {
    background: url(../assets/images/index/indexnav4.png) no-repeat;
    background-size: 100% 100%;
}
.nav-view-cell a {
    width: 100%;
    height: 100%;
    display: block;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
}
.index-about-bankhui {
    clear: both;
}
.index-hot-box {
    background: #ffffff;
    margin-top: 10px;
}
.index-about-bankhui h2 {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    color: #666666;
    font-weight: normal;
}
.index-about-bankhui h2 img {
    width: 17px;
    height: 17px;
    vertical-align: -5px;
    margin-left: 20px;
}
.inAbout {
    padding: 15px 3%;
}
.disBox {
    display: box;
    display: -webkit-box;
    display: -ms-box;
    display: -moz-box;
}
.index-about-ul li {
    width: 50%;
}
.box-flex {
    box-flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-box-flex: 1;
}
.index-about-ul li:first-child .about-img {
    margin-left: 0;
}
.index-about-ul li .about-img {
    margin-left: 7%;
}
.index-about-ul li img {
    width: 41px;
    height: 41px;
}
.index-about-ul li .bor-rig {
    border-right: 1px solid #f1f1f1;
}
.index-about-ul li .about-wen {
    padding: 5px 3% 0;
    font-size: 10px;
    color: #999999;
    text-align: justify;
    line-height: 15px;
}
.bankhui-sign {
    width: 100%;
    height: 31px;
    overflow: hidden;
}
.bankhui-sign p {
    width: 80%;
    height: 1px;
    border-bottom: 1px solid #dbdbdb;
    margin: 0 auto;
    padding-top: 15px;
    position: relative;
}
.bankhui-sign p span {
    position: absolute;
    width: 40%;
    height: 20px;
    line-height: 20px;
    background: #f2f2f2;
    top: 5px;
    left: 50%;
    text-align: center;
    margin-left: -20%;
    font-size: 12px;
    color: #cccccc;
}
</style>