import api from '../../data/api'
import * as types from '../types'

const state = {
	baseURL: api.baseURL,
    bannerList: []
}

const actions = {
    /**
     * 获取banner列表
     */
    getBannerList({ commit }) {
    //commit(types.GET_BANNER_LIST, api.getBannerList())
       api.getBannerList().then(res => {
            console.log(res)
            commit(types.GET_BANNER_LIST, res.result.list)
       })
    }
}

const getters = {
	baseURL: state => state.baseURL,
    bannerList: state => state.bannerList
}

const mutations = {
    [types.GET_BANNER_LIST](state, res) {
       state.bannerList = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}