import Vue from 'vue'
import VueRouter from 'vue-router'
import { requireAdmin } from './adminGuard' // Import the route guard

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import MyWork from '../views/MyWork';
import MyWorkCat from '../views/MyWorkCat'
import Shop from "../views/NewShop.vue"
import OldShop from "../views/Shop"
import Work1 from "../views/Work1";
import Work2 from "../views/Work2";
import Work3 from "../views/Work3";
import ShopDisplay from "@/views/ShopDisplay.vue";
import AdminPage from "@/views/Admin.vue";
import AccessDenied from "@/views/AccessDenied.vue";
import Success from "@/views/Success.vue";
import Cancel from "@/views/Cancel.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect: "/",
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPage,
    props: true,
    beforeEnter: requireAdmin // Apply the route guard
  },
  {
    path: '/access-denied',
    name: 'AccessDenied',
    component: AccessDenied,
    meta : {
        title : "Access Denied"
    }
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
      title : "About Me"
    }
  },
  {
    path: '/success/:session_id',
    name: 'Success',
    component: Success,
    meta : {
      title : "Order completed !"
    }
  },
  {
    path: '/cancel',
    name: 'Cancel',
    component: Cancel,
    meta : {
        title : "Order canceled"
    }
  },
  {
    path: '/contact',
    name:'Contact',
    component: Contact,
    meta : {
      title : "Contact Me"
    }
  },
    /*
  {
    path: '/work',
    name:'My Work',
    component: MyWork,
    meta : {
      title : "My Work"
    }
  },
  {
    path: '/work/:id',
    name:'My Work',
    component: MyWorkCat,
    meta : {
      title : "My Work"
    }
  },

     */
  {
    path: '/shop',
    name:'Shop',
    component: Shop,
    meta : {
      title : "Shop"
    }
  },
  {
    path: '/shop/:id',
    name:'ShopDisplay',
    component: ShopDisplay,
    meta : {
      title : "Browse Shop"
    }
  },
    /*
  {
    path: '/oldshop',
    name:'Shop',
    component: OldShop,
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

     */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
