<template>
	<div class="register-wrap">
	<div class="header">
		<img class="sigin-logo" src="../assets/images/login/logo.png" alt="">
		<h2>欢迎注册百汇金服</h2>
		<router-link class="sign-back" to="/"><img src="../assets/images/login/sign-back.png" alt=""></router-link>
	</div>
	<div class="register-main">
		<form id="registerForm">
			<div class="register-list disBox">
				<p class="register-input box-flex"><input type="text" name="mobile" v-model="mobile" maxlength="11" class="rg-input" placeholder="请输入您的手机号码"></p>
			</div>
			<div class="register-list disBox mart1 yzm">
				<p class="register-input box-flex"><input type="text" name="vcode" v-model="vcode" id="vcode" class="rg-input" maxlength="4" placeholder="请输入图片验证码"></p>
				<img id="imgCode" :src="imgCodeUri" alt="" @click="changeImgCode">
			</div>
			<div class="register-list disBox mart1">
				<p class="register-input box-flex"><input type="text" name="mcode" v-model="mcode" maxlength="6" class="rg-input" placeholder="请输入您的手机验证码"></p>
				<router-link to="" class="rg-button vcode-button" @click.native="getMCode" v-show="!sendCode">获取验证码</router-link>  <!-- 置灰 disabled-btn -->
				<router-link to="" class="rg-button vcode-button disabled-btn" v-show="sendCode"><em>{{timeOut}}</em>秒后重新获取</router-link>  <!-- 置灰 disabled-btn -->
			</div>
			<div class="register-list disBox mart10">
				<p class="register-input box-flex"><input type="password" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')" name="password" v-model="password" maxlength="16" class="rg-input login_showPwd" style="display:none" placeholder="设置6-16位字母+数字或符号组合">
 				<input type="text" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')" maxlength="16" class="rg-input login_showText" placeholder="设置6-16位字母+数字或符号组合">
 				</p>
			</div>
			<div class="register-list disBox mart1">
				<p class="register-input box-flex"><input type="password" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')" name="okpassword" v-model="okpassword" maxlength="16" class="rg-input login_showPwd" style="display:none" placeholder="请再次输入密码">
 				<input type="text" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')" maxlength="16" class="rg-input login_showText" placeholder="请再次输入密码">
 				</p>
			</div>
			<div class="registerbtnbox"> 
				<button type="button" class="registerBtn" @click="regSubmit">同意协议并注册</button>
				<router-link to="/registerAgreement" class="xieyi">《用户注册服务协议》</router-link>
				<router-link to="/login" class="logoBtn">登录账号</router-link>
			</div>
		</form>
	</div>
</div>
</template>
<script>
import * as _ from '../util/tool'
import api from '../data/api'
	export default {
		data(){
			return {
				imgCodeUri:'http://235.baihui.con/user/validate/image?'+ Math.random(),
				mobile:'',
				vcode:'',
				mcode:'',
				password:'',
				okpassword:'',
				sendCode: false,
            	timeOut: 60
			}
		},
		computed:{
			
		},
		methods:{
			changeImgCode() {
				this.imgCodeUri = 'http://235.baihui.con/user/validate/image?'+ Math.random()
			},
			checkMobile(){
				if(this.mobile.length == 0) {
		            _.alert('手机号不能为空')
		        }else if (!_.validPhone(this.mobile)) {
		            _.alert('手机号格式错误')
		        }else{
		        	return true
		        }
		        
			},
			checkVCode(){
				if (this.vcode.trim().length == 0||this.vcode.trim().length < 4) {
		            _.alert("请输入四位图片验证码")
		        }else{
		        	return true
		        }
				
			},
			checkMCode(){
				if (this.mcode.trim().length != 6 ){
		             _.alert("请输入六位手机验证码")
		        }else{
		        	return true
		        }
		        
			},
			checkPassword(){
				let level = _.checkPwdStrong.check(this.password) 
				if (this.password.trim().length == 0) {
	            	_.alert("密码不能为空");
		        }else if(this.password.trim().length<6||this.password.trim().length>16){
		        	_.alert("设置6-16位字母+数字或符号的密码");
		        }else if (level < 2) {
		        	_.alert("有被盗风险,须使用字母、数字和符号两种及以上组合");
		        }else{
		        	return true
		        }
		        
			},
			checkOkPassword(){
				if (this.okpassword.trim().length == 0) {
		            _.alert("请再次输入密码");
		        }else if (this.okpassword.trim() != this.password.trim()) {
		            _.alert("两次输入密码不一致");
		        }else{
		        	return true
		        }
		        
			},
			getMCode(){
				if(this.checkMobile() && this.checkVCode()){
					let data = new FormData();
				    data.append('vcode',this.vcode);

					api.RegistVerifiCode(this.mobile,data).then(res => {
						if(res.data.resultCode && res.data.resultCode == 10000){
							this.sendCode = true
							this.setTimeOut()
						}else{
							this.sendCode = false
							_.alert(res.data.reason)
							this.changeImgCode()
						}
					}).catch(error => {
						console.log(error)
					})
					/*this.$http.post('/user/validate/sendRegisterMcode/'+this.mobile,fdata).then(res => {
						console.log(res)
						if(res.data.resultCode && res.data.resultCode == 10000){
							this.sendCode = true
							this.setTimeOut()
						}else{
							this.sendCode = false
							_.alert(res.data.reason)
							this.changeImgCode()
						}
					}).catch(error => {
						console.log(error)
					})*/
				}
			},
			setTimeOut () {
	            let timer = setTimeout(() => {
	                this.setTimeOut()
	                if(this.timeOut > 0) {
	                    this.timeOut--
	                }
	            }, 1000)
	            if(this.timeOut <= 0) {
	                this.sendCode = false
	                this.timeOut = 60
	                clearTimeout(timer)
	            }
        	},
			regSubmit(){
				 let data = new FormData();
				 data.append('mobile',this.mobile);
				 data.append('vcode',this.vcode);
				 data.append('mcode',this.mcode);
				 data.append('password',this.password);
				 data.append('okpassword',this.okpassword);
			
				if(this.checkMobile() && this.checkVCode() && this.checkMCode() && this.checkPassword() && this.checkOkPassword()){
					api.Regist(data).then(res => {
						if(res.data.resultCode && res.data.resultCode == 10000){
							this.$router.replace('/')
						}else{
							_.alert(res.data.reason)
							this.changeImgCode()
						}
					}).catch(error => {
						console.log(error)
					})
				}
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
.register-list {
    width: 100%;
    height: 50px;
    background: #ffffff;
}
.disBox {
    display: box;
    display: -webkit-box;
    display: -ms-box;
    display: -moz-box;
}
.register-list .register-input {
    width: 90%;
    margin: 0 auto;
}
.box-flex {
    box-flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-box-flex: 1;
}
.register-list .register-input input {
    width: 100%;
    height: 50px;
    border: 0;
    outline: none;
    padding-right: 15px;
    text-indent: 15px;
    background: #ffffff;
    font-size: 13px;
    color: #333333;
}
.mart1 {
    margin-top: 1px;
}
.mart10 {
    margin-top: 10px;
}
.registerbtnbox {
    height: 40px;
    margin: 30px 32px 0;
}
#imgCode {
    width: 65px;
    cursor: pointer;
    height: 26px;
    margin-top: 12px;
    margin-right: 20px;
}
.vcode-button {
    cursor: pointer;
    height: 50px;
    line-height: 50px;
    margin-right: 20px;
    display: inline-block;
    color: #4995eb;
    font-size: 13px;
}
.registerbtnbox .registerBtn {
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 15px;
    text-align: center;
    background: #4995eb;
    border: 0;
    outline: none;
    border-radius: 5px;
}
.registerbtnbox .xieyi {
    text-align: center;
    margin-top: 20px;
    font-size: 13px;
    color: #4995eb;
    display: block;
    float: left;
}
.registerbtnbox .logoBtn {
    text-align: center;
    margin-top: 20px;
    font-size: 13px;
    color: #4995eb;
    display: block;
    float: right;
    text-decoration: underline;
}
</style>