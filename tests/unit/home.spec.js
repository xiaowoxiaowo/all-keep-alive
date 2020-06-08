import { expect } from 'chai'
import Vue from 'vue'
//import { shallowMount } from '@vue/test-utils'
import page2 from '@/pages/page2/page2.vue'

describe('page2.vue', () => {
  it('点击按钮后, count的值应该为1', () => {
    const Constructor = Vue.extend(page2) // 获得Hello组件实例
    const vm = new Constructor().$mount() // 将组件挂在到DOM上
    //断言：DOM中class为hello的元素中的h1元素的文本内容为Welcome to Your Vue.js App
    expect(vm.$el.querySelector('.add').textContent).to.equal('自增')
  })
})
