import Vue from 'vue';
import Vuex from 'vuex';

import { getFunctions, httpsCallableFromURL, httpsCallable } from "firebase/functions";
import { uniqueTypes } from "@/utils/imageConstants";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
        prices: {},
        admin : false,
    },
    mutations: {
        addToCart(state, product) {
            const existingProduct = state.cart.find((item) => item.name === product.name);
            if (existingProduct) {
                existingProduct.quantity += 1; // Increment the quantity if the product already exists in the cart
            } else {
                state.cart.push({ name: product.name, quantity: 1, type : product.type, img : product.img, text: product.textToShow }); // Add a new product object to the cart
            }
        },
        removeFromCart(state, product) {
            const existingProduct = state.cart.find((item) => item.name === product.name);
            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    existingProduct.quantity -= 1; // Decrement the quantity if it's greater than 1
                } else {
                    state.cart = state.cart.filter((item) => item.name !== product.name); // Remove the product from the cart if the quantity is 1
                }
            }
        },
        clearCart(state) {
            state.cart = [];
        },
        loadPrices(state, prices) {
            state.prices = prices;
        },
        adminLogged(state) {
            state.admin = true;
        }
    },
    actions: {
        loadPrices({ commit }) {
            const functions = getFunctions();
            const initializePrices = httpsCallableFromURL(functions, 'https://us-central1-portfolio-raphael.cloudfunctions.net/initializePrices');
            initializePrices(
                {
                    uniqueTypes: uniqueTypes,
                }
            ).then((result) => {
                console.log('loadPrices', result.data);
                const prices = result.data;
                commit('loadPrices', prices);
            });
        },
        addToCart({ commit }, item) {
            commit('addToCart', item);
        },
        removeFromCart({ commit }, itemId) {
            commit('removeFromCart', itemId);
        },
        clearCart({ commit }) {
            commit('clearCart');
        },
        adminLogged({ commit }) {
            commit('adminLogged');
        }
    },
    getters: {
        cartItems: (state) => state.cart,
        getPriceByType:  (state) => (type) => {
            //find in prices, the field whose name is the type
            return state.prices[type];
        },
        isAdmin: (state) => state.admin,
    },
});
