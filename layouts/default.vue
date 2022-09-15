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
    <Menu></Menu>
    <section class="page-main">
      <!-- 页面出口，类似于子路由出口 -->
      <div class="page-body">
        <slot />
      </div>
    </section>
  </div>
</template>
<script setup>

</script>
<style lang="less" scoped>
  .page-main{
    &:extend(.flex-between-center);
    height: 100%;
    width: 100%;
    padding-left: @sidebar-width-small;
    padding-top: @bannerHeight;
    .page-body{
      width: 100%;
      height: 100%;
      padding: @padding;
    }
  }
</style>