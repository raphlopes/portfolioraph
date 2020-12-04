<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div> wtf jhin zhao </div>
    
    <pictures-selector class="mt-5" :random="true" :max-picture-number="3"></pictures-selector>
  </div>
</template>

<script>
// @ is an alias to /src

import PicturesSelector from "../components/PicturesLayout/PicturesSelector";
export default {
    components: {PicturesSelector}
}
</script>
