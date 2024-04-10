<template>
    <main class="page cv-page">
        <div class="d-flex flex-column h-100 w-100 " v-if="loading">
            <div class="d-flex justify-content-center text-center py-5">
                <loading style="color: white; height: 6rem;" class=""></loading>
            </div>
        </div>
        <section v-else class="portfolio-block block-intro border-bottom">
            <div class="container">
                <div class="mx-auto pb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="100px" height="100px">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M19 7L9 17l-4-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="about-me">
                    <h2 class="pb-2">Thank You for your order{{(customer.name?", "+customer.name:"")}} !</h2>
                    <div class="h5 pb-1">Hello, your order has been successfully placed.</div>
                    <div class="h5 pb-1">You will receive a confirmation email {{(customer.email?"at "+customer.email:"")}}</div>
                    <div class="h5">I appreciate your support and hope you will enjoy the prints !</div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import {getFunctions , httpsCallableFromURL, httpsCallable} from "firebase/functions";

import Loading from "@/assets/icon/loading.svg";

export default {
    name: "Success",
    data() {
        return {
            customer : {},
            loading : true
        };
    },
    components: {
        Loading
    },
    computed: {
    },
    methods : {
    },
    async mounted() {

        this.loading = true;
        const sessionId = this.$route.params.session_id;
        console.log(sessionId);

        const functions = getFunctions();
        const getName = httpsCallableFromURL(functions, 'https://us-central1-portfolio-raphael.cloudfunctions.net/successfulPayment');
        //const getName = httpsCallable(functions, 'successfulPayment');
        await getName(
            {
                session_id : sessionId
            }
        )
        .then((result) => {
            this.customer = result.data;
            this.loading = false;
            console.log(result);
        })
        .catch((error) => {
            this.loading = false;
            console.log(error);
        });
    }
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.avatar {
    margin-bottom: 20px;
}

.title {
    font-size: 24px;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 18px;
    margin-bottom: 10px;
}

.about-me {
    color: white;
}
</style>

