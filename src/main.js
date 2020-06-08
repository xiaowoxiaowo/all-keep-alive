import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import scrollMixin from './mixins/scrollMixin'
import commonMixin from './mixins/commonMixin'
import './config/elementUiConfig'

Vue.config.productionTip = false

Vue.mixin(scrollMixin)
Vue.mixin(commonMixin)

router.beforeEach((to, from, next) => {
  // 保持页面退出时的滚动位置
  const $content = document.querySelector('#routerBox')
  const scrollTop = $content ? $content.scrollTop : 0
  if (from.meta.scrollTop !== undefined) {
    from.meta.scrollTop = scrollTop
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
