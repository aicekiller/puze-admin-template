import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'

import BaseForm from '@/views/BaseForm'
import BaseTable from '@/views/BaseTable'
import Index from '@/views/Index'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/index',
          name: 'Index',
          component: Index
        },
        {
          path: '/form',
          name: 'BaseForm',
          component: BaseForm
        },
        {
          path: '/table',
          name: 'BaseTable',
          component: BaseTable
        }
      ]
    }
  ]
})
