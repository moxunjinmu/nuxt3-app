<!--
 * @Author: moxunjingmu
 * @Date: 2022-09-14 23:29:21
 * @FilePath: \nuxt3-app\pages\user\[id].vue
 * @Description: 
 * Copyright (c) 2022 by moxunjingmu 1786471868@qq.com, All Rights Reserved. 
-->
<template>
  <div class="page-userId">
    <!-- 动态路由页面 可以使用[param] 的方式 -->
    <!-- <span>{{$route.params.group}}</span> -->
    <span>{{$route.params.id}}</span>
  </div>
</template>
<script>
  export default {
    name: "userId",
    data() {
      return {}
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {},
  }
</script>
<style></style>