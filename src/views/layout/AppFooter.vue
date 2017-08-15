<template>
  <footer>
    <div class="copyright">
      ©&nbsp;
      <router-link :to="{ path: 'about' }">Dreamer</router-link>
    </div>
    <div class="langs">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="themes">
      ©&nbsp;
    </div>
    <nav>
      <router-link :to="{ path: 'keke' }">???</router-link>
    </nav>
  </footer>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    components: {
    },
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    computed: {
      
    },
    methods: {
      
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  footer {
    display: flex;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #EEE;
    div.copyright {
      color: #666;
      margin-right: 10px;
    }
    div.langs {
      margin-right: 10px;
    }
    div.themes {
      margin-right: 10px;
    }
    nav {
      margin-left: auto;
      a {
        color: #666;
        font-size: 14px;
        text-decoration: none;
      }
    }
  }
</style>



