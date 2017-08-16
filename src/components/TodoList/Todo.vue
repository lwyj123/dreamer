<template>
  <div class='todo-card'>
    <div class='normal-line' v-show="!isEditing">
      <h2 class='title'>
        {{ todo.title }}
      </h2>
      <p class='meta'>
        {{ todo.created_at }}
      </p>
      <p class='meta'>
        {{ todo.project }}
      </p>
      <div class='func'>
        <a class='ui right floated edit icon' v-on:click="showForm()">
          <i class='edit icon'>edit</i>
        </a>
        <a class='ui right floated trash icon' v-on:click="deleteTodo(todo)">
          <i class='trash icon'>trash</i>
        </a>
      </div> 
      <button class='todo-button' v-show="!isEditing && todo.done" disabled>
        已完成
      </button>
      <button class='todo-button' v-show="!isEditing && !todo.done" v-on:click="completeTodo(todo)">
        完成
      </button>       
    </div>
    <div class='edit-line' v-show="isEditing">
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

<style rel="stylesheet/scss" lang="scss" scoped>
  .todo-card {
    width: 100%;
  }
  .normal-line {
    display: flex;
    align-items: center;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #d3d3d3;
    &:hover {
      background: #eeeeee;
    }
    h2.title {
      font-size: 14px;
      margin-right: 10px;
    }
    p.meta {
      font-size: 14px;
      color: #999;
    }
    div.func {
      margin-left: auto;
      a {
        margin: 0 10px;
      }
    }
    button.todo-button {
      width: 100px;
      background: #1b87f6;
      height: 40px;
      line-height: 40px;
      border-radius:4px;
      border: none;

      font-size:12px;
      color:#ffffff;
      text-align:center;
      &:focus {
        outline: none;
      }
    }
    button[disabled] {
      @extend button.todo-button;
      background: #e3e3e3;
      color: #aaaaaa;
    }
  }
  .edit-line {
    
  }
</style>
