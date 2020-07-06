import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '../src/router/index'

import ZButton from './components/Buttton/index'
import Bus from '@/utils/bus'
import create from '@/utils/create'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(ZButton)


Vue.prototype.$bus = new Bus()
Vue.prototype.$create = create

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
