<!--
 * @Author: wuwenjia
 * @Date: 2022-09-09 10:09:51
 * @FilePath: \nuxt3-app\pages\user\index.vue
 * @Description: 
 * Copyright (c) 2022 by wuwenjia wuwenjia@aegis-data.cn, All Rights Reserved. 
-->
<template>
  <div>
    <h3>userIndex</h3>
    <!-- NuxtLink 路由跳转 -->
    <NuxtLink to="/user/userInfo" >NuxtLinto userInfo</NuxtLink><br/>
    <!-- 点击将跳转到 百度 页面 -->
    <NuxtLink to="https://www.baidu.com/"> to baidu </NuxtLink><br/>
    <!-- vue 路由跳转 -->
    <button @click="pushUserInfo">跳转到 userInfo</button>
    <!-- 全局组件自动引入 components/bar.vue -->
    <bar></bar>
    <!-- 嵌套的组件自动引入 components/user/button.vue -->
    <!-- 通过驼峰命名法获取组件 -->
    <userButton/>
  </div>
</template>
<!-- vue3 setup语法糖 -->
<script setup lang="ts">
  const router = useRouter();
  const pushUserInfo = () => {
    router.push({path: '/user/userInfo'});
  }
</script>
<style>

</style>