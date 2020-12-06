<template>
  <div class="h-100 w-100 bg-white details-on-hover pointer" @mousemove="pic.hover = true" @mouseleave="pic.hover = false">
    <img class="img-fluid image w-100 h-100" ref="picture" :src="pic.picture" >
    <div v-if="pic.hover" class="position-absolute w-100 h-100 d-flex flex-column justify-content-center text-center top-0" @click="$emit('selectCategory', pic.category)">
      
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
        },
        data(){
          
            return {
                landscape : false
            }
        },
        mounted() {
            console.log("a")
            if(this.$refs.picture){
                
                let ref = this.$refs.picture;
                
            }
            
        }
    }
</script>

<style scoped>

  .textcover{
    justify-content: center;
    font-size: 120%;
  }

  .details-on-hover:hover img{
    /*filter: grayscale(70%);*/
    opacity: 0.1;
    transition: 0.5s;
  }
  
  .top-0{
    top : 0;
  }
  
  .pointer{
    cursor: pointer;
  }

</style>