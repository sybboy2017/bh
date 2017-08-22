import Vue from 'vue'
import Vuex from 'vuex'

import sliderBanner from './modules/sliderBanner'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
       sliderBanner,
       user
    }
})