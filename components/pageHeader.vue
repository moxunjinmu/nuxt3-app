<!--
 * @Author: wuwenjia
 * @Date: 2022-09-14 19:04:36
 * @FilePath: \nuxt3-app\components\pageHeader.vue
 * @Description: 项目导航栏
 * Copyright (c) 2022 by wuwenjia wuwenjia@aegis-data.cn, All Rights Reserved. 
-->
<template>
  <header class="page-header">

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
  height: @bannerHeight;
  width: 100%;
  box-shadow: 0px 4px 12px #ccc;
  position: fixed;
  left: 0;
  width: 100%;
}
</style>