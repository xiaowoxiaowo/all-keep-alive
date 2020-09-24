import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import commonMixin from './mixins/commonMixin'
import './config/elementUiConfig'

Vue.config.productionTip = false

Vue.mixin(commonMixin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
