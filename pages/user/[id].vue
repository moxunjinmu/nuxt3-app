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
    <title>{{data.data.pageTitle}}</title>
    <div>{{data.data.pageInfo}}</div>
    <!-- <div>{{stats}}</div> -->
  </div>
</template>
<script setup lang="ts">
  // 获取运行时配置
  const config = useRuntimeConfig()
  // 获取服务端api结果
  const {data}  = await useFetch('/api/static');
  // const { data:stats } = await useAsyncData( 'stats', () => $fetch( config.BASE_URL+'/stats') );
  // console.log('stats',stats);
  
</script>
<style>

</style>