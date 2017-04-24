<template>
  <div>
    <h1 class="ui dividing centered header">大梦想家 v0.0.1</h1>
    <create-todo v-on:add-todo="addTodo"></create-todo>
    <todo-list v-bind:todos="todos"></todo-list>
  </div>
</template>

<script>
import swal from 'sweetalert2'
import CreateTodo from './components/CreateTodo'
import TodoList from './components/TodoList'

export default {
  name: 'app',
  components: {
    CreateTodo,
    TodoList
  },
  data() {
    if (!localStorage.getItem('todos')) {
      localStorage.setItem('todos', JSON.stringify({todos: []}))
    }
    /*
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }]
    }
    */
    return JSON.parse(localStorage.getItem('todos'))
  },
  methods: {
    addTodo(todo) {
      swal('创建成功')
      this.todos.unshift({
        title: todo.title,
        project: todo.project,
        done: false,
      })
      localStorage.setItem('todos', JSON.stringify({todos: this.todos}))
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
