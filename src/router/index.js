import Vue from "vue";
import Home from "../Home";
import People from "../People";
import Blog from "../Blog";
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
  { name: "Blog", path: "/blog", component: Blog },
  { path: "/blog/:slug", component: BlogRead },
  { path: "/projects/:slug", component: ProjectPage },
  { name: "Page", path: "/page/:slug", component: Page },
  { name: "Home", path: "/", component: Home },
  { path: "/404", component: NotFound },
  { path: "*", redirect: "/404" },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
