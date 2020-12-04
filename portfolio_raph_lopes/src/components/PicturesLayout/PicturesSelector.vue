<template>
  <div class="d-flex flex-wrap px-4 w-100" :key="category">
    
      <div :class="classList"  v-for="(pic) in selectedPictures" :key="pic">
    
    
        <picture-item :pic="pic"></picture-item>
  
  
      </div>
    
    
  </div>
</template>

<script>
  import PictureItem from "./PictureItem";

  import Picture1 from "@/assets/imgcover/japan.jpg"
  import Picture2 from "@/assets/imgcover/greece.jpg"
  import Picture3 from "@/assets/imgcover/nights.jpg"
  import Nature1 from "@/assets/img/nature/image1.jpg"
  import Nature2 from "@/assets/img/nature/image2.jpg"
  import Nature3 from "@/assets/img/nature/image3.jpg"
  import Nature4 from "@/assets/img/nature/image4.jpg"
  import Nature5 from "@/assets/img/nature/image5.jpg"

  export default {
        name: "PicturesSelector",
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
            PictureItem
        },
        data : function (){
          
            return {
                pictures : [
                    {
                        picture : Picture1,
                        textOnHover : "Japon",
                        hover : false,
                        link : "",
                        category : 1
                    },
                    {
                        picture : Picture2,
                        textOnHover : "Grece",
                        hover : false,

                        category : 2
                    },
                    {
                        picture : Picture3,
                        textOnHover : "Nuit",
                        hover : false,

                        category : 3
                    },
                    {
                        picture : Nature1,
                        textOnHover : "yes",
                        hover : false,

                        category : 1
                    },
                    {
                        picture : Nature2,
                        textOnHover : "raph",
                        hover : false,

                        category : 3
                    },
                    {
                        picture : Nature3,
                        textOnHover : "test",
                        hover : false,

                        category : 1
                    },
                    {
                        picture : Nature4,
                        textOnHover : "je suis la",
                        hover : false,

                        category : 2
                    },
                    {
                        picture : Nature5,
                        textOnHover : "random",
                        hover : false,

                        category : 2
                    },
                ],
            }
        },
        computed : {
            
            selectedPictures : function () {

                let pictures = this.pictures;
                if(this.category != -1 ){
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
        
        }
    }
</script>

<style scoped>
  
  .textcover{
    font-family: sans-serif;
  }
  .img-covers{
    border: lightgrey;
  }
 
  

</style>