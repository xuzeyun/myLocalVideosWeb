import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddVideo from './views/dataList/AddVideo'
import Table from './components/table.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  routes: [
    {
      path: '/videos/:nameId',
      name: 'videos',
      component: Home
    },
    {
      path: '/aisayes',
      name: 'aisayes',
      component: Home
    },
    {
      path: '/datatable',
      name: 'addVideo',
      component: AddVideo
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
