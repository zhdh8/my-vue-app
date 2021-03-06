// 重写vue-router
// import Vue from 'vue'
let Vue

class zRouter {

  constructor (options) {

    this.routes = options.routes
    this.routeMap = {}
    this.app = new Vue({
      data: {
        current: '/',
      }
    })
  }

  // 1、取浏览器hash路径 根据路径获取对应的路由配置项
  // 2、实现router-link router-view

  init () {

    window.addEventListener('load', this.onHashChange.bind(this), false)
    window.addEventListener('hashchange', this.onHashChange.bind(this), false)

    this.pathMapRoute(this.routes)
    this.initComponent()
  }


  // 路由映射
  pathMapRoute (routes) {

    routes.forEach(item => {
      this.routeMap[item.path] = item
      console.log(this.routeMap)
    })
  }

  initComponent () {

    Vue.component('router-link', {
      props: {
        to: String,
      },
      render (h) {

        // return <a href={this.to}>{this.$slots.default}</a>
        return h('a', {
          attrs: {
            href: '#' + this.to,
          },
        }, [
          this.$slots.default
        ])
      },
    })

    
    Vue.component('router-view', {
      render: h => {

        return h(this.routeMap[this.app.current].component)
      },
    })
  }

  onHashChange () {
    
    this.app.current = window.location.hash.slice(1) || '/'
  }
}

zRouter.install = function (_Vue) {

  Vue = _Vue

  Vue.mixin({
    beforeCreate () {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
        this.$options.router.init()
      }
    }
  })
}

export default zRouter
