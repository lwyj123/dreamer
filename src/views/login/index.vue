<template>
    <div class="login-container">
      <section>     
        <header>登录</header>
        <div class="form-content">
          <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="邮箱" prop="email" class="form-inputy">
              <el-input v-model.number="loginForm.email" placeholder="输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" class="form-inputy">
              <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="输入密码"></el-input>
            </el-form-item>
            <el-form-item label-width="100px" class="form-btny">
              <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            </el-form-item>
          </el-form>
          <a href="#/login" id="register">注册账号</a>
          <a href="#/login" id="findpassword">找回密码</a>
        </div>
      </section>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'index-visitor',
    data() {
      // element-ui validator
      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入Username'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        
      }
    },
    computed: {
      
    },
    mounted() {
    },
    methods: {
      
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  
</style>
