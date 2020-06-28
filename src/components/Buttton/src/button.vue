<template>
  <button :disabled="disabled" class="z-button" v-bind="obj"
    @click="handleClick"
    :autofocus="autofocus"
    :class="[
      type ? 'z-button--' + type : '',
      size ? 'z-button--' + size : '',
      {
        'is-disabled': disabled,
      }
    ]">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'ZButton',

  props: {
    disabled: Boolean,
    autofocus: Boolean,
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'small'
    }
  },

  data () {

    return {

      obj: {
        name: 'name',
        age: 66,
      }
    }
  },

  mounted () {
    console.log(this.$el.parentNode)
  },

  destoryed () {

    this.$el.parentNode.removeChild(this.$el)
  },

  methods: {

    handleClick (evt) {

      this.$emit('click', evt)
    }
  }
}
</script>

<style>
.z-button {
  display: inline-block;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 4px;
  outline: 0;
}

.z-button--primary {
  color: #ffffff;
  border-color: #409EFF;
  background-color: #409EFF;
}

.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
</style>