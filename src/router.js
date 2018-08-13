
import VueRouter from 'vue-router'
import WhiteBoard from './container/WhiteBoard'

// 定义一个名为 button-counter 的新组件
const DemoHome = {
  template: `
    <div>User</div>
  `
}

const routes = [
  { path: '/demoHome', component: DemoHome, name: 'demoHome' },
  { path: '/', component: WhiteBoard, name: 'whiteBoard' }
]

// //  创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

export default router