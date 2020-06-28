<template>
  <div id="app" style="height: 800px">
    <!-- <todo-list :status.sync="status" v-bind:todos="todos" v-slot="{ todo, user }">
      <span v-if="todo.isComplete">✓</span>
      <span v-else>x</span>
      {{ user.name }}
      <span>{{ todo.text }}</span>
    </todo-list> -->
    <!-- <z-button disabled @click="submit($event)">提交</z-button> -->
    <router-view />
  </div>
</template>

<script>
// import TodoList from './components/Todo/TodoList.vue'

export default {
  name: 'App',
  // components: {
  //   TodoList,
  // },

  data () {
    return {
      status: true,
      todos: [
        { text: 'learn slot', id: 1, isComplete: true, },
        { text: 'learn components', id: 2, isComplete: true, },
        { text: 'learn event', id: 3, isComplete: false, },
      ]
    }
  },

  methods: {
    submit (e) {
      console.log(e)
    },

    handleClick (e) {

       console.log(e)
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
