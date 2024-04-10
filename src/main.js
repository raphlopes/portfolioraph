import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueDarkMode from "@growthbunker/vuedarkmode";
import store from './store/store';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "portfolio-raphael.firebaseapp.com",
  databaseURL: "https://portfolio-raphael.firebaseio.com",
  projectId: "portfolio-raphael",
  storageBucket: "portfolio-raphael.appspot.com",
  messagingSenderId: "339852417116",
  appId: "1:339852417116:web:c5573364ca1075fbf8ae99",
  measurementId: "G-MWYN05WDKQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const functions = getFunctions(app);
export const auth = getAuth(app);

if (window.location.hostname === "localhost") {
  connectFunctionsEmulator(functions, "127.0.0.1", 5001);
}

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
Vue.use(VueDarkMode);
