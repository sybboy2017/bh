<template>
	<div style="text-align: center;margin-top:100px">
	  <span class="red" v-if="userName">
	  	   您好，欢迎{{userName}} 回来 &nbsp;&nbsp;&nbsp;&nbsp;
	  	  <router-link to="" @click.native="loginOut">立即退出</router-link>
	  </span>
	  <router-link to="/login" v-else>登录/注册</router-link>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
	export default {
		created(){
			this.$store.dispatch('getCurrentUser')
		},
		computed:{
			...mapGetters([
				'userName'
			])
		},
		methods:{
			loginOut(){
				this.$store.dispatch('loginOut')
				location.reload()
			}
		}
	}
</script>
<style scoped>
	.red{color:red}
</style>