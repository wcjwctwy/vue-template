import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  // 单个引用
  state,
  mutations,
  actions,
  //  模块引用,将模块中的mutations、actions和state一并引入
  modules: {
    user
  }
})
