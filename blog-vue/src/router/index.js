import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'login',
      component: ()=>import("../views/Login.vue")
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: ()=>import("../views/Blogs.vue"),
      meta:{
        requireAuth:true
      }
    },

    {
      path: '/blog/add',
      name: 'BlogAdd',
      component: ()=>import("../views/BlogEdit.vue"),
      meta:{
        requireAuth:true
      }
    },

    {
      path: '/blog/:blogId',
      name: 'BlogDetail',
      component: ()=>import("../views/BlogDetail.vue"),
      meta:{
        requireAuth:true
      }
    },

    {
      path: '/blog/:blogId/edit',
      name: 'BlogEdit',
      component: ()=>import("../views/BlogEdit.vue"),
      meta:{
        requireAuth:true
      }
    },
  ]
})

export default router
