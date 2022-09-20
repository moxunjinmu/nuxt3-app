<!--
 * @Author: wuwenjia
 * @Date: 2022-09-14 19:04:36
 * @FilePath: \nuxt3-app\components\pageHeader.vue
 * @Description: 项目导航栏
 * Copyright (c) 2022 by wuwenjia wuwenjia@aegis-data.cn, All Rights Reserved. 
-->
<template>
  <header class="page-header">
    <nuxt-link to="/" ></nuxt-link>
    <nav class="nav">
      <div class="spacer"></div>
      <div class="right">
        <a href="/Blog">
          <span>Blog</span>
        </a>
        <a href="https://github.com/moxunjinmu" i-carbon-logo-github target="_blank"></a>
      </div>
    </nav>
  </header>
</template>
<script>
  export default {
    name: "pageHeader",
    data() {
      return {}
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {},
  }
</script>
<style lang="less">
.page-header{
  width: 100%;
  box-shadow: 0px 4px 12px #ccc;
  width: 100%;
  .nav{
    padding: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: auto max-content;
  }
}
</style>