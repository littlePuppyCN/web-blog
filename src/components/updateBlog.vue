<template>
  <div>
    <div class="blog">
      <div class="title">姓名：
        <el-input v-model="current_user.name" placeholder="请输入内容"></el-input></div>
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      current_user: null
    };
  },
  created() {
    axios.post("/getuser", this.id).then(res => {
        this.current_user = res.data
    });
  }
};
</script>

<style>
</style>