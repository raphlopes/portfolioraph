import {getFunctions, httpsCallable, httpsCallableFromURL } from 'firebase/functions';
import { getAuth } from "firebase/auth";
import store from "../store/store";
export const requireAdmin = (to, from, next) => {

    const user = getAuth().currentUser;
    if (user) {
        // User is authenticated, allow access to the route
        next();
    } else {
        console.log('not connected');
        next('/access-denied')
    }

}

