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
import NotFound from "../NotFound";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  { name: "Projects", path: "/projects", component: Projects },
  { name: "People", path: "/people", component: People },
  { name: "PersonAbout", path: "/person/:name/", component: About },
  { name: "Blog", path: "/blog", component: Blog },
  { name: "BlogRead", path: "/blog/:slug", component: BlogRead },
  { name: "FilteredBlog", path: "/blog/category/:id", component: Blog },
  { name: "ProjectPage", path: "/projects/:slug", component: ProjectPage },
  { name: "Page", path: "/page/:slug", component: Page },
  { name: "PrivatePage", path: "/networklab/:slug", component: Page },
  { name: "Home", path: "/home", component: Home },
  { name: "Home", path: "/", component: Home },
  { name: "Page", path: "/:slug", component: Page},
  { path: "*", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  routes, // short for `routes: routes`
  // history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    // console.log(to);
    // console.log(from);
    if (savedPosition && !to.params.name || to.path.includes('/blog') && to.name !== 'BlogRead') {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
