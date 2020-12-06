<template>
  <div class="home">

    <pictures-selector class="mt-5" :random="true" :max-picture-number="9"></pictures-selector>
    <!-- <pictures-selector-masonry class="mt-5" :random="true" :max-picture-number="9"></pictures-selector-masonry> -->

  </div>
</template>

<script>
// @ is an alias to /src

//console.log("test depuis home");

import PicturesSelector from "../components/PicturesLayout/PicturesSelector";
import PicturesSelectorMasonry from "../components/PicturesLayout/PicturesSelectorMasonry";
export default {
  components: {PicturesSelectorMasonry,PicturesSelector},
  data() {
    return {

      hover: false,
      category: 0

    };
  }
}



</script>
