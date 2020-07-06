<template>
  <div>
    <input :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>

<script>
import emitter from '@/mixins/emitter'
export default {
  mixins: [emitter],
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: '',
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)

      // this.$parent.$emit('validate')
      this.dispatch('zFormItem', 'validate')
    },
  },
}
</script>

<style>

</style>