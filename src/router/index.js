import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MyAccount from '@/components/MyAccount'
import Callback from '@/components/Callback'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/myaccount',
      name: 'MyAcount',
      component: MyAccount
    },{
      path: '/callback',
      name: 'callback',
      component: Callback
    }
  ]
})
