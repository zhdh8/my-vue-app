<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id" @click="handleClick">
      <slot v-bind:todo="todo" :user="user">
        {{ todo.id }}
      </slot>
      {{ status ? 'study' : 'play' }}{{foo}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  model: {
    prop: 'status',
    event: 'input',
  },
  props: {
    todos: {
      type: Array,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  inject: ['foo'],

  data () {
    return {
      user: {
        name: 'zdh',
        age: 18,
      }
    }
  },

  methods: {

    handleClick () {

      // this.$emit('update:status', false)
      // this.$parent.$on('sayHello', function (e) {
      //   console.log(e)
      // })
      this.$bus.$emit('test', 'this')
    },
  },
}
</script>