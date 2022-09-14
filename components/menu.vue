<!--
 * @Author: moxunjinmu
 * @Date: 2022-09-14 23:29:21
 * @FilePath: \nuxt3-app\components\menu.vue
 * @Description: 
 * Copyright (c) 2022 by moxunjingmu 1786471868@qq.com, All Rights Reserved. 
-->
<template>
  <aside class="page-menu">
    <nav id="pageSidebarNav">
      <div class="group" >
        <section class="VPSidebarGroup" >
          <div class="title" >
            <h2 class="title-text" >基础</h2>
          </div>
          <a class="link" href="/user/2.html">
            <p class="link-text" >动态路由页面</p>
          </a>
        </section>
      </div>
    </nav>
  </aside>
</template>
<script setup lang="ts">
const menuList = ref([]);
</script>
<style lang="less" scoped>
.page-menu {
  width: 300px;
  height: 100%;
  border-right: 1px solid #ccc;
}
</style>
