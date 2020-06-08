//elementUi的组件按需加载和全局配置
import Vue from 'vue'
import '../assets/styles/element-variables.scss'
import {
  Tabs,
  TabPane,
  Input } from 'element-ui'
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Input)