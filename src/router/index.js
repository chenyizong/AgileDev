/* eslint-disable key-spacing,spaced-comment,indent */
import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '../components/home/AppIndex'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面不需要被访问
      redirect: '/index',
      child: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        }
// eslint-disable-next-line indent
        ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
