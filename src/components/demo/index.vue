<template>
  <div>
    {{foo}}
    <button @click="handleClick()">button</button>
    <slot :self="self"></slot>

    <div>
      <input type="text" :value="value" @input="onInput($event)">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'demo',
    props: {
      msg: {
        type: String,
        default: 'menu',
      },
      value: {
        type: String,
      }
    },
    inject: ['foo'],
    components: {
    },
    data () {
      return {
        self: {
          name: 'demos'
        }
      }
    },
    mounted () {
      this.$bus.$on('test', function (e) {
        console.log(e)
      })
    },
    methods: {
      handleClick () {
        // this.$emit('add', 2)
        this.$parent.$emit('sayHello', 'hello')
      },
      check () {
        var e = document.createElement('div')
        e.className ='adsbox', document.body.appendChild(e)
        var t ='none' === getComputedStyle(e).display
        return document.body.removeChild(e), t
      },

      onInput (e) {
        this.$emit('onInput',  e.target.value)
      },
    },
  }
</script>

<style>

</style>
