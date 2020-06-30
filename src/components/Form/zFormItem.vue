<template>
  <div>
    <label for="">{{ label }}</label>
    <slot></slot>
    <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: String,
  },
  inject: ['zForm'],
  data () {
    return {
      errorMsg: '',
    }
  },
  mounted () {
    this.$on('validate', () => this.validate())
    // console.log(this.zForm)
  },
  methods: {
    validate () {
      const value = this.zForm.model[this.prop]
      const rule = this.zForm.rules[this.prop]
      const schema = new Schema({[this.prop]: rule})

      return schema.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.errorMsg = errors[0].message
        } else {
          this.errorMsg = ''
        }
      })
    },
  },
}
</script>

<style scoped>
  .error {
    font-size: 14px;
    color: red;
  }
</style>