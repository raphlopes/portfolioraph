<template>


  <section class="covers p-5 m-5">

    <pictures-selector-shop> </pictures-selector-shop>

  </section>

</template>

<script>

import PicturesSelectorShop from "../components/PicturesLayout/PicturesSelectorShop";
import PicturesSelectorMasonry from "../components/PicturesLayout/PicturesSelectorMasonry";

export default {
  components: {PicturesSelectorMasonry,PicturesSelectorShop},
  data() {
    return {

      hover: false,
      category: 0

    };
  }
}

</script>

<style scoped lang="scss">

.shopping{
  background-color: white;
  color: grey;
  border-color: black;
  border-width: thin;
}


.tuile-shop{

  border-color: transparent;
  color: white;
  background-color: grey;
  border-radius: 5%;
  height: auto;

  svg {
  width: 45%;
    padding-bottom: 10%;
    color:black;
  }

  img {
    height: 65%;
    width: 65%;
    padding-bottom: 10%;
  }

}

</style>