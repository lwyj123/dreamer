<template>
    <div class="login-container">
      <section>     
        <header>登录</header>
        <create-todo v-on:add-todo="addTodo"></create-todo>
        <todo-list v-bind:todos="todos"></todo-list>
      </section>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import TodoList from 'components/TodoList'
  import CreateTodo from 'components/TodoList/CreateTodo'
  export default {
    name: 'index',
    components: {
      CreateTodo,
      TodoList
    },
    data() {
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
    },
    computed: {
      
    },
    mounted() {
    },
    methods: {
      addTodo(todo) {
        this.todos.unshift({
          title: todo.title,
          date: todo.date,
          project: todo.project,
          done: false,
        })
        localStorage.setItem('todos', JSON.stringify({todos: this.todos}))
      },
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  
</style>
