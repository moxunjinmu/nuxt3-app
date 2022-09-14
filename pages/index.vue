<!--
 * @Author: wuwenjia
 * @Date: 2022-09-09 09:12:40
 * @FilePath: \nuxt3-app\pages\index.vue
 * @Description: 
 * Copyright (c) 2022 by wuwenjia wuwenjia@aegis-data.cn, All Rights Reserved. 
-->
<template>
  <div>
    <h2>hello nuxt.js</h2>
    <span>index page</span>
  </div>
</template>

<script>
middleware: 'authenticated'
export default {
  name: 'HomePage',
  layout: 'foo',
  article: {
    title: '首页标题',
    description: '首页content，测试，新闻，法院，法制，法治，擎盾，舆情，数据量化，司法智能化',
    content: '擎盾集团创立于2009年，深耕司法智能化产业，致力于实现通用法律人工智能，打造“标准化、平民化、智能化”的法律服务体系，用数字化和智能化技术实现法律产业升级，为全面依法治国奉献科技力量。'
  },
  // 默认 layout设置自定义的布局组件 未设置的路由还会走默认的布局组件
  // layout: 'default'
  // 指定页面pages/index.vue
  // 设置个性化meta标签 设置页面title和description对SEO非常有用
  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [
        { hid: 'description', name: 'keywords', content: this.article.description },
        { hid: 'description', name: 'description', content: this.article.content },
      ]
    }
  },
  // 当你想要动态页面内容有利于 SEO 或者是提升首屏渲染速度的时候，就在 asyncData 中发请求拿数据
  // 注意事项：1.只能在页面组件中使用，子组件中可通过props获取父组件异步数据 2.没有this，在组件初始化之前被调用
  // 调用时机：1.获取服务端渲染数据（确保异步数据在渲染到客户端之前已经填充渲染完成，提高渲染速度，有利于SEO） 2.客户端路由更新之前也会被调用
  async asyncData(context) {
    console.log(context) // 可通过 context 来了解该对象的所有属性和方法。
    // 此行输出在服务端执行
    // 在浏览器也会输出 包裹在Nuxt SSR中
    console.log('async Data')
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/data.json'
    })
    // 返回的对象可以直接在页面组件使用
    // 在vue调试工具中有了posts和title
    // asyncData返回的数据会和data中的混合
    return res.data
  },
  data() {
    return {
    }
  }
}

</script>
<style>

</style>