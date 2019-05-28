import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ContentWelcome from './views/components/content/Welcome.vue'
import ContentSkill from './views/components/content/Skill.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/home',
      children: [
        {
          path: '/',
          name: 'home',
          component: ContentWelcome
        },
        {
          path: '/skill',
          name: 'skill',
          component: ContentSkill
        }
      ]
    },
    {
      path: '*',
      name: 'home',
      component: Home
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
