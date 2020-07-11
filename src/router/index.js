import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from "../views/Test";
import Vote from '../views/vote'
import QueckStar from '../views/QueckStar'

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
