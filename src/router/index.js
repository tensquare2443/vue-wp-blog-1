import Vue from "vue";
import Router from "vue-router";
import Home from "@/routes/Home";
import AllPosts from "@/routes/AllPosts";
import Post from "@/routes/Post";
import About from "@/routes/About";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      props: true
    },
    {
      path: '/all-posts',
      name: 'AllPosts',
      component: AllPosts,
      props: true
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post,
      props: true
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "*",
      redirect: "/",
      name: "404",
      component: Home,
      props: true
    }
  ]
});
