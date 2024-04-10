<template>

    <modal-custom medium bg-dark :to-close="toClose" @close="$emit('close')" >

        <template slot="header">
            <div class="d-flex justify-content-center w-100 pt-md-2 pb-md-2 pb-5 pt-1 my-auto text-white h4 font-weight-bold">
                Admin Access
            </div>
        </template>

        <template slot="body">
            <div class="d-flex flex-column h-100 w-100" v-if="loading">
                <div class="d-flex justify-content-center text-center bg-white py-5">
                    <loading style="color: black; height: 3rem;" class=""></loading>
                </div>
            </div>
            <div v-else class="pt-2 pb-md-0 pb-4 d-flex justify-content-center">
                <input class="password-input" type="email" v-model="email" placeholder="Enter email" />
                <input class="password-input" type="password" v-model="password" placeholder="Enter password" />
                <lock style="height: 2rem" class="ml-md-3 ml-2 my-auto"></lock>
            </div>
        </template>

        <template slot="footer">
            <div class="d-flex justify-content-center mx-5">
                <button class="checkout-btn" @click="logIn">Log-in</button>
            </div>
        </template>

    </modal-custom>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ModalCustom from "@/components/Modal.vue";
import Loading from "@/assets/icon/loading.svg";
import Lock from "@/assets/icon/lock.svg";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
    name : "AdminModal",
    components: {
        ModalCustom,
        Loading,
        Lock
    },
    data() {
        return {
            toClose: false,
            loading: false,
            password : "",
            email : "",
        };
    },
    computed: {
    },
    methods: {
        logIn : function(){
            const auth = getAuth();
            signInWithEmailAndPassword(auth,this.email, this.password)
                .then((userCredential) => {
                    // Admin sign-in successful
                    const user = userCredential.user;
                    this.$router.push({ name: 'Admin'});
                    // Access the authenticated user object or perform further actions
                })
                .catch((error) => {
                    // Handle admin sign-in error
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // Handle the error or display an appropriate message
                });
            this.toClose = true;
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

.footer-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.input-container {
    position: relative;
}

.input-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #999;
}

input {
    margin-bottom: 10px;
    padding-right: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    height: 40px;
    font-size: 16px;
}

.password-input::placeholder {
    margin-left: 1rem; /* Adjust the margin value as needed */
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
