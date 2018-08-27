// vue router
import VueRouter from "vue-router";
import store, { TYPES } from "./store";

// views
import index from "./views/index.vue";
import blog from "./views/blog.vue";
import post from "./views/post.vue";
import contact from "./views/contact.vue";
import survey from "./views/survey.vue";
import statistics from "./views/statistics.vue";
import login from "./views/login.vue";
import registration from "./views/registration.vue";
import profile from "./views/profile.vue";

function Authenticated(to, from, next) {
  if (store.getters.isLoggedIn) {
    next();
  } else {
    next({ name: "login" });
  }
}

// router
export default new VueRouter({
  mode: "history",
  routes: [
    {
      name: "index",
      path: "/",
      component: index
    },
    {
      name: "blog",
      path: "/blog",
      component: blog
    },
    {
      name: "blogCategory",
      path: "/blog/category/:categoryName",
      component: blog,
      beforeEnter: Authenticated
    },
    {
      name: "blogPost",
      path: "/blog/post/:postID",
      component: post,
      beforeEnter: Authenticated
    },
    {
      name: "contact",
      path: "/contact",
      component: contact
    },
    {
      name: "survey",
      path: "/survey",
      component: survey,
      beforeEnter: Authenticated
    },
    {
      name: "statistics",
      path: "/statistics",
      component: statistics,
      beforeEnter: Authenticated
    },
    {
      name: "login",
      path: "/login",
      component: login
    },
    {
      name: "registration",
      path: "/registration",
      component: registration
    },
    {
      name: "profile",
      path: "/profile",
      component: profile
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
});
