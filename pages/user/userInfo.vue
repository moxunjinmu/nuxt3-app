<template>
  <div>
    <h3>userInfo</h3>
    <!-- NuxtLink 路由跳转 -->
    <NuxtLink to="/user" >NuxtLink: to user</NuxtLink><br />
      <!-- vue 路由跳转 -->
      <button @click="pushUserIndex">跳转到 userIndex</button>
  </div>
</template>
<!-- vue2 -->
<script>
  export default {
    name: "userInfo",
    data() {
      return {}
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {
      pushUserIndex() {
        this.$router.push({path: '/user'})
      }
    },
  }
</script>
<style></style>