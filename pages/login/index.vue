<template>
  <div>
    <h3>login</h3>
  </div>
</template>
<script>
  export default {
    name: "login",
    article: {
    title: '擎盾登录页',
    description: '登录页content，登录页测试，新闻，法院，法制，法治，擎盾，舆情，数据量化，司法智能化',
    content: '擎盾集团创立于2009年，深耕司法智能化产业，致力于实现通用法律人工智能，打造“标准化、平民化、智能化”的法律服务体系，用数字化和智能化技术实现法律产业升级，为全面依法治国奉献科技力量。欢迎登录。'
  },
    head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [
        { hid: 'description', name: 'keywords', content: this.article.description },
        { hid: 'description', name: 'description', content: this.article.content },
      ]
    }
  },
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