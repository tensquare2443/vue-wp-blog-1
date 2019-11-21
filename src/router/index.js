import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import About from "@/components/About";
import Posts from "@/components/Posts";
import Authors from "@/components/Authors";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/authors",
      name: "Authors",
      component: Authors
    }
  ]
});
