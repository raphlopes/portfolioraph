<template>
  <section class="covers">
  
  
    <div class="w-100 d-flex justify-content-center" >

      <a  @click="category = 0" class="px-4 text-white pb-3 pointer ft1" v-if="category!=0">
       Back
      </a>
    
    </div>
    
    
    <pictures-selector :category="category" @selectCategory="category=$event"></pictures-selector>

  </section>

</template>

<script>

  
    import PicturesSelector from "../components/PicturesLayout/PicturesSelector";
    export default {
      name: "MyWork",
        components: {PicturesSelector},
        data() {
        return {
          
            hover: false,
            category:0
            
        };
      }
    }
</script>

<style scoped>

  .ft1{
    padding-top: 3%;
    padding-bottom: 3%;
    font-family: vcsm;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;

  }
  .pointer{
    cursor: pointer;
  }
  
</style>