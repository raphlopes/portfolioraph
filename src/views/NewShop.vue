<template>
    <section class="covers">
        <div class="w-100 d-flex justify-content-center espacing" >
            <div class="justify-content-center espacing text-white px-3 px-md-2 mb-3 mt-md-2 mt-0" >
                <h3>Print shop</h3>
                <p>
                    You can browse our collection of images for each season. Click on the category
                    of your choice to view the available images.
                </p>
                <p>
                    Please note that we currently offer postcard prints only (100×148mm).
                </p>
            </div>
        </div>

        <pictures-selector @selectCategory="chooseCategory" :pictures="shopCover" :category="category"></pictures-selector>

    </section>

</template>

<script>


import PicturesSelectorMasonry from "../components/PicturesLayout/PicturesSelectorMasonry";
import PicturesSelector from "../components/PicturesLayout/PicturesSelector";

import { shopCover } from "@/utils/imageConstants.js";
export default {
    name: "NewShop",
    components: {PicturesSelectorMasonry,PicturesSelector},
    data() {
        return {

            hover: false,
            category:0,
            shopCover : shopCover
        };
    },
    methods : {
        chooseCategory : function (event) {

            this.$router.push( {path: "/shop/"+event})
        }
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