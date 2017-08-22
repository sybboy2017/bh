<template>
	<div class="signin-wrap">
	<div class="header">
		<img class="sigin-logo" src="../assets/images/login/logo.png" alt="">
		<h2>欢迎登录百汇金服</h2>
		<router-link class="sign-back" to="/">
			<img src="../assets/images/login/sign-back.png" alt="">
		</router-link>
	</div>
	<div class="sign-main">
		<form id="signForm" action="">
			<div class="sign-list disBox user">
				<label class="label01"></label>
				<p class="sign-input box-flex">
					<input type="text" class="box-sizing" name="username" v-model="username" id="username" maxlength="11" placeholder="请输入您的手机号码">
				</p>
			</div>
			<div class="sign-list disBox mart1 pasword">
				<label class="label02"></label>
				<p class="sign-input box-flex">
					<input type="password" class="box-sizing" name="password" v-model="password" id="password" placeholder="请输入您的账号密码">
				</p>
			</div>
			<div class="sign-list mart10 check" v-show="isShowVCode">
				<label class="label03"></label>
				<p class="sign-input">
					<input type="text" class="box-sizing" name="check-code" v-model="checkcode" id="check-code" maxlength="4" placeholder="请输入图片验证码">
				</p>
				<img id="imgCode" :src="imgCodeUri" alt="" @click="changeImgCode">
			</div>
			<div class="sign-channel">
				<router-link id="resiBtn" class="appleId" to="/register">注册账号</router-link>
				<router-link class="forgetpwd" to="/resetPassword">忘记密码？</router-link>
			</div>
			<div class="signbtnbox">
				<button type="button" class="signInBtn" @click="login">登录</button>
			</div>
		</form>
	</div>
</div>
</template>
<script>
import * as _ from '../util/tool'
import {mapActions} from 'vuex'
import api from '../data/api'
export default {
		data(){
			return {
				imgCodeUri:'http://235.baihui.con/user/validate/image?'+ Math.random(),
				isShowVCode:false,
				username:'',
				password:'',
				checkcode:''
			}
		},
		computed:{
			
		},
		methods:{
			...mapActions({ setUserInfo: 'setUserInfo' }),
			changeImgCode() {
				this.imgCodeUri = 'http://235.baihui.con/user/validate/image?'+ Math.random()
			},
			login(){
				if(this.isShowVCode&&this.checkcode == ''){
					_.alert('请输入图片验证码')
					return
				}
			   var encrypt = new JSEncrypt();
			   var pub = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDdK5JNniDU49DYQ442Tg9parjuDNSGCGB7dQJ3KoOzu2rlAIpAyt5BMc+TNqUBmQMmkAfkuwpVd0GRWhKTIoNibShLfuz8IA8bARUTxv/n2T92VeB6gZVW5NhVOEcxBhNq7VCQ2XW/ss4IYpimeNMeKpdcNBiVTS3kicyz5KS2lQIDAQAB";
	           encrypt.setPublicKey(pub);
	           var encrypedPwd = encrypt.encrypt(this.password);
	           
	           let data = new FormData();
	           data.append('username',this.username);
	           data.append('password',encrypedPwd);
	           data.append('rememberme','true');
	           data.append('checkcode',this.checkcode);
			  /* let data = {
	                username: this.username,
	                password: encrypedPwd,
	                "rememberme":"true",
					'checkcode': this.checkcode
                }*/

	            /* this.$http.post('/user/login?rand='+ Math.random(),data).then(res => {
	             	console.log(res.data)
	             	if(res.data.resultCode && res.data.resultCode == 10000){
			    		this.setUserInfo(res.data.result.username)
                        this.$router.replace('/myaccount')
			    	}else{
			    		_.alert(res.data.reason)
						this.changeImgCode()
						if (res.data.result != null && res.data.result.loginErrorCode == 1) {
							this.isShowVCode = true
						}
			    	}
	             }).catch(error => {
	             	console.log(error)
	             })*/
	            
	            api.Login(data).then(res => {
	             	console.log(res.data)
	             	if(res.data.resultCode && res.data.resultCode == 10000){
			    		this.setUserInfo(res.data.result.username)
                        this.$router.replace('/myaccount')
			    	}else{
			    		_.alert(res.data.reason)
						this.changeImgCode()
						if (res.data.result != null && res.data.result.loginErrorCode == 1) {
							this.isShowVCode = true
						}
			    	}
	             }).catch(error => {
	             	console.log(error)
	             })
			    
			}
		}
	}
</script>
<style scoped>
.header {
    width: 100%;
    height: 140px;
    text-align: center;
    position: relative;
}
.sigin-logo {
    width: 140px;
    height: auto;
    margin: 0 auto;
    display: block;
    padding: 50px 0 13px;
}
.header h2 {
    font-size: 15px;
    color: #333333;
    font-weight: normal;
}
.sign-back {
    width: 50px;
    height: 30px;
    position: absolute;
    top: 55px;
    left: 0;
    display: block;
}
.sign-back img {
    margin-top: 5px;
    width: 10px;
    height: 18px;
}
.sign-list {
    width: 100%;
    height: 50px;
    background: #fafafa;
}
.disBox {
    display: box;
    display: -webkit-box;
    display: -ms-box;
    display: -moz-box;
}
.sign-list label.label01 {
    background-position: 0 0;
}
.sign-list label {
    display: block;
    width: 50px;
    height: 50px;
    background: url(../assets/images/login/login-icon.png) no-repeat;
    margin-left: 30px;
}
.sign-list .sign-input input {
    width: 100%;
    height: 50px;
    border: 0;
    outline: none;
    padding-right: 15px;
    text-indent: 15px;
    background: #fafafa;
    font-size: 13px;
    color: #333333;
}
.box-sizing {
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}	
.mart1 {
    margin-top: 1px;
}
.sign-list label.label02 {
    background-position: -50px 0;
}
.box-flex {
    box-flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-box-flex: 1;
}
.mart10 {
    margin-top: 10px;
}
.sign-list label.label03 {
    background-position: -100px 0;
    display: inline-block;
    float: left;
}
#imgCode {
    width: 65px;
    cursor: pointer;
    height: 26px;
    margin-top: 12px;
    margin-right: 20px;
}
#signForm .check #imgCode {
    float: right;
}
.sign-channel {
    height: 63px;
    line-height: 55px;
    padding: 0 32px;
    clear: both;
}
.sign-channel .appleId {
    text-decoration: underline;
}
.sign-channel a {
    display: inline-block;
    font-size: 14px;
    color: #4995eb;
    outline: none;
}
.sign-channel .forgetpwd {
    float: right;
}
.signbtnbox {
    height: 40px;
    margin: 0 32px;
}
.signbtnbox .signInBtn {
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 15px;
    text-align: center;
    background: #4995eb;
    border: 0;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
}
#signForm .check .sign-input {
    float: left;
    width: 43%;
}
</style>