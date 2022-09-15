/*
 * @Author: wuwenjia
 * @Date: 2022-09-15 09:40:53
 * @FilePath: \nuxt3-app\server\api\static.ts
 * @Description: 
 * Copyright (c) 2022 by wuwenjia wuwenjia@aegis-data.cn, All Rights Reserved. 
 */
export default defineEventHandler(() => {
  return {
    data: {
      title: '测试静态页生成标题',
      content: '测试静态页meta内容',
      pageTitle: '动态页面内容',
      pageInfo: '动态页文章内容，',
    },
    msg: '成功',
    code: 200
  }
})