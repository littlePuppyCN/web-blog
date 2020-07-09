<template>
  <div id="app">
    <blog></blog>
  </div>
</template>

<script>
import blog from './views/blog.vue'
export default {
   components:{
     blog
   }
}
</script>

<style lang="less">
#app{
  width: 100%;
  height: 100%;
}
</style>
