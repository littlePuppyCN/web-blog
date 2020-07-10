<template>
  <div>
    <div class="blog" v-for="(item,index) in blogFilter" :key="index">
      <div class="title">姓名：{{item.name}}</div>
      <div class="inner">
        内容:
        <el-input
          type="textarea"
          :rows="3"
          v-model="item.profile"
          readonly
          style="margin-top:5px;padding-right:8px;"
        ></el-input>
      </div>
      <div class="title">职业：{{item.profession}}</div>
      <div class="update" style="text-align:right;padding-right:10px;" @click="update(item.id)">编辑</div>
    </div>
    <div  v-if='noBlog' style="height:100px;background:red;">无结果</div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["search"],
  data() {
    return {
      blog: [],
      noBlog:false
    };
  },
  methods: {
    update(id) {
      this.$router.push(`/update/${id}`);
    }
  },
  computed: {
    blogFilter() {
      return this.blog.filter((item, index) => {
          if(this.search == ''){
              return this.blog;
          }else{         
            return item.profession == this.search || item.name == this.search || item.education == this.search;
          }
      });
    }
  },
  watch:{
      blogFilter:function(val){
        if(val.length == 0){
            this.noBlog = true
        }else{
            this.noBlog = false
        }
      }
  },
  created() {
    axios.get("/getlist").then(res => {
      for (var i = 0; i < res.data.length; i++) {
        this.blog.push(res.data[i]);
      }
    });
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
  .inner {
    margin-top: 10px;
  }
  textarea {
    background: none !important;
    border: none;
    resize: none;
    color: rgba(0, 0, 0, 0.5);
  }
  .update{
      cursor: pointer;
  }
  .update:hover{
      color: #00cc99;
  }
}
</style>