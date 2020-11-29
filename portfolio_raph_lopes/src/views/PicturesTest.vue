<template>
  <div class="mt-5 container d-flex flex-wrap">
  
    <div class="w-100 col-12 col-md-6 col-lg-4" v-for="n in 9" :key="n">
      
      <img :src="require('@/assets/img/nature/image'+n+'.jpg')" class="w-100 mb-4">
    </div>
  
  
  </div>
</template>

<script>
  
    export default {
        name: "PicturesTest",
        components : {
        
        }
    }
</script>

<style scoped>

</style>