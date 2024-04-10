<template>
    <section class="home">
        <div class="w-100 d-flex justify-content-center espacing" >
            <div class="justify-content-center espacing text-white px-md-3 px-5 mb-3 mt-md-4 mt-0" >
              <h3>Welcome to my portfolio</h3>
              <p>
                  Explore my collection of images showcasing the beauty of each season captured by my lens.
              </p>
              <p>
                  If you're interested in purchasing prints,
                  head over to the Shop section where you'll find a curated selection of postcard prints.
              </p>
          </div>
        </div>
    <pictures-selector :pictures="homePictures" class="mt-3" :random="true" :max-picture-number="9"></pictures-selector>
    <!-- <pictures-selector-masonry class="mt-5" :random="true" :max-picture-number="9"></pictures-selector-masonry> -->

  </section>
</template>

<script>
// @ is an alias to /src
import PicturesSelector from "../components/PicturesLayout/PicturesSelector";
import PicturesSelectorMasonry from "../components/PicturesLayout/PicturesSelectorMasonry";

import { homePictures } from "@/utils/imageConstants.js";

export default {
  components: {PicturesSelectorMasonry,PicturesSelector},
  data() {
    return {

      hover: false,
      category: 0,
      homePictures : homePictures
    };
  }
}



</script>
