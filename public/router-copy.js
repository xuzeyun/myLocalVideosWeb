import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // base: '/video/',
  linkActiveClass: 'active',
  // linkExactActiveClass: 'router-link-exact-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'home',
      component: Home
    }
  ]
})
// {
//   path: '/asia_no',
//   name: 'asia_no',
//   component: Asia_yes
// },
// {
//   path: '/asia_no',
//   name: 'asia_no',
//   component: Asia_no
// },
// {
//   path: '/usa',
//   name: 'usa',
//   component: Usa
// },
// {
//   path: '*',
//   name: 'home',
//   component: Home
// }
// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
// }
