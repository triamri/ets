import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/public/DashBoard'
import SignUp from '@/components/public/SignUp'
import Login from '@/components/public/Login'
import Home from '@/components/userguide/Home'
import About from '@/components/userguide/About'
import SearchUser from '@/components/userguide/SearchUser'

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
      path: '/register',
      name: 'SignUp',
      component: SignUp
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
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchUser
    }
  ]
})
