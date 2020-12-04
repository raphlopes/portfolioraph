<template>
  <div class="h-100 w-100 bg-white details-on-hover pointer" @mousemove="pic.hover = true" @mouseleave="pic.hover = false">
    <img class="img-fluid image w-100 h-100 " :src="pic.picture" >
    <div v-if="pic.hover" class="position-absolute w-100 h-100 d-flex flex-column justify-content-center text-center top-0">
      
      <h1 class="textcover">{{pic.textOnHover}}</h1>
    
    </div>
  </div>
</template>

<script>
  
    export default {
        name: "Picture",
        props: {
            pic : {
                type : Object,
                required : true
            }
        }
    }
</script>

<style scoped>
  .details-on-hover:hover img{
    /*filter: grayscale(70%);*/
    opacity: 0.2;
  }
  
  .top-0{
    top : 0;
  }
  
  .pointer{
    cursor: pointer;
  }

</style>