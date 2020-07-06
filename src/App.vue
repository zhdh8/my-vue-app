<template>
  <div id="app" style="height: 800px">
    <!-- <todo-list :status.sync="status" v-bind:todos="todos" v-slot="{ todo, user }">
      <span v-if="todo.isComplete">✓</span>
      <span v-else>x</span>
      {{ user.name }}
      <span>{{ todo.text }}</span>
    </todo-list> -->
    <!-- <z-button disabled @click="submit($event)">提交</z-button> -->
    <div class="aside">
      <router-link to="/">home</router-link>
      <br>
      <router-link to="/list/2">list {{ $route.params.id }}</router-link>
    </div>
    <div class="main">
      <router-view />
    </div>
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
  display: flex;
  margin-top: 60px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.aside {
  width: 200px;
}

.main {
  flex: 1;
}
</style>
