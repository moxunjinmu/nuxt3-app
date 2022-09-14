

# index

### context 变量的可用属性

| 属性字段             | 类型            | 可用            | 描述                                                         |
| -------------------- | --------------- | --------------- | ------------------------------------------------------------ |
| app                  | Vue 根实例      | 客户端 & 服务端 | 包含所有插件的 Vue 根实例。例如：在使用 axios 的时候，你想获取 ![axios 可以直接通过 context.app.](https://math.jianshu.com/math?formula=axios%20%E5%8F%AF%E4%BB%A5%E7%9B%B4%E6%8E%A5%E9%80%9A%E8%BF%87%20context.app.)axios 来获取 |
| isClient             | Boolean         | 客户端 & 服务端 | 是否来自客户端渲染（废弃。请使用 process.client ）           |
| isServer             | Boolean         | 客户端 & 服务端 | 是否来自服务端渲染（废弃。请使用 process.server ）           |
| isStatic             | Boolean         | 客户端 & 服务端 | 是否来自 nuxt generate 静态化（预渲染）（废弃。请使用 process.static ） |
| isDev                | Boolean         | 客户端 & 服务端 | 是否是开发 dev 模式，在生产环境的数据缓存中用到              |
| isHMR                | Boolean         | 客户端 & 服务端 | 是否是通过模块热替换 webpack hot module replacement (仅在客户端以 dev 模式) |
| route                | Vue Router 路由 | 客户端 & 服务端 | Vue Router 路由实例                                          |
| store                | Vuex 数据       | 客户端 & 服务端 | Vuex.Store 实例。只有vuex 数据流存在相关配置时可用           |
| env                  | Object          | 客户端 & 服务端 | nuxt.config.js 中配置的环境变量，见 环境变量 api             |
| params               | Object          | 客户端 & 服务端 | route.params 的别名                                          |
| query                | Object          | 客户端 & 服务端 | route.query 的别名                                           |
| req                  | http.Request    | 服务端          | Node.js API 的 Request 对象。如果 Nuxt 以中间件形式使用的话，这个对象就根据你所使用的框架而定。nuxt generate 不可用 |
| res                  | http.Response   | 服务端          | Node.js API 的 Response 对象。如果 Nuxt 以中间件形式使用的话，这个对象就根据你所使用的框架而定。nuxt generate 不可用 |
| redirect             | Function        | 客户端 & 服务端 | 用这个方法重定向用户请求到另一个路由。状态码在服务端被使用，默认 302 redirect([status,] path [, query]) |
| error                | Function        | 客户端 & 服务端 | 用这个方法展示错误页：error(params) 。params 参数应该包含 statusCode 和 message 字段 |
| nuxtState            | Object          | 客户端          | Nuxt 状态，在使用 beforeNuxtRender 之前，用于客户端获取 Nuxt 状态，仅在 universal 模式下可用 |
| beforeNuxtRender(fn) | Function        | 服务端          | 使用此方法更新 **NUXT** 在客户端呈现的变量，fn 调用 (可以是异步) { Components, nuxtState } ，参考 示例 |







### 生命周期

| 钩子函数      | 说明                 | server | client |
| ------------- | -------------------- | ------ | ------ |
| beforeCreate  |                      | ✔      | ✔      |
| created       | 在实例创建完成后调用 | ✔      | ✔      |
| beforeMount   |                      | ❌      | ✔      |
| mounted       |                      | ❌      | ✔      |
| beforeUpdate  |                      | ❌      | ✔      |
| updated       |                      | ❌      | ✔      |
| activated     |                      | ❌      | ✔      |
| deactivated   |                      | ❌      | ✔      |
| beforeDestroy |                      | ❌      | ✔      |
| destroyed     |                      | ❌      | ✔      |
| errorCaptured |                      | ✔      | ✔      |

