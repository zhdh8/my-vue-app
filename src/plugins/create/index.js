import Create from './src/create'

Create.install = function (Vue) {
  Vue.prototype.$create = Create
}

export default Create
