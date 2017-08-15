<template>
  <header>
    <h1 class="logo"><router-link :to="{ path: 'app' }">Dreamer</router-link></h1>
    <nav>
      <div class="sync">
        <!-- <object>
          <svg></svg>
        </object> -->
      </div>
      <el-dropdown>
        <span class="el-dropdown-link">
          username<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>history</el-dropdown-item>
          <el-dropdown-item>logout</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </nav>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    components: {
    },
    data() {
      return {
        isShowDrop: false,
      }
    },
    computed: {
      ...mapGetters([
        'user',
      ])
    },
    methods: {
      logout() {
        this.$store.dispatch('Logout').then(() => {
          location.reload();// 为了重新实例化vue-router对象 避免bug
        });
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #DDD;
    h1.logo {
      font-size: 22px;
      line-height: 50px;
      font-weight: 700;
      margin: 0;
    }
    nav {
      height: 50px;
      line-height: 50px;
    }
  }
</style>



