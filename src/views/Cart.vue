<template>

    <modal-custom medium bg-dark :to-close="toClose" @close="$emit('close')" >

        <template slot="header">
            <div class="d-flex justify-content-center w-100 pt-md-2 pb-md-2 pb-5 pt-1 my-auto text-white h4 font-weight-bold">
                Shopping Cart
            </div>
        </template>

        <template slot="body">
            <div class="d-flex flex-column h-100 w-100 " v-if="checkoutLoading">
                <div class="d-flex justify-content-center text-center bg-white py-5">
                    <loading style="color: black; height: 3rem;" class=""></loading>
                </div>
            </div>
            <div v-else class="pt-2">
                <div v-if="cartItems.length === 0">
                    <div class="product-info">
                        <div class="product-name my-auto mx-auto">
                            <p>Your cart is empty.</p>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div v-for="item in cartItems" :key="item.id" class="cart-item px-md-4">
                        <div class="product-info">

                            <div class="product-image">
                                <img :src="item.img" alt="Product Image">
                            </div>

                            <div class="product-name my-auto">
                                {{ item.text }} - {{showPrice(item)}}
                            </div>

                            <div class="quantity-container   ">
                                <button class="quantity-btn" @click="removeFromCart(item)">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </button>
                                <p class="quantity">{{ item.quantity }}</p>
                                <button class="quantity-btn" @click="addToCart(item)">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template slot="footer">
            <div class="d-flex justify-content-between mx-5">
                <button class="clear-cart-btn" v-if="cartItems.length !== 0" @click="clearCart">Clear Cart</button>
                <button class="checkout-btn" v-if="cartItems.length !== 0" @click="checkout">Checkout</button>
            </div>
        </template>




    </modal-custom>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ModalCustom from "@/components/Modal.vue";
import Loading from "@/assets/icon/loading.svg";
import { getFunctions, httpsCallableFromURL, httpsCallable } from "firebase/functions";
import {getAnalytics, logEvent} from "firebase/analytics";
import {formatAmount, getBrowserData} from "@/utils/utils";
export default {
    name : "CartModal",
    components: {
        ModalCustom,
        Loading,
    },
    data() {
        return {
            isCartWindowOpen: false,
            toClose: false,
            checkoutLoading: false,
        };
    },
    computed: {
        ...mapGetters(['cartItems']),
    },
    methods: {
        ...mapActions(['removeFromCart', 'clearCart']),
        showPrice(item)
        {
            const priceData = this.$store.getters.getPriceByType(item.type);
            const amount = priceData.amount * item.quantity;
            return formatAmount(amount,priceData.currency);
        },
        removeFromCart(item) {
            this.$store.dispatch('removeFromCart', item);
        },
        addToCart(item) {
            this.$store.dispatch('addToCart', item);
            console.log("Item added to cart:", item);
        },
        clearCart() {
            this.$store.dispatch('clearCart');
        },
        checkout : function(){
            this.checkoutLoading = true;
            const analytics = getAnalytics();

            const browserData = getBrowserData();

            const cartItems = this.$store.getters.cartItems;
            const cartItemStrings = cartItems.map(item => `${item.name} - ${item.quantity}`);
            const cartItemsString = cartItemStrings.join();

            logEvent(analytics, 'checkout_attempt', {
                products : cartItemsString,
                browser : browserData.browser,
                device : browserData.device,
            });
            const functions = getFunctions();
            const createSession = httpsCallableFromURL(functions, 'https://us-central1-portfolio-raphael.cloudfunctions.net/createCheckoutSession');
            //const changeMethod = httpsCallable(functions, 'createCheckoutSession')
            createSession(
                {
                    products : this.$store.getters.cartItems,
                }
            ).then((result) => {

                if(result.data != ""){
                    console.log(result.data);
                    this.openInNewTab(result.data);
                    this.checkoutLoading = false;
                }else{
                    this.checkoutLoading = false;
                }
            }).catch((error) => {
                console.log(error);
                this.checkoutLoading = false;
            });
        },
        openInNewTab(url) {
            let a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.click();
            document.body.removeChild(a);
        }

    },
};
</script>

<style>
.cart-item {
    margin-bottom: 10px;
}

.product-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f8f8;
    padding: 10px;
    border-radius: 5px;
}

.product-name {
    font-size: 16px;
    font-weight: bold;
}

.quantity-container {
    display: flex;
    align-items: center;
}

.quantity-btn {
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
}

.quantity-btn svg {
    width: 18px;
    height: 18px;
}

.quantity {
    background-color: #eee;
    border-radius: 5px;
    padding: 5px;
    margin: 0 5px;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.clear-cart-btn {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
}

.clear-cart-btn:hover {
    background-color: #d32f2f;
}

.checkout-btn {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
}

.checkout-btn:hover {
    background-color: #43a047;
}

.product-image {
    width: 50px; /* Adjust the width as per your preference */
    height: 50px; /* Adjust the height as per your preference */
    margin-right: 10px; /* Adjust the margin as per your preference */
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Adjust the object-fit property as per your preference */
    border-radius: 5px; /* Adjust the border-radius as per your preference */
}

</style>
