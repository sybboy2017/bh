<template>
	<div class="resetpwd-wrap">
	<div class="head">
		<router-link class="back" to="/login"><img src="../assets/images/login/back.png" alt=""></router-link>
		<p>忘记密码</p>
	</div>
	<div class="pwd-main">
		<form id="pwdForm" action="">
			<div class="pwd-list disBox mart10">
				<label class="">手机号</label>
				<p class="pwd-input box-flex"><input type="text" class="box-sizing" name="mobilePhone" id="mobilePhone" maxlength="11" placeholder="请输入手机号码"></p>
			</div>
			<div class="pwd-list disBox mart10">
				<label>图片验证码</label>
				<p class="pwd-input box-flex"><input type="text" class="box-sizing" name="vcode" id="vcode" maxlength="4" placeholder="请输入图片验证码"></p>
				<img id="imgCode" :src="imgCodeUri" alt="" @click="changeImgCode">
			</div>
			<div class="pwd-list disBox mart1">
				<label>验证码</label>
				<p class="pwd-input box-flex"><input type="text" name="mcode" id="mcode" maxlength="6" class="box-sizing" placeholder="请输入短信验证码"></p>
				<router-link to="" class="vcode-button fg-button">获取验证码</router-link>  <!-- 置灰 disabled-btn -->
			</div>
			<div class="pwd-list disBox mart1">
				<label>设置新密码</label>
				<p class="pwd-input box-flex">
					<input type="password" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')" name="password" maxlength="16" class="rg-input login_showPwd" style="display:none" placeholder="6~16位字母+数字或符号组合">
 					<input type="text" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')" maxlength="16" class="rg-input login_showText" placeholder="6~16位字母+数字或符号组合">
 				</p>
			</div>
			<div class="pwd-list disBox mart1">
				<label>再次输入新密码</label>
				<p class="pwd-input box-flex">
					<input type="password" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')" name="okpassword" maxlength="16" class="rg-input login_showPwd" style="display:none" placeholder="请再次输入密码">
 					<input type="text" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')" maxlength="16" class="rg-input login_showText" placeholder="请再次输入密码">
 				</p>
			</div>
			<div class="pwdbtnbox"> 
				<button type="button" class="pwdBtn">确认修改</button>
			</div>
		</form>
	</div>
</div>
</template>
<script>
	export default {
		data(){
			return {
				imgCodeUri:'http://235.baihui.con/user/validate/image?'+ Math.random()
			}
		},
		computed:{
			
		},
		methods:{
			changeImgCode() {
				this.imgCodeUri = 'http://235.baihui.con/user/validate/image?'+ Math.random()
			}
		}
	}
</script>
<style scoped>
.head {
    height: 44px;
    line-height: 44px;
    background: #4995eb;
    color: #fff;
    position: relative;
    text-align: center;
    font-size: 18px;
}
.head .back {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 45px;
    height: 44px;
}
.head .back img {
    width: 11px;
    height: 20px;
    vertical-align: -3px;
}
.head p {
    font-size: 18px;
}
.pwd-list {
    width: 100%;
    height: 60px;
    background: #ffffff;
}
.mart10 {
    margin-top: 10px;
}
.disBox {
    display: box;
    display: -webkit-box;
    display: -ms-box;
    display: -moz-box;
}
.mart1 {
    margin-top: 1px;
}
.pwd-list label {
    font-size: 15px;
    color: #333333;
    line-height: 60px;
    padding-left: 18px;
}
.pwd-list .pwd-input {
    width: 90%;
    margin: 0 auto;
}
.pwd-list .pwd-input input {
    width: 100%;
    height: 60px;
    border: 0;
    outline: none;
    background: #ffffff;
    font-size: 13px;
    color: #333333;
    text-align: right;
}
.box-sizing {
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}
.pwd-list #imgCode {
    margin-top: 17px;
}
#imgCode {
    width: 65px;
    cursor: pointer;
    height: 26px;
    margin-top: 12px;
    margin-right: 20px;
}
.fg-button {
    height: 60px;
    line-height: 60px;
    display: inline;
    border-left: 1px solid #d6d6d6;
    padding: 0 16px;
    margin-right: 0;
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
.pwdbtnbox {
    height: 40px;
    margin: 50px 32px 0;
}
.pwdbtnbox .pwdBtn {
    width: 100%;
    height: 100%;
    line-height: 40px;
    color: #fff;
    font-size: 15px;
    text-align: center;
    background: #4995eb;
    border: 0;
    outline: none;
    border-radius: 5px;
}
</style>