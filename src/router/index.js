// import createWebHistory from 'vue-router'
import Vue from "vue";
import Home from "../Home";
import People from "../People";
import Blog from "../Blog";
import About from "../About";
import BlogRead from "../BlogRead";
import Projects from "../Projects";
import Page from "../Page";
import ProjectPage from "../ProjectPage";
// import NotFound from "../NotFound";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  { name: "Projects", path: "/projects", component: Projects },
  { name: "People", path: "/people", component: People },
  { name: "People", path: "/person/:name/", component: About },
  { name: "Blog", path: "/blog", component: Blog },
  { path: "/blog/:slug", component: BlogRead },
  { name: "FilteredBlog", path: "/blog/category/:id", component: Blog },
  { path: "/projects/:slug", component: ProjectPage },
  { name: "Page", path: "/page/:slug", component: Page },
  { name: "Home", path: "/", component: Home },
  // { path: "/404", component: NotFound },
  // { path: "*", redirect: "/404" },
];

const router = new VueRouter({
  mode: "history",
  routes, // short for `routes: routes`
  scrollBehavior(to, from, savedPosition) {
    // console.log(to);
    // console.log(from);
    if (savedPosition && !to.params.name) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.fullPath.substring(0, 2) === "/#") {
    const path = to.fullPath.substring(2);
    next(path);
    return;
  }
  next();
});

export default router;
