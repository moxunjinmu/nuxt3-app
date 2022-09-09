<template>
  <div>
    <h1>{{data}}</h1>
    <NuxtPage></NuxtPage>
  </div>
</template>
<script setup>
  const {data}  = await useFetch('/api/hello')
</script>
