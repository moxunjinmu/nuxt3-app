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
          <a class="link" :class="{active: currentRoute.path == '/user/2.html'}" href="/user/2.html">
            <p class="link-text" >动态路由页面</p>
          </a>
        </section>
      </div>
    </nav>
  </aside>
</template>
<script setup lang="ts">
const menuList = ref([]);
// 获取路由实例
const route = useRouter();
// 获取当前路由信息 => this.$route
const currentRoute = route.currentRoute.value;

</script>
<style lang="less" scoped>
.page-menu {
  width: @sidebar-width-small;
  height: 100%;
  border-right: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  left: 0;
  top: @bannerHeight;
  z-index: @z-index-sidebar;
  padding: 0 32px 96px;
  // // width: calc(100vw - 64px);
  // // max-width: @sidebar-width-mobile;
  // opacity: 0;
  // background-color: @background;
  // box-shadow: @box-shadow-3;
  // overflow-x: hidden;
  // overflow-y: auto;
  // transform: translate(-100%);
  // transition: background-color .5s,opacity .5s,transform .3s ease;
  #pageSidebarNav{
    padding-top: 24px;
    outline: 0;
    .title,
    .link{
      padding: 4px 0;
    }
    .link.active{
      font-weight: 600;
      color: @c-brand;
      transition: color .25s;
    }
  }
}
</style>
