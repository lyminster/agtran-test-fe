import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth) {
    // need to Login
  } else {
    next();
  }
});


export default router
