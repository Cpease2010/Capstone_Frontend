import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MyAccount from '@/components/MyAccount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/myaccount',
      name: 'MyAcount',
      component: MyAccount
    }
  ]
})
