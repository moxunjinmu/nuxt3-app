<template>
  <div class="page-default">
    <Header />
    <section class="page-main">
      <Menu></Menu>
      <!-- 页面出口，类似于子路由出口 -->
      <div class="page-body">
        <slot />
      </div>
    </section>
  </div>
</template>
<script setup>

</script>
<style lang="less" scoped>
  .page-main{
    &:extend(.flex-between-center);
    height: 100%;
    width: 100%;
  }
</style>