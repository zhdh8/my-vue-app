<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  provide () {
    return {
      zForm: this,
    }
  },
  methods: {
    validate (cb) {
      const validates = this.$children
      .filter(item => item.prop)
      .map(item => item.validate())

      Promise.all(validates)
      .then(() => cb(true))
      .catch(() => cb(false))
    },
  },
}
</script>

<style>

</style>