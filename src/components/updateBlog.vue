<template>
  <div>
    <div class="blog">
      <div class="title">
        姓名：
        <el-input v-model="current_user.name" placeholder="请输入内容"></el-input>
      </div>
      <div class="inner">
        内容:
        <!-- {{item.profile}} -->
        <el-input
          type="textarea"
          :rows="3"
          v-model="current_user.profile"
          style="margin-top:5px;padding-right:8px;"
        ></el-input>
      </div>
      <div class="title">分类：{{current_user.profession}}</div>
      <el-button @click="submit">更新</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      current_user: {}
    };
  },
  methods: {
    submit() {
      axios.post("/updateuser", this.current_user).then(res => {
         this.$message({
          message: '更新成功',
          type: 'success'
        });
      }).then(()=>{
          this.$router.push('/')
      });
    }
  },
  created() {
    axios.post("/getuser", this.id).then(res => {
      this.current_user = res.data;
    });
  }
};
</script>

<style>
</style>