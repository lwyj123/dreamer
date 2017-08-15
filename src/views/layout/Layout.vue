<template>
  <div class="app-wrapper">
    <div class="navbar-wrapper">
      <navbar></navbar>
    </div>
    <div class="main-container">
      <app-main></app-main>
    </div>
    <div class="footer-container">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import { Navbar, AppMain, AppFooter } from 'views/layout';

  export default {
    name: 'layout',
    components: {
      Navbar,
      AppMain,
      AppFooter,
    },
    computed: {
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 960px;
    margin: auto;
    .navbar-wrapper {
      height: 50px;
      margin-bottom: 20px;
    }
    .main-container {
      background-color: #f8f9fa;
      height: calc(100vh - 70px);
      overflow: auto;
      transition: all .28s ease-out;
    }
    .footer-container {
      margin-top: 20px;
    }
  }
</style>
