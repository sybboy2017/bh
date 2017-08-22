<template>
	<div class="hot-financing index-hot-box">
		<h2 class="hot-title disBox">
			<p class="hot-title-head box-flex">
				<img src="../../assets/images/index/indexhot1.png" alt="">理财热点</p>
			<p class="hot-title-tip">安心投资  随时存取</p>
		</h2>
		<div class="index-ymb">
			<dl class="index-ymb-dl disBox">
				<dt><img src="../../assets/images/index/indexymb.png" alt=""></dt>
				<dd class="box-flex">
					<p class="tip1">7*24小时提现 T+0到账</p>
					<p class="tip2"><span>4.131</span>%</p>
					<p class="tip3">七日年化收益率</p>
				</dd>
			</dl>
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
.index-ymb {
    width: 100%;
    height: 110px;
}
.index-ymb-dl dt {
    width: 50%;
    text-align: center;
}
.index-ymb-dl dt img {
    width: 114px;
    height: 97px;
    margin-top: 13px;
    display: inline-block;
}
.index-ymb-dl dd .tip1 {
    font-size: 13px;
    color: #333333;
    margin: 0 0 15px;
    overflow: hidden;
    padding-top: 21px;
}
.index-ymb-dl dd .tip2 {
    font-size: 15px;
    color: #ff7220;
}
.index-ymb-dl dd .tip3 {
    font-size: 13px;
    color: #999999;
    margin-top: 5px;
}
.index-ymb-dl dd .tip2 span {
    font-size: 30px;
}
</style>