<template>
<div id="slider" class="mui-slider">
	<mt-swipe :auto="4000">
	  <mt-swipe-item v-for="item in bannerList" :key="item.id">
	  	<div class="mui-slider-item">
	  		<img :src="baseURL + item.imgPath" />
	  	</div>
	  </mt-swipe-item>
	</mt-swipe>
</div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
import { Swipe, SwipeItem } from 'mint-ui'
export default {
	created() {
		if(this.bannerList.length == 0){
			this.$store.dispatch('getBannerList')
			/* this.$http.get('/financing/guess_user_likes/1?type=M%E7%AB%99&rand='+ Math.random()).then(res => {
		        this.$store.commit('GET_BANNER_LIST',res.data.result.list )
		    })*/
		}
	},
	computed: {	
		...mapGetters([
			'bannerList','baseURL'
		])
	},
	methods: {
	},
	components:{
		Swipe,SwipeItem
	}
}
</script>
<style scoped>
.mui-slider {
    position: relative;
    z-index: 1;
	overflow: hidden;
    width: 100%;
    height:200px;
}
.mui-slider-item {
    font-size: 14px;
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    vertical-align: top;
    white-space: normal;
}
.mui-slider-item img{
	height: 200px;
	width:100%;
}
</style>