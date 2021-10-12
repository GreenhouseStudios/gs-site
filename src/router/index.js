import Vue from 'vue'
import Home from '../Home'
import People from '../People'
import Projects from '../Projects'
import VueRouter from 'vue-router'
Vue.use(
    VueRouter
)
const routes = [
    { path: '/projects', component: Projects },
    { path: '/people', component: People },
    { path: '/', component: Home },
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
          } else {
            return { x: 0, y: 0 }
          }
      }
})


export default router;