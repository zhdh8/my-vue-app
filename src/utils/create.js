/**
 * 创建弹框类组件
 *
 */

 import Vue from 'vue'

 export default (componentName, propsObj) => {
  const vm = new Vue({
    render: h => h(componentName, { propsObj })
  }).$mount()

  console.log(vm)
  // vm.prototype.$create = vm.$root
  document.body.appendChild(vm.$el)
 }