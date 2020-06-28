import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from '../src/router/index'

import ZButton from './components/Buttton/index'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(ZButton)

new Vue({
  render: h => h(App),
  router: Router,
}).$mount('#app')
