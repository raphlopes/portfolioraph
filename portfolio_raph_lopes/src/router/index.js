import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import PicturesTest from '../views/PicturesTest'
import Shop from "../views/Shop"

Vue.use(VueRouter)

const routes = [
  {
    path:"*",
    redirect:"/",
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
    },
  },
  {
    path: '/test',
    name:'test',
    component: PicturesTest
  },
  {
    path: '/shop',
    name:'Shop',
    component: Shop,

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
