<template>
  <section class="covers">
    <div class="d-flex d-wrap px-4 w-100" >
      <div class="col-md-6 col-lg-4 item img-covers " v-for="(pic,index) in pictures" :key="index">
        <div class="h-100 w-100 bg-white details-on-hover pointer" @mousemove="pic.hover = true" @mouseleave="pic.hover = false">
          <img class="img-fluid image w-100 h-100 " :src="pic.picture" >
          <div v-if="pic.hover" class="position-absolute w-100 h-100 d-flex flex-column justify-content-center text-center top-0">
          
            <h1 class="">{{pic.textOnHover}}</h1>
            
          </div>
        </div>
      </div>
    </div>
  
  </section>

</template>

<script>

  import Picture1 from "@/assets/imgcover/japan.jpg"
  import Picture2 from "@/assets/imgcover/greece.jpg"
  import Picture3 from "@/assets/imgcover/nights.jpg"
  
    export default {
      name: "PicturesTest",
      data() {
        return {
          
            hover: false,
            pictures : [
                {
                    picture : Picture1,
                    textOnHover : "Japon",
                    hover : false
                },
                {
                    picture : Picture2,
                    textOnHover : "Grece",
                    hover : false
                },
                {
                    picture : Picture3,
                    textOnHover : "Nuit",
                    hover : false
                },
            ]
        };
      },
      methods: {
        actionHover: function () {
          if(this.hover == true) {
            console.log('test hover');
          }
        }
      }
    }
</script>

<style scoped>

  .img-covers{
    border: lightgrey;
  }
  .covers {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 2.5%;
    padding-top: 2.5%;
    padding-left: 1%;
    padding-right: 1%;
  }
  
  .details-on-hover:hover img{
    /*filter: grayscale(70%);*/
    opacity: 0.5;
  }
  
  .top-0{
    top : 0;
  }
  
  .pointer{
    cursor: pointer;
  }

</style>