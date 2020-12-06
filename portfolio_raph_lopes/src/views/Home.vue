<template>
  <div class="home">

    <pictures-selector class="mt-5" :random="true" :max-picture-number="9"></pictures-selector>
  </div>
</template>

<script>
// @ is an alias to /src

//console.log("test depuis home");

import PicturesSelector from "../components/PicturesLayout/PicturesSelector";
export default {
    components: {PicturesSelector}
}



</script>
