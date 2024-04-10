<template>
    <section class="covers">
        <div class="w-100 d-flex justify-content-center espacing" >

            <a class="d-flex align-items-center px-4 text-white pointer ft1 mb-4 mt-md-2 mt-0" v-if="category !== 0" @click="goBack()">
                <back-arrow class="pr-2" style="height : 1.5rem"></back-arrow>
                Back
            </a>

        </div>

        <pictures-selector :pictures="imgToShow"></pictures-selector>

    </section>

</template>

<script>


import PicturesSelectorMasonry from "../components/PicturesLayout/PicturesSelectorMasonry";
import PicturesSelector from "../components/PicturesLayout/PicturesSelector";

import BackArrow from "@/assets/icon/back-arrow.svg";

import { imgSpring, imgSummer, imgAutumn, imgWinter } from "@/utils/imageConstants.js";
import { mapActions } from 'vuex';
export default {
    name: "ShopDisplay",
    components: {PicturesSelectorMasonry,PicturesSelector, BackArrow},
    data() {
        return {

            hover: false,
            category:0,
            imgSpring : imgSpring,
            imgSummer : imgSummer,
            imgAutumn : imgAutumn,
            imgWinter : imgWinter
        };
    },
    created() {
    },
    computed: {
        imgToShow : function(){
            switch (this.category) {
                case 1:
                    return this.imgSpring;
                case 2:
                    return this.imgSummer;
                case 3:
                    return this.imgAutumn;
                case 4:
                    return this.imgWinter;
                default:
                    return this.imgAutumn;
            }
        }
    },
    methods : {

        ...mapActions(['addToCart']),
        goBack : function (event) {
            this.$router.push( {path: "/shop"})
        },
    }, mounted() {
        this.category = Number((this.$route.params.id)) || 0;
    }
}
</script>

<style scoped>

.espacing{
    padding-top: 1%;
    padding-bottom: 1%;
}
.ft1{
    text-decoration:none;
    font-family: vcsm;
    font-size: 1.5em;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;

}
.pointer{
    cursor: pointer;
}

</style>