<template>
  <div class=" " :key="category">
    
    <vue-masonry-gallery :imgsArr="selectedPictures"  class=" " hrefKey="src" :height="height" :maxCols="3" ref="gallery" :imgWidth="500" :target="'modal'" ></vue-masonry-gallery>
    
  </div>
</template>

<script>
  //https://github.com/parys-github/vue-masonry-gallery#3-props
  import PictureItem from "./PictureItem";

  export default {
        name: "PicturesSelectorMasonery",
        props : {
          
            classList : {
                type : String,
                default : "col-md-6 col-lg-4 item img-covers pb-4"
            },
            category : {
                type: Number,
                default : -1 // -1 = aucune category
            },
            random : {
                type : Boolean,
                default : false
            },
            maxPictureNumber: {
                type : Number,
                default : -1 // -1 = pas de limte
            }
        },
        components: {
            PictureItem,
            VueMasonryGallery
            
        },
        data : function (){
          
            return {
                height:"80vh",
                width:100,
                backdoor:0,
            }
        },
      
        computed : {
            calculatedHeigh: function (){
              
                this.backdoor;
                if(this.$refs.gallery){
                    return
                }else{
                    return 0
                }
            },
            selectedPictures : function () {

                let pictures = this.pictures;
                if(this.category == 0){
                    pictures = pictures.filter(pic => pic.main == true)
                }
                else if(this.category != -1 ){
                    pictures = pictures.filter(pic => pic.category == this.category)
                }
                
                let maxPictureNumber = (this.maxPictureNumber !== -1?this.maxPictureNumber:pictures.length);
                
                let selectedPicture = [];
                if(this.random){

                    for (let i = 0; i < maxPictureNumber; i++) {
                    
                        let random = Math.floor(Math.random() * pictures.length);
                        selectedPicture.push(pictures[random]);
                        pictures.splice(random,1)
                    }
                    
                }else{
                    if(pictures.length>maxPictureNumber){
                        pictures.length = maxPictureNumber;
                    }
                    selectedPicture = pictures;
                }
                console.log()
                return selectedPicture;
            }
        
        },
      mounted() {
            this.backdoor++;
      }
  }
</script>

<style>
  
  .textcover{
    font-family: sans-serif;
  }
  .img-covers{
    border: lightgrey;
  }
  
  .ball-beat{
    display: none!important;
  }
  
  .vue-masonry-gallery-scroll{
    overflow-y: unset!important;
    overflow-x: unset!important;
  }
  

</style>