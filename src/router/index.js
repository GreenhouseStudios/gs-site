import Vue from 'vue'
import Home from '../Home'
import People from '../People'
import Blog from '../Blog'
import BlogRead from '../BlogRead'
import Projects from '../Projects'
import Page from '../Page'
import VueRouter from 'vue-router'
import ProjectPage from '../ProjectPage'
import Error from '../Error'
Vue.use(
    VueRouter
)
const routes = [
    {name: "Projects", path: '/projects', component: Projects },
    {name: "People", path: '/people', component: People },
    {name: "Blog", path: '/blog', component: Blog },
    {name: "BlogRead", path: '/blog/:slug', component: BlogRead },
    {name: "ProjectPage", path: '/projects/:slug', component: ProjectPage },
    {name: "Page", path: '/page/:slug', component: Page},
    {name: "Home", path: '/', component: Home },
    {name: "Error", path: '*', component: Error },
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