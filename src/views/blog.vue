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
          <el-col :span="14" class="search"></el-col>
          <el-col :span="5">
            <h1>
              <router-link to="/add">add blog</router-link>
            </h1>
          </el-col>
        </el-row>
      </el-header>

      <el-container class="main-container">
        <el-main>
          <router-view>
            <router-link></router-link>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  mounted() {
    // var obj = {
    //    id:'1',
    //    name:'xxx',
    //    email:'abc@123.com',
    //    edcation:'无',
    //    profie:'none'
    // }
    //    axios.post('/adduser',obj).then(res=>{
    //        console.log(res)
    //    })
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