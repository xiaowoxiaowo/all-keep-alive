import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    includePageNames: [], // 保持缓存的页面列表
    tagList: [], // tag标签list
    tagSelected: '0', // 当前tag标签
    pageAnimated: 'animated fadeInRight faster'
  },
  mutations: {
    initAnimated: state => {
      state.pageAnimated = ''
      setTimeout(function () {
        state.pageAnimated = 'animated fadeInRight faster'
      }, 50)
    }
  },
  actions: {
  },
  modules: {
  }
})
