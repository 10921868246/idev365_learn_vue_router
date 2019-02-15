// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { 
    computed: {
        username () {
            console.log("this.$route",this.$route)
          // 我们很快就会看到 `params` 是什么
          return this.$route.query.username
        }
      },
      methods: {
        goBack () {
          window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/')
        }
      },
    template: `
      <div>
        <p>username:{{username}}</p>
        <button @click="goBack">goBack</button>
      </div>
` }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router:router,
}).$mount('#app')
