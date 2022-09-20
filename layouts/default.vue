<!--
 * @Author: moxunjingmu
 * @Date: 2022-09-14 23:29:21
 * @FilePath: \nuxt3-app\layouts\default.vue
 * @Description: 
 * Copyright (c) 2022 by moxunjingmu 1786471868@qq.com, All Rights Reserved. 
-->
<template>
  <div class="page-default">
    <PageHeader />
    <!-- <Menu></Menu> -->
    <main class="page-main">
      <!-- 页面出口，类似于子路由出口 -->
        <slot />
    </main>
  </div>
</template>
<script setup>

</script>
<style lang="less" scoped>
  .page-main{
    height: 100%;
    width: 100%;
    padding: 2rem;
    margin: 0 auto;
    max-width: @mainMaxWidth;
  }
</style>