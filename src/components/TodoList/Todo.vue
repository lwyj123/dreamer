<template>
  <div class='ui centered card'>
    <div class='content' v-show="!isEditing">
      <div class='header'>
        {{ todo.title }}
      </div>
      <div class='meta'>
        {{ startDate }}
      </div>
      <div class='meta'>
        {{ todo.project }}
      </div>
      <div class='extra content'>
        <a class='ui right floated edit icon' v-on:click="showForm()">
          <i class='edit icon'></i>
        </a>
        <a class='ui right floated trash icon' v-on:click="deleteTodo(todo)">
          <i class='trash icon'></i>
        </a>
      </div>        
    </div>
    <div class='content' v-show="isEditing">
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input type='text' v-model="todo.title">
        </div>
        <div class='field'>
          <label>Project</label>
          <input type='text' v-model="todo.project">
        </div>
        <div class='ui two button attached buttons'>
          <button class='ui basic blue button' v-on:click="hideForm(todo)">
            关闭 X
          </button>
        </div>
      </div>      
    </div>

    <div class='ui bottom attached green basic button' v-show="!isEditing && todo.done" disabled>
      已完成
    </div>
    <div class='ui bottom attached red basic button' v-show="!isEditing && !todo.done" v-on:click="completeTodo(todo)">
      完成
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['todo'],
    data() {
      return {
        isEditing: false,
      }
    },
    computed: {
      startDate: function() {
        let formatDateTime = function(date) {
          let y = date.getFullYear()
          let m = date.getMonth() + 1
          m = m < 10 ? ('0' + m) : m
          let d = date.getDate()
          d = d < 10 ? ('0' + d) : d
          let h = date.getHours()
          let minute = date.getMinutes()
          minute = minute < 10 ? ('0' + minute) : minute
          return y + '-' + m + '-' + d + ' ' + h + ':' + minute
        }
        return formatDateTime(this.todo.date)
      },

    },
    methods: {
      showForm() {
        this.isEditing = true
      },
      hideForm(todo) {
        this.isEditing = false
        this.$emit('edit-todo', todo)
      },
      deleteTodo(todo) {
        this.$emit('delete-todo', todo)
      },
      completeTodo(todo) {
        this.$emit('complete-todo', todo)
      }
    }
  }
</script>
