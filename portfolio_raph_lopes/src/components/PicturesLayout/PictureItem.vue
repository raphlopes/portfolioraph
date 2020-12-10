<template>
  <div class=" position-absolute"  :style="'width : '+imgWidth +'%;top:'+top+';left:'+left" style="padding: 0 10px">
    
    <div class="bg-white details-on-hover pointer" @mousemove="pic.hover = true" @mouseleave="pic.hover = false" style="transform: matrix(1, 0, 0, 1, 0, 0)">
      <img class="img-fluid image w-100" ref="picture" :src="pic.picture" :id="pic.id" >
      <div v-if="pic.hover" class="position-absolute w-100 h-100 d-flex flex-column justify-content-center text-center top-0" @click="$emit('selectCategory', pic.category)">
    
        <h1 class="textcover">{{pic.textOnHover}}</h1>
  
      </div>
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
            },
            imgWidth : {
                type: Number,
                default : 100
    }
        },
        data(){
          
            return {
                landscape : false,
                top : 0,
                left : 0,
                clientHeight: 0
            }
        },
        
        methods : {
            checkload() {
                this.$emit('loaded',this.pic);
            }
        },
        mounted() {
            console.log("item")

            this.$nextTick(()=>{
                if(this.$refs.picture){
                    this.$refs.picture.addEventListener('load', this.checkload)
                }
            })
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