<template>
	<div id="main">
		<transition name="router-fade" mode="out-in">
			<router-view></router-view>
		</transition>
		<footer-bar></footer-bar>
	</div>
</template>

<script>
import footerBar from '../components/common/footerBar.vue'
export default {
	data() {
		return {
			
		}
	},
	components:{
		footerBar
	}
}
</script>
<style scoped>
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>