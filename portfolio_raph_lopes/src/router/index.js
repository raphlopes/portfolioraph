import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import MyWork from '../views/MyWork'
import Shop from "../views/Shop"
import Work1 from "../views/Work1";
import Work2 from "../views/Work2";
import Work3 from "../views/Work3";

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect: "/",
  },
  {
    path: "/formulaire-send-email.php?",
    redirect: "src/views/formulaire-send-email.php",
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta : {
      title : "Portfolio Raphael Lopes"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta : {
      title : "A propos"
    }
  },
  {
    path: '/contact',
    name:'Contact',
    component: Contact,
    meta : {
      title : "Me contacter"
    }
  },
  {
    path: '/work',
    name:'My Work',
    component: MyWork,
    meta : {
      title : "My Work"
    }
  },
  {
    path: '/shop',
    name:'Shop',
    component: Shop,
    meta : {
      title : "Shop"
    }
  },
  {
    path: '/Japan',
    name: 'Japan',
    component: Work1,
    meta: {
      title: "Japan"
    }
  },
  {
    path: '/Greece',
    name: 'Greece',
    component: Work2,
    meta: {
      title: "Greece"
    }
  },
  {
    path: '/xxx',
    name:'xxx',
    component: Work3,
    meta : {
      title : "xxx"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
