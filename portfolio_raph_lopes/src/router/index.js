import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import PicturesTest from "../views/PicturesTest";
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
      title : "rundown draven"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta : {
      title : "0-6 draven"
    },
  },
  {
    path: '/contact',
    name:'Contact',
    component: Contact
  },
  {
    path: '/test',
    name:'test',
    component: PicturesTest
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
