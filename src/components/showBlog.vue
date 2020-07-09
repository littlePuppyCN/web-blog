<template>
  <div>
    <div class="blog" v-for="(item,index) in blog" :key="index" @click="update(item.id)">
      <div class="title">姓名：{{item.name}}</div>
      <div class="inner">
        内容:
        <!-- {{item.profile}} -->
        <el-input
          type="textarea"
          :rows="3"
          v-model="item.profile"
          readonly
          style="margin-top:5px;padding-right:8px;"
        ></el-input>
      </div>
      <div class="title">分类：{{item.profession}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blog: []
    };
  },
  methods: {
    update(id) {
      this.$router.push(`/update/${id}`);
    }
  },
  created() {
    axios.get("/getlist").then(res => {
      for (var i = 0; i < res.data.length; i++) {
        this.blog.push(res.data[i]);
      }
    });
    console.log(this.blog);
  }
};
</script>

<style lang='less'>
.blog {
  background: lightskyblue;
  margin-bottom: 20px;
  border-radius: 6px;
  padding-bottom: 10px;
  padding-left: 8px;
  cursor: pointer;
  .inner {
    margin-top: 10px;
  }
}
</style>