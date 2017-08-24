<template>
  <div class="login-container">
    <section>     
      <header>List</header>
      <create-todo v-on:add-todo="addTodo"></create-todo>
      <todo-list v-bind:todos="todos"></todo-list>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import TodoList from 'components/TodoList'
  import CreateTodo from 'components/TodoList/CreateTodo'
  import { getTasks, postTask } from 'api/task'
  export default {
    name: 'index',
    components: {
      CreateTodo,
      TodoList
    },
    data() {
      if (!localStorage.getItem('todos')) {
        localStorage.setItem('todos', JSON.stringify({todos: []}))
      }
      return {
        todos: JSON.parse(localStorage.getItem('todos')).todos
      }
    },
    computed: {
      
    },
    mounted() {
      getTasks().then(res => {
        console.log('get tasks')
        console.log(res)
      })
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
        postTask({
          name: todo.title,
          describe: todo.desc,
        }).then(res => {
          console.log('post success');
          console.log(res);
        })
      },
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  
</style>
