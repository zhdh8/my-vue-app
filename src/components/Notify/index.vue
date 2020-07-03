<template>
  <div v-if="isShow">
    提示：{{tips}}
  </div>
</template>

<script>
export default {
  props: {
    tips: String,
    duration: {
      type: [Number, String],
      default: 1000,
    },
  },
  data () {
    return {
      isShow: false,
    }
  },
  methods : {
    show () {
      this.isShow = true
      if (this.duration) setTimeout(this.hide, this.duration)
    },
    hide () {
      this.isShow = false
      this.remove()
    },
  },
}
</script>

<style lang="less" scoped>
  .notify {
    position: fixed;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 15px;
    font-size: 14px;
    color: #606266;
    border: 1px solid #ebeef5;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
</style>