// function broadcast () {}

export default {
  methods: {
    broadcast (componentName, eventName) {

      console.log(componentName, eventName)
    },
    dispatch (componentName, eventName, params) {

      let parent = this.$parent || this.$root
      let name = this.$parent.$options.name

      while (parent && (!name || name !== componentName)) {

        parent = parent.$parent

        if (parent) {
          name = parent.$options.name
        }
      }

      if (!name && name !== componentName) {
        parent = parent.$parent
      }

      parent.$emit.apply(parent, [eventName].concat(params))
    }
  }
}
