import Vue from 'vue'
import Router from 'vue-router'
import blogList from '@/components/blogList/index'
import Login from '@/components/login/index.vue'
import newBlog from '@/components/addBlog/new'
import indexMain from '@/components/index'
import tabs from '@/components/tabs/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'indexMain',
      component: indexMain,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'blogList',
          component: blogList
        },
        {
          path: '/new',
          name: 'newBlog',
          component: newBlog
        },
        {
          path: '/tabs',
          name: 'tabs',
          component: tabs
        }
      ]
    }
  ]
})
