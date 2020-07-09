import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../components/showBlog.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import(/* webpackChunkName: "about" */ '../components/addBlog.vue')
  },
  {
    path: '/update/:id',
    name: 'update',
    component: () => import(/* webpackChunkName: "about" */ '../components/updateBlog.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
