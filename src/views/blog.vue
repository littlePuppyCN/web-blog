<template>
  <div id="blog">
    <el-container>
      <el-header>
        <el-row class="title">
          <el-col :span="5">
            <h1>
              <router-link to="/">my blog</router-link>
            </h1>
          </el-col>
          <el-col :span="14" class="search">
            <el-input v-model="search" placeholder="请输入姓名/分类匹配搜索"></el-input>
          </el-col>
          <el-col :span="5">
            <h1>
              <router-link to="/add">add blog</router-link>
            </h1>
          </el-col>
        </el-row>
      </el-header>

      <el-container class="main-container">
        <el-main>
          <router-view :search='search'>
            <router-link></router-link>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods:{

  }
};
</script>

<style lang='less' scoped>
.el-header {
  line-height: 60px;
  padding: 0;
  margin-bottom: 20px;
  .title {
    height: 100%;
    max-width: 985px;
    margin: 0 auto;
    background: lightcoral;
    .el-col {
      height: 100%;
    }
    .search {
      text-align: center;
    }
    /deep/  .el-input__inner {
      background: rgba(0, 0, 0, 0.2);
      outline: none;
      border: none;
    }
    h1 {
      text-align: center;
    }
    h1 > a {
      color: #ccc;
      text-decoration: none;
      font-size: 14px;
      line-height: 60px;
      display: block;
    }
  }
}
main {
  padding: 0;
}
.el-container {
  width: 985px;
  margin: 0 auto;
}

  
</style>