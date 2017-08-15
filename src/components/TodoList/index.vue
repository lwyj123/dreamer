<template>
  <div class="ui centered">
    <p class="tasks">已完成任务: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p class="tasks">等待完成任务: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <todo v-on:edit-todo="editTodo" v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos" v-bind:todo="todo"></todo>
  </div>
</template>

<script type = "text/javascript" >
import Todo from './Todo'

export default {
  props: ['todos'],
  components: {
    Todo
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
      localStorage.setItem('todos', JSON.stringify({todos: this.todos}))
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos[todoIndex].done = true
      localStorage.setItem('todos', JSON.stringify({todos: this.todos}))
    },
    editTodo(todo) {
      localStorage.setItem('todos', JSON.stringify({todos: this.todos}))
    }
  }
}

</script>
<style>
p.tasks {
  text-align: center;
}
</style>
