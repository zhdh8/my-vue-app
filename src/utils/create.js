import Vue from 'vue'
/**
 * 创建弹框类组件
 *
 */

 export default (componentName, propsObj) => {
  const vm = new Vue({
    render: h => h(componentName, {props: propsObj, class: 'notify'})
  }).$mount()

  // 将生成的DOM元素追加至body
  document.body.appendChild(vm.$el)
  const comp = vm.$children[0]

  // 销毁方法
  comp.remove = function () {
    setTimeout(() => {
      document.body.removeChild(vm.$el)
      vm.$destroy()
      // console.log(vm)
    }, propsObj.duration)
  }

  return comp
 }