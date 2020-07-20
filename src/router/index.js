import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from "../views/Test";
import Vote from '../views/vote'
import QueckStar from '../views/QueckStar'
import Vote_Result from '../views/Vote_Result'
import Vote_TP from '../views/Vote_TP'
import Login from '../views/Login'
import Register from '../views/Register'
import UserCenter from '../views/UserCenter'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    show:true,
    redirect:'/quackstar',
    children:[
        {
        path:'/vote',
        name:'投票页',
        component:Vote
        },
      {
        path:'/quackstar',
        name:'投票页',
        component:QueckStar
      },{
        path:'/result',
        name:'结果',
        component:Vote_Result
      },{
      path:'/vote_tp',
        name:'开始投票',
        component:Vote_TP
      },{
      path:'/login',
        name:'登陆',
        component:Login
      },
      {
        path:'/register',
        name:'注册',
        component:Register
      },{
      path:'/usercenter',
        name:'用户中心',
        component:UserCenter
      }

    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:'/test',
      name:'asd',
      component:Test
    },
]

const router = new VueRouter({
  routes
})

export default router
