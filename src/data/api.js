import fetch from '../config/fetch'
import axios from 'axios'


export default {
	baseURL:'https://www.bankhui.com/',//baseURL
    /**
     * 用户登录
     */
    Login(params) {
       // return fetch('POST', '/user/login?rand='+ Math.random(),params)
       return axios.post('/user/login?rand='+ Math.random(),params)
    },
    loginOut(){
    	return fetch('GET', '/user/logout?rand='+ Math.random())
    },
    /**
     * 用户注册
     */
    Regist(params) {
        return axios.post('/user/register/person/', params)
    },

    /**
     * 发送注册验证码
     */
     RegistVerifiCode(tellphone,params) {
         return axios.post('/user/validate/sendRegisterMcode/' + tellphone+'?rand='+ Math.random(), params)
     },
     
     /**
      * 获取首页banner列表
      */
     getBannerList(){
     	//return slider
     	//this.$http.get('/financing/guess_user_likes/1?type=M%E7%AB%99&rand='+ Math.random()).then(res => {return res})
     	return fetch('GET','/financing/guess_user_likes/1?type=M%E7%AB%99&rand='+ Math.random())
     },
     /**
      * 获取当前用户
      */
     getCurrentUser(){
     	return fetch('GET','/user/current?rand='+ Math.random())
     }
}