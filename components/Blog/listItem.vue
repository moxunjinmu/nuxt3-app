<!--
 * @Author: wuwenjia
 * @Date: 2022-09-19 10:40:43
 * @FilePath: \nuxt3-app\components\Blog\listItem.vue
 * @Description: 
 * Copyright (c) 2022 by wuwenjia wuwenjia@aegis-data.cn, All Rights Reserved. 
-->
<template>
  <div class="blog-list-item">
    <div class="title" >
      SPA单页面应用首屏加载速度提升方法
    </div>
    <div class="sub-title">
      <div class="release-time">{{'2022-9-19 11:16:23'}}</div>
      <div class="read-times">{{'阅读 1'}}</div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>
.blog-list-item{
  width: 100%;
  padding: 1rem;
  border-radius: @radius;
  box-shadow: @box-shadow-2;
  .title{
    color: @fc;
    font-size: @large-font-size;
  }
  .sub-title{
    display: flex;
    font-size: @small-font-size;
    color: @text-color;
  }
}
</style>