import api from '../../data/api'
import * as types from '../types'

const state = {
    userName: null
}

const actions = {
    /**
     * 获取当前用户信息
     */
    getCurrentUser({ commit }) {
       api.getCurrentUser().then(res => {
       	    if(res.resultCode && res.resultCode == 10000){
       	    	 console.log(res)
            	commit(types.GET_CURRENT_USER, res.result)
       	    }
       })
    },
    setUserInfo({commit},res) {
    	commit(types.SET_USER_INFO, res)
    },
    loginOut({commit}){
    	api.loginOut().then(res => {
    		if(res.resultCode && res.resultCode == 10000){
       	    	console.log(res)
    			commit(type.LOGIN_OUT,'')
    		}
    	})
    }
}

const getters = {
	userName: state => state.userName
}

const mutations = {
    [types.GET_CURRENT_USER](state, res) {
       state.userName = res.username
    },
    [types.SET_USER_INFO](state, res) {
       state.userName = res
    },
     [types.LOGIN_OUT](state, res) {
       state.userName = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}