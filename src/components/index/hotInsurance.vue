<template>
	<div class="hot-insurance index-hot-box">
		<h2 class="hot-title disBox">
			<p class="hot-title-head box-flex"><img src="../../assets/images/index/indexhot3.png" alt="">保险服务</p>
			<p class="hot-title-tip">一次托付  终生受益</p>
		</h2>
		<div class="index-insurance">
			<ul class="index-insurance-ul" id="insuranceUl">
				<li class="">
					<router-link class="JumpBtn" to="">
						<p class="insurance-name">平安全年交通工具意外险</p>
						<p class="insurance-sm"><span>中国平安</span></p>
						<p class="insurance-price"><span>100.00</span>元起</p>
					</router-link>
				</li>
				<li class="">
					<router-link class="JumpBtn" to="">
						<p class="insurance-name">平安e家保</p>
						<p class="insurance-sm"><span>平安保险</span></p>
						<p class="insurance-price"><span>576.00</span>元起</p>
					</router-link>
				</li>
				<li class="">
					<router-link class="JumpBtn" to="">
						<p class="insurance-name">健康之享重大疾病保障计划 10年交</p>
						<p class="insurance-sm"><span>安邦保险</span></p>
						<p class="insurance-price"><span>511.03</span>元起</p>
					</router-link>
				</li>
			</ul>
			<div class="insurance-img">
				<img src="https://www.bankhui.com/uploadfiles/paitronicCenter/loan/2017/03/15/8e8bbd1fa9f947e992dd4654df572a46.png" alt="">
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>
<style scoped>
.index-hot-box {
    background: #ffffff;
    margin-top: 10px;
}
.hot-title {
    height: 54px;
    line-height: 54px;
    border-bottom: 1px solid #f1f1f1;
    font-weight: normal;
    padding: 0 18px;
}
.disBox {
    display: box;
    display: -webkit-box;
    display: -ms-box;
    display: -moz-box;
}
.hot-title-head {
    font-size: 15px;
    color: #333333;
}
.box-flex {
    box-flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-box-flex: 1;
}
.hot-title-head img {
    width: 12px;
    height: 16px;
    margin-right: 10px;
    vertical-align: -2px;
}
.hot-title-tip {
    font-size: 12px;
    color: #999999;
}
.index-insurance {
    position: relative;
}
.index-insurance-ul {
    overflow: hidden;
    clear: both;
    border-bottom: 1px solid #f1f1f1;
}
.index-insurance-ul li:first-child {
    border-right: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    width: 49%;
}
.index-insurance-ul li {
    width: 50%;
    height: 110px;
    float: left;
    display: table;
}
.index-insurance-ul li a {
    display: block;
    height: 100%;
}
.index-insurance-ul li .insurance-name {
    height: 20px;
    font-size: 14px;
    color: #333333;
    margin-bottom: 11px;
    padding-top: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.index-insurance-ul li p {
    height: 20px;
    padding: 0 12%;
    overflow: hidden;
}
.index-insurance-ul li .insurance-sm span {
    color: #ff6213;
    border: 1px solid #ff6213;
    font-size: 12px;
    border-radius: 5px;
    display: inline-block;
    padding: 0 10px;
}
.index-insurance-ul li .insurance-price {
    font-size: 10px;
    color: #999999;
    margin-top: 10px;
}
.index-insurance-ul li .insurance-price span {
    font-size: 15px;
    color: #4995eb;
}
.insurance-img {
    position: absolute;
    width: 50%;
    height: 110px;
    right: 0;
    bottom: 0;
    overflow: hidden;
}
.insurance-img img {
    width: 100%;
    height: auto;
    display: block;
}
</style>