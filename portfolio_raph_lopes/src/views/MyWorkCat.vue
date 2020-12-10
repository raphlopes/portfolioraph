<template>
  <section class="covers">
    <div class="w-100 d-flex justify-content-center espacing" >

      <a class="px-4 text-white pb-3 pointer ft1" @click="goBack()">
       Back
      </a>
    
    </div>
    <pictures-selector :category="category"></pictures-selector>

  </section>

</template>

<script>

  
    import PicturesSelectorMasonry from "../components/PicturesLayout/PicturesSelectorMasonry";
    import PicturesSelector from "../components/PicturesLayout/PicturesSelector";
    export default {
      name: "MyWork",
        components: {PicturesSelectorMasonry,PicturesSelector},
        data() {
        return {
          
            hover: false,
            category:0
            
        };
      },
        methods : {

            goBack : function (event) {

                this.$router.push( {path: "/work"})
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