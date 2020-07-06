import Vue from 'vue'
import VueRouter from 'vue-router'

import Notify from '@/components/Notify'

Vue.use(VueRouter)

const routes =  [
  {
    path: '/',
    component: () => import('@/pages/index'),
  },
  {
    path: '/list/:id',
    component: () => import('@/pages/list'),
    props: true, // 把path的id参数以组件属性的形式可以获取到
    meta: {
      auth: true,
    },
  },
]

const router = new VueRouter({
  routes,
})

// 全局路由守卫
router.beforeEach((to, from, next) => {

  const isLogin = window.sessionStorage.getItem('token') || false

  if (to.meta.auth && !isLogin) {
    Vue.prototype.$create(Notify, {
      tips: '请登录',
      duration: '3000',
    }).show()
    next('/')
  }
  else next()
})

export default router