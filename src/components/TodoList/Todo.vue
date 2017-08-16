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
        <a v-on:click="showForm()">
          <i class='edit icon'>edit</i>
        </a>
        <a v-on:click="deleteTodo(todo)">
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
    <div class='edit-line form-style-5' v-show="isEditing">
      <form>
        <fieldset>
          <legend><span class="number">1</span> Todo Info</legend>
          <div class='field'>
            <label>Title</label>
            <input type='text' v-model="todo.title">
          </div>
          <div class='field'>
            <label>Describe</label>
            <input type='text' v-model="todo.describe">
          </div>
          <div class='field'>
            <label>Project</label>
            <input type='text' v-model="todo.project">
          </div>
          <!-- <div class='ui two button attached buttons'>
            <button class='todo-button' v-on:click="hideForm(todo)">
              关闭 X
            </button>
          </div> -->     
        </fieldset>
        <fieldset>
          <legend><span class="number">2</span> Additional Info</legend>
          <textarea name="field3" placeholder="About Your School"></textarea>
        </fieldset>
        <input type="button" value="Apply" v-on:click="hideForm(todo)"/>
      </form>     
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
      &:hover {
        background: #3ba7f6;
      }
    }
    button[disabled] {
      @extend button.todo-button;
      background: #e3e3e3;
      color: #aaaaaa;
      &:hover {
        background: #e3e3e3;
      }
    }
  }
  .edit-line {
    padding: 10px;
    border-bottom: 1px solid #d3d3d3;
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
      &:hover {
        background: #3ba7f6;
      }
    }
  }
</style>

<!-- form style -->
<style type="text/css" scoped>
.form-style-5{
    max-width: 500px;
    padding: 10px 20px;
    background: #f4f7f8;
    margin: 10px auto;
    padding: 20px;
    background: #f4f7f8;
    border-radius: 8px;
    font-family: Georgia, "Times New Roman", Times, serif;
}
.form-style-5 fieldset{
    border: none;
}
.form-style-5 legend {
    font-size: 1.4em;
    margin-bottom: 10px;
}
.form-style-5 label {
    display: block;
    margin-bottom: 8px;
}
.form-style-5 input[type="text"],
.form-style-5 input[type="date"],
.form-style-5 input[type="datetime"],
.form-style-5 input[type="email"],
.form-style-5 input[type="number"],
.form-style-5 input[type="search"],
.form-style-5 input[type="time"],
.form-style-5 input[type="url"],
.form-style-5 textarea,
.form-style-5 select {
    font-family: Georgia, "Times New Roman", Times, serif;
    background: rgba(255,255,255,.1);
    border: none;
    border-radius: 4px;
    font-size: 16px;
    margin: 0;
    outline: 0;
    padding: 7px;
    width: 100%;
    box-sizing: border-box; 
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box; 
    background-color: #e8eeef;
    color:#8a97a0;
    -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    margin-bottom: 30px;
    
}
.form-style-5 input[type="text"]:focus,
.form-style-5 input[type="date"]:focus,
.form-style-5 input[type="datetime"]:focus,
.form-style-5 input[type="email"]:focus,
.form-style-5 input[type="number"]:focus,
.form-style-5 input[type="search"]:focus,
.form-style-5 input[type="time"]:focus,
.form-style-5 input[type="url"]:focus,
.form-style-5 textarea:focus,
.form-style-5 select:focus{
    background: #d2d9dd;
}
.form-style-5 select{
    -webkit-appearance: menulist-button;
    height:35px;
}
.form-style-5 .number {
    background: #1abc9c;
    color: #fff;
    height: 30px;
    width: 30px;
    display: inline-block;
    font-size: 0.8em;
    margin-right: 4px;
    line-height: 30px;
    text-align: center;
    text-shadow: 0 1px 0 rgba(255,255,255,0.2);
    border-radius: 15px 15px 15px 0px;
}

.form-style-5 input[type="submit"],
.form-style-5 input[type="button"]
{
    position: relative;
    display: block;
    padding: 19px 39px 18px 39px;
    color: #FFF;
    margin: 0 auto;
    background: #1abc9c;
    font-size: 18px;
    text-align: center;
    font-style: normal;
    width: 100%;
    border: 1px solid #16a085;
    border-width: 1px 1px 3px;
    margin-bottom: 10px;
}
.form-style-5 input[type="submit"]:hover,
.form-style-5 input[type="button"]:hover
{
    background: #109177;
}
</style>