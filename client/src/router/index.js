import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/public/DashBoard'
import SignUp from '@/components/public/SignUp'
import Login from '@/components/public/Login'
import Home from '@/components/userguide/Home'
import About from '@/components/userguide/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
