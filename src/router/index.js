import Vue from 'vue'
import Router from 'vue-router'
import blogList from '@/components/blogList/index'
import Login from '@/components/login/index.vue'
import newBlog from '@/components/addBlog/new'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blogList',
      component: blogList
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/new',
      name: 'newBlog',
      component: newBlog
    }
  ]
})
