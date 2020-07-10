<template>
  <div class="blog">
    <el-row class="title">
      <el-col :span="24">
        姓名：
        <el-input v-model="user.name" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="24">
        内容：
        <el-input v-model="user.profile" placeholder="请输入内容"></el-input>
      </el-col>
    </el-row>
    <div class="profession">
      分类：
      <el-radio-group v-model="user.profession">
        <el-radio :label="'大学老师'">大学老师</el-radio>
        <el-radio :label="'警察'">警察</el-radio>
        <el-radio :label="'白领'">白领</el-radio>
      </el-radio-group>
    </div>
    <el-button @click='submit'>提交</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        name: "",
        profile: "",
        profession: '大学老师'
      }
    };
  },
  methods:{
      submit(){
          axios.post("/adduser", this.user).then(res => {
              this.$router.push('/')
        });
      }
  },
  created() {
    // axios.post("/adduser", this.user).then(res => {
    //   console.log(res);
    // });
  }
};
</script>

<style lang='less'>
.blog {
  margin-bottom: 20px;
  border-radius: 6px;
  padding-bottom: 10px;
  padding-left: 8px;
  .inner {
    margin-top: 10px;
  }
}
</style>