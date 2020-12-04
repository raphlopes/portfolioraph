<template>
  <section class="covers">
  
  
    <div class="w-100 d-flex justify-content-center " >
    
      <a v-for="(index) in 3" :key="index" @click="category = index" class="px-4 text-white pb-3 pointer">
        category {{index}}
      </a>
    
    </div>
    
    
    <pictures-selector :category="category"></pictures-selector>
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
            category:-1
            
        };
      }
    }
</script>

<style scoped>
  
  .pointer{
    cursor: pointer;
  }
  
</style>