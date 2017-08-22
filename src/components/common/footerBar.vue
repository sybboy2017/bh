<template>
	<div class="mui-bar mui-bar-tab " id="nav">  
        <router-link :class="selected == 0?'mui-tab-item mui-active':'mui-tab-item'" @click.native="switchNav(0)" to="/" id="a1">  
            <span class="mui-icon mui-icon-newhome"></span>  
            <span class="mui-tab-label">首页</span>  
        </router-link>  
        <router-link  :class="selected == 1?'mui-tab-item mui-active':'mui-tab-item'" @click.native="switchNav(1)" to="/product" id="a2">  
            <span class="mui-icon mui-icon-newproduct"></span>  
            <span class="mui-tab-label">产品</span>  
        </router-link>  
        <router-link :class="selected == 2?'mui-tab-item mui-active':'mui-tab-item'" @click.native="switchNav(2)" to="/myaccount" id="a3">  
            <span class="mui-icon mui-icon-newMy"></span>  
            <span class="mui-tab-label">我的</span>  
        </router-link>  
	</div>
</template>
<script>
	export default{
		data() {
			return {
				selected: 0
			}
		},
		methods: {
			switchNav(n) {
				this.selected = n
			}
		}
	}
</script>
<style scoped>
.mui-bar-tab {
    bottom: 0;
    display: table;
    width: 100%;
    height: 50px;
    padding: 0;
    table-layout: fixed;
    border-top: 0;
    border-bottom: 0;
    -webkit-touch-callout: none;
}
.mui-bar {
    position: fixed;
    z-index: 10;
    right: 0;
    left: 0;
    height: 44px;
    padding-right: 10px;
    padding-left: 10px;
    border-bottom: 0;
    background-color: #f7f7f7;
    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, .85);
    box-shadow: 0 0 1px rgba(0, 0, 0, .85);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.mui-bar-tab .mui-tab-item.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-active .mui-icon-newhome {
    background: url(../../assets/images/taractive_03.png);
    background-size: cover;
}
.mui-bar .mui-icon {
    font-size: 24px;
    position: relative;
    z-index: 20;
    padding-top: 10px;
    padding-bottom: 10px;
}
.mui-icon-newhome {
    background: url(../../assets/images/tabarIcon_03.png);
    background-size: cover;
}
.mui-icon-newproduct {
    background: url(../../assets/images/tabarIcon_03.png) -198px 0px;
    background-size: cover;
}
.mui-icon-newMy {
    background: url(../../assets/images/tabarIcon_03.png) -394px 0px;
    background-size: cover;
}
.mui-icon {
    font-family: Muiicons;
    font-size: 24px;
    font-weight: normal;
    font-style: normal;
    line-height: 1;
    display: inline-block;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
}
.mui-bar-tab .mui-tab-item .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>