import axios from 'axios'
import qs from 'qs'

import { Toast } from 'mint-ui';

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'https://www.bankhui.com/';//接口基本路径
axios.defaults.widthCredentials = true

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    Toast("错误的传参");
    return Promise.reject(error);
});

//返回状态判断
/*axios.interceptors.response.use((res) =>{
    if(!res.data.success){
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    Toast("网络异常");
    return Promise.reject(error);
});
*/
export default function(url, params, method) {
    return new Promise((resolve, reject) => {
	        axios({
	        	method: method || 'GET',
	        	url: url,
	        	params: params
	        }).then(response => {
	            resolve(response);
	        }, err => {
	            reject(err);
	        })
	        .catch((error) => {
	           reject(error)
	        })
	})
}
