<!--
 * @Author: wuwenjia
 * @Date: 2022-09-19 10:40:43
 * @FilePath: \nuxt3-app\components\Blog\listItem.vue
 * @Description: 
 * Copyright (c) 2022 by wuwenjia wuwenjia@aegis-data.cn, All Rights Reserved. 
-->
<template>
  <article class="blog-list-item">
    <h4>
      <a href="/Blog/234234" >解决.gitignore忽略文件不生效问题</a>
    </h4>
    <div class="sub-title">
      <span>
        <i i-carbon-timer ></i>
        <span>{{' 2022-9-19 11:16:23 '}}</span>
      </span>
      <span>
        <i i-carbon-train-time></i>
        <span>{{'阅读次数：1'}}</span>
      </span>
      <span>
        <i i-carbon-document-sentiment></i>
        <span>喜欢：1</span>
      </span>

    </div>
    <div class="blog-introduction">
      {{'解决.gitignore忽略文件不生效问题git命令git常用命令项目中遇到新添加忽略规则不生效问题，在此记录解决方法git命令切换到项目所在目录# 清空git缓存git rm -r --cached .重新添加所有文件git add .这里我想忽略了pnpm-lock.yaml文件，执行上述步骤后已经达成效果。git常用命令git常用命令...'}}
    </div>
  </article>
</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>
.blog-list-item{
  width: 100%;
  padding: 1rem;
  border-radius: @radius;
  box-shadow: @box-shadow-3;
  .title{
    color: @black-color;
    font-weight: @fw;
    font-size: @large-font-size;
  }
  .sub-title{
    display: flex;
    gap: 1.2rem;
    width: 100%;
    margin-top: 8px;
    font-size: @small-font-size;
    color: @text-color;
    > * {
      display: flex;
      i {
        margin-right: 4px;
      }
    }
  }
  .blog-introduction{
    margin-top: 1rem;
    color: @fc-deep;
  }
}
</style>