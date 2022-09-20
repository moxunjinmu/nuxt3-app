<!--
 * @Author: wuwenjia
 * @Date: 2022-09-19 10:21:06
 * @FilePath: \nuxt3-app\pages\Blog\index.vue
 * @Description: 
 * Copyright (c) 2022 by wuwenjia wuwenjia@aegis-data.cn, All Rights Reserved. 
-->
<template>
  <article class="Blog-list">
    <ul>
      <li class="article-item" v-for="(item, k) in 6" :key="k">
        <BlogListItem></BlogListItem>
      </li>
    </ul>
  </article>
</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>
  .article-item{
    margin-bottom: 1rem;
  }
</style>