<template>
  <div>
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