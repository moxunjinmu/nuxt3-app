<!--
 * @Author: wuwenjia
 * @Date: 2022-09-09 11:23:05
 * @FilePath: \nuxt3-app\pages\user-[group]\[groupId].vue
 * @Description: 
 * Copyright (c) 2022 by wuwenjia wuwenjia@aegis-data.cn, All Rights Reserved. 
-->
<template>
  <div>
    <!-- 动态路由页面 可以使用[param] 的方式 -->
    <span>{{$route.params.group}}</span> | 
    <span>{{$route.params.groupId}}</span>
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