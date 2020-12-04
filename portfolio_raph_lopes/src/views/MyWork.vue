<template>
  <section class="covers">
  
  
    <div class="w-100 d-flex justify-content-center " >
    
      <a  @click="category = 0" class="px-4 text-white pb-3 pointer" v-if="category!=0">
       retour
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
  
  .pointer{
    cursor: pointer;
  }
  
</style>