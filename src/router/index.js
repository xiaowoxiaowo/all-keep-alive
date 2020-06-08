import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home/home.vue'

Vue.use(VueRouter)

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: home
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children: [
      {
        path: 'page1',
        name: 'page1',
        meta: {
          scrollTop: 0
        },
        component: () => import('../pages/page1/page1.vue')
      },
      {
        path: 'page2',
        name: 'page2',
        meta: {
          scrollTop: 0
        },
        component: () => import('../pages/page2/page2.vue')
      },
      {
        path: 'page22',
        name: 'page22',
        meta: {
          scrollTop: 0
        },
        component: () => import('../pages/page2/page2.vue')
      },
      {
        path: 'page3/:id',
        name: 'page3',
        component: () => import('../pages/page3/page3.vue'),
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
