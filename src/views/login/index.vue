<template>
  <div class="form">  
    <ul class="tab-group">
      <li class="tab"><router-link :to="{name: 'signup'}">Sign Up</router-link></li>
      <li class="tab active"><router-link :to="{name: 'login'}">Log In</router-link></li>
    </ul>
    
    <div class="tab-content">
      <div id="signup">   
        <h1>Welcome back!</h1>
        <form>
        <div class="field-wrap">
          <label v-if="form.email === ''">
            Email Address<span class="req">*</span>
          </label>
          <input type="email" required="" 
                 v-model="form.email" 
                 autocomplete="off"
                 spellcheck="false">
        </div>
        
        <div class="field-wrap">
          <label v-if="form.password === ''">
            Password<span class="req">*</span>
          </label>
          <input type="password" required="" 
                 v-model="form.password" 
                 autocomplete="off"
                 spellcheck="false">
        </div>
        
        <button type="button" @click="clickLogin" class="button button-block">Login</button>
        </form>
      </div>
      
    </div><!-- tab-content -->
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'login',
    components: {
    },
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
      }
    },
    computed: {
      
    },
    mounted() {
      
    },
    methods: {
      ...mapActions([
        'Login'
      ]),
      clickLogin() {
        var self = this;
        if(this.form.email === '' || this.form.password.length < 6) {
          return
        }
        this.Login(this.form).then(res => {
          self.$message({
            message: 'login success,',
            type: 'success'
          });
          setTimeout(() => {
            self.$router.push({name: 'index'})
          }, 3000)
        }).catch(err => {
          self.$message({
            message: 'err',
            type: 'error'
          });
        })
      },
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  
$body-bg: #c1bdba;
$form-bg: #13232f;
$white: #ffffff;

$main: #1ab188;
$main-light: lighten($main,5%);
$main-dark: darken($main,5%);

$gray-light: #a0b3b0;
$gray: #ddd;

$thin: 300;
$normal: 400;
$bold: 600;
$br: 4px;

*, *:before, *:after {
  box-sizing: border-box;
}

html {
  overflow-y: scroll; 
}

body {
  background:$body-bg;
  font-family: 'Titillium Web', sans-serif;
}

a {
  text-decoration:none;
  color:$main;
  transition:.5s ease;
  &:hover {
    color:$main-dark;
  }
}

.form {
  background:rgba($form-bg,.9);
  padding: 40px;
  max-width:600px;
  margin:40px auto;
  border-radius:$br;
  box-shadow:0 4px 10px 4px rgba($form-bg,.3);
}

.tab-group {
  list-style:none;
  padding:0;
  margin:0 0 40px 0;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  li a {
    display:block;
    text-decoration:none;
    padding:15px;
    background:rgba($gray-light,.25);
    color:$gray-light;
    font-size:20px;
    float:left;
    width:50%;
    text-align:center;
    cursor:pointer;
    transition:.5s ease;
    &:hover {
      background:$main-dark;
      color:$white;
    }
  }
  .active a {
    background:$main;
    color:$white;
  }
}

/* .tab-content > div:last-child {
  display:none;
} */


h1 {
  text-align:center;
  color:$white;
  font-weight:$thin;
  margin:0 0 40px;
}

label {
  position:absolute;
  transform:translateY(6px);
  left:13px;
  color:rgba($white,.5);
  transition:all 0.25s ease;
  -webkit-backface-visibility: hidden;
  pointer-events: none;
  font-size:22px;
  .req {
    margin:2px;
    color:$main;
  }
}

label.active {
  transform:translateY(50px);
  left:2px;
  font-size:14px;
  .req {
    opacity:0;
  }
}

label.highlight {
  color:$white;
}

input, textarea {
  font-size:22px;
  display:block;
  width:100%;
  height:100%;
  padding:5px 10px;
  background:none;
  background-image:none;
  border:1px solid $gray-light;
  color:$white;
  border-radius:0;
  transition:border-color .25s ease, box-shadow .25s ease;
  &:focus {
    outline:0;
    border-color:$main;
  }
}

textarea {
  border:2px solid $gray-light;
  resize: vertical;
}

.field-wrap {
  position:relative;
  margin-bottom:40px;
}

.top-row {
  &:after {
    content: "";
    display: table;
    clear: both;
  }

  > div {
    float:left;
    width:48%;
    margin-right:4%;
    &:last-child { 
      margin:0;
    }
  }
}

.button {
  border:0;
  outline:none;
  border-radius:0;
  padding:15px 0;
  font-size:2rem;
  font-weight:$bold;
  text-transform:uppercase;
  letter-spacing:.1em;
  background:$main;
  color:$white;
  transition:all.5s ease;
  -webkit-appearance: none;
  &:hover, &:focus {
    background:$main-dark;
  }
}

.button-block {
  display:block;
  width:100%;
}

.forgot {
  margin-top:-20px;
  text-align:right;
}
</style>