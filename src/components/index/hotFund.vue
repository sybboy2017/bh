<template>
	<div class="hot-fund index-hot-box">
		<h2 class="hot-title disBox">
			<p class="hot-title-head box-flex">
				<img src="../../assets/images/index/indexhot2.png" alt="">基金精选</p>
			<p class="hot-title-tip">收益领跑  增值可期</p>
		</h2>
		<div class="index-hot-fund" id="hotFund">
			<ul class="disBox index-fund-ul JumpBtnHide">
				<li class="box-flex">
					<p class="yield-rate-num">+38.44</p>
					<p class="yield-rate">近一年涨跌幅(%)</p>
				</li>
				<li class="box-flex">
					<p class="fund-name">国泰金鑫</p>
					<p class="fund-sm orange"><span>10元起购</span>
						<span>费率0.6%</span>
					</p>
				</li>
			</ul>

			<ul class="disBox index-fund-ul JumpBtnHide">
				<li class="box-flex">
					<p class="yield-rate-num">+23.41</p>
					<p class="yield-rate">近一年涨跌幅(%)</p>
				</li>
				<li class="box-flex">
					<p class="fund-name">中欧潜力价值灵活配置混合</p>
					<p class="fund-sm orange"><span>10元起购</span>
						<span>费率0.6%</span>
					</p>
				</li>
			</ul>

			<ul class="disBox index-fund-ul JumpBtnHide">
				<li class="box-flex">
					<p class="yield-rate-num">3.671</p>
					<p class="yield-rate">七日年化收益率(%)</p>
				</li>
				<li class="box-flex">
					<p class="fund-name">嘉合货币A</p>
						<p class="fund-sm blue"><span>10元起购</span>
						<span>免费率</span>
					</p>
				</li>
			</ul>
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
.index-fund-ul {
    height: 86px;
    border-bottom: 1px solid #f1f1f1;
}
.index-fund-ul li:first-child {
    border-right: 1px solid #f1f1f1;
}
.index-fund-ul li {
    width: 50%;
    height: 60px;
    margin-top: 13px;
}
.index-fund-ul li .yield-rate-num {
    font-size: 35px;
    color: #ff6213;
    padding: 13px 0 13px 12%;
}
.index-fund-ul li p {
    padding: 0 12%;
}
.index-fund-ul li .yield-rate {
    font-size: 13px;
    color: #999999;
}
.index-fund-ul li .fund-name {
    height: 23px;
    font-size: 14px;
    color: #333333;
    margin-bottom: 10px;
    padding-top: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 8%;
}
.index-fund-ul li .fund-sm {
    padding: 0 7%;
}
.index-fund-ul li .fund-sm.orange span {
    color: #ff6213;
    border: 1px solid #ff6213;
}
.index-fund-ul li .fund-sm span:first-child {
    margin-left: 0;
}
.index-fund-ul li .fund-sm span {
    font-size: 12px;
    border-radius: 5px;
    display: inline-block;
    height: 20px;
    padding: 0 2px;
    margin-left: 5px;
}
.index-fund-ul li .fund-sm.blue span {
    color: #4995eb;
    border: 1px solid #4995eb;
}
</style>