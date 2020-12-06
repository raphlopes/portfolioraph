<template>
  <div class=" " :key="category">
    
    <vue-masonry-gallery :imgsArr="selectedPictures"  class=" " hrefKey="src" :height="height" :maxCols="3" ref="gallery" :imgWidth="500" :target="'modal'" ></vue-masonry-gallery>
    
  </div>
</template>

<script>
  //https://github.com/parys-github/vue-masonry-gallery#3-props
  import PictureItem from "./PictureItem";

  import PicJapanCover from "@/assets/imgcover/japan.jpg"
  import PicGreeceCover from "@/assets/imgcover/greece.jpg"
  import PicPortugalCover from "@/assets/imgcover/portugal.jpg"

  import PicJapan1 from "@/assets/img/japan/PicJapan (1).jpg"
  import PicJapan2 from "@/assets/img/japan/PicJapan (2).jpg"
  import PicJapan3 from "@/assets/img/japan/PicJapan (3).jpg"
  import PicJapan4 from "@/assets/img/japan/PicJapan (4).jpg"
  import PicJapan5 from "@/assets/img/japan/PicJapan (5).jpg"
  import PicJapan6 from "@/assets/img/japan/PicJapan (6).jpg"
  import PicJapan7 from "@/assets/img/japan/PicJapan (7).jpg"
  import PicJapan8 from "@/assets/img/japan/PicJapan (8).jpg"
  import PicJapan9 from "@/assets/img/japan/PicJapan (9).jpg"
  import PicJapan10 from "@/assets/img/japan/PicJapan (10).jpg"
  import PicJapan11 from "@/assets/img/japan/PicJapan (11).jpg"
  import PicJapan12 from "@/assets/img/japan/PicJapan (12).jpg"
  import PicJapan13 from "@/assets/img/japan/PicJapan (13).jpg"
  import PicJapan14 from "@/assets/img/japan/PicJapan (14).jpg"
  import PicJapan15 from "@/assets/img/japan/PicJapan (15).jpg"
  import PicJapan16 from "@/assets/img/japan/PicJapan (16).jpg"
  import PicJapan17 from "@/assets/img/japan/PicJapan (17).jpg"
  import PicJapan18 from "@/assets/img/japan/PicJapan (18).jpg"
  import PicJapan19 from "@/assets/img/japan/PicJapan (19).jpg"
  import PicJapan20 from "@/assets/img/japan/PicJapan (20).jpg"
  import PicJapan21 from "@/assets/img/japan/PicJapan (21).jpg"
  import PicJapan22 from "@/assets/img/japan/PicJapan (22).jpg"
  import PicJapan23 from "@/assets/img/japan/PicJapan (23).jpg"
  import PicJapan24 from "@/assets/img/japan/PicJapan (24).jpg"
  import PicJapan25 from "@/assets/img/japan/PicJapan (25).jpg"
  import PicJapan26 from "@/assets/img/japan/PicJapan (26).jpg"
  import PicJapan27 from "@/assets/img/japan/PicJapan (27).jpg"
  import PicJapan28 from "@/assets/img/japan/PicJapan (28).jpg"
  import PicJapan29 from "@/assets/img/japan/PicJapan (29).jpg"
  import PicJapan30 from "@/assets/img/japan/PicJapan (30).jpg"
  import PicJapan31 from "@/assets/img/japan/PicJapan (31).jpg"
  import PicJapan32 from "@/assets/img/japan/PicJapan (32).jpg"
  import PicJapan33 from "@/assets/img/japan/PicJapan (33).jpg"
  import PicJapan34 from "@/assets/img/japan/PicJapan (34).jpg"
  import PicJapan35 from "@/assets/img/japan/PicJapan (35).jpg"
  import PicJapan36 from "@/assets/img/japan/PicJapan (36).jpg"

  import PicPortugal1 from "@/assets/img/portugal/PicPortugal (1).jpg"
  import PicPortugal2 from "@/assets/img/portugal/PicPortugal (2).jpg"
  import PicPortugal3 from "@/assets/img/portugal/PicPortugal (3).jpg"
  import PicPortugal4 from "@/assets/img/portugal/PicPortugal (4).jpg"
  import PicPortugal5 from "@/assets/img/portugal/PicPortugal (5).jpg"
  import PicPortugal6 from "@/assets/img/portugal/PicPortugal (6).jpg"
  import PicPortugal7 from "@/assets/img/portugal/PicPortugal (7).jpg"
  import PicPortugal8 from "@/assets/img/portugal/PicPortugal (8).jpg"
  import PicPortugal9 from "@/assets/img/portugal/PicPortugal (9).jpg"
  import PicPortugal10 from "@/assets/img/portugal/PicPortugal (10).jpg"
  import PicPortugal11 from "@/assets/img/portugal/PicPortugal (11).jpg"
  import PicPortugal12 from "@/assets/img/portugal/PicPortugal (12).jpg"
  import PicPortugal13 from "@/assets/img/portugal/PicPortugal (13).jpg"
  import PicPortugal14 from "@/assets/img/portugal/PicPortugal (14).jpg"
  import PicPortugal15 from "@/assets/img/portugal/PicPortugal (15).jpg"
  import PicPortugal16 from "@/assets/img/portugal/PicPortugal (16).jpg"
  import PicPortugal17 from "@/assets/img/portugal/PicPortugal (17).jpg"
  import PicPortugal18 from "@/assets/img/portugal/PicPortugal (18).jpg"

  import PicGreece1 from "@/assets/img/greece/PicGreece (1).jpg"
  import PicGreece2 from "@/assets/img/greece/PicGreece (2).jpg"
  import PicGreece3 from "@/assets/img/greece/PicGreece (3).jpg"
  import PicGreece4 from "@/assets/img/greece/PicGreece (4).jpg"
  import PicGreece5 from "@/assets/img/greece/PicGreece (5).jpg"
  import PicGreece6 from "@/assets/img/greece/PicGreece (6).jpg"
  import PicGreece7 from "@/assets/img/greece/PicGreece (7).jpg"
  import PicGreece8 from "@/assets/img/greece/PicGreece (8).jpg"
  import PicGreece9 from "@/assets/img/greece/PicGreece (9).jpg"
  import PicGreece10 from "@/assets/img/greece/PicGreece (10).jpg"
  import PicGreece11 from "@/assets/img/greece/PicGreece (11).jpg"
  import PicGreece12 from "@/assets/img/greece/PicGreece (12).jpg"
  import PicGreece13 from "@/assets/img/greece/PicGreece (13).jpg"
  import PicGreece14 from "@/assets/img/greece/PicGreece (14).jpg"
  import PicGreece15 from "@/assets/img/greece/PicGreece (15).jpg"
  import PicGreece16 from "@/assets/img/greece/PicGreece (16).jpg"
  import PicGreece17 from "@/assets/img/greece/PicGreece (17).jpg"
  import PicGreece18 from "@/assets/img/greece/PicGreece (18).jpg"


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
                pictures : [
                    {
                        src : PicJapanCover,
                        textOnHover : "Japan",

                        hover : false,
                        link : "",
                        category : 1,
                        main: true
                    },
                    {
                        src : PicGreeceCover,
                        textOnHover : "Greece",
                        hover : false,

                        category : 2,
                        main : true
                    },
                    {
                        src : PicPortugalCover,
                        textOnHover : "Portugal",
                        hover : false,

                        category : 3,
                        main : true
                    },
                    {
                        src : PicJapan1,
                        textOnHover : "Tokyo Anime Street",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan2,
                        textOnHover : "Kabukichō by Night (歌舞伎町)",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan3,
                        textOnHover : "Purple Reflection",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan4,
                        textOnHover : "",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan5,
                        textOnHover : "Fushimi Inari-Taisha",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan6,
                        textOnHover : "SAGANO CHIKURIN",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan7,
                        textOnHover : "Kyoto in Anime",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan8,
                        textOnHover : "Tokyo in Anime",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan9,
                        textOnHover : "Ginkaku-ji in Anime",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan10,
                        textOnHover : "Ginkaku-ji in Anime",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan11,
                        textOnHover : "Kyoto Sunset",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan12,
                        textOnHover : "Dotonbori sunset",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan13,
                        textOnHover : "Dotonbori Purple",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan14,
                        textOnHover : "Osaka Never sleep",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan15,
                        textOnHover : "Gaming Arcade in Osaka",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan16,
                        textOnHover : "Shinseikai in Anime",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan17,
                        textOnHover : "Miyajima leaves",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                      src : PicJapan18,
                      textOnHover : "Shibuya by night",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                      src : PicJapan19,
                      textOnHover : "Ema",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                      src : PicJapan20,
                      textOnHover : "Tokyo Tower",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                        src : PicJapan21,
                        textOnHover : "Kyoto Subway Entrance",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                      src : PicJapan22,
                      textOnHover : "Kyoto Temple in Anime",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                        src : PicJapan23,
                        textOnHover : "Kyoto Anime City",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan24,
                        textOnHover : "Shinjuku Sunset in Anime",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan25,
                        textOnHover : "Memory Lane",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                      src : PicJapan26,
                      textOnHover : "Memory Lane",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                        src : PicJapan27,
                        textOnHover : "Kabukichō Lights",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        src : PicJapan28,
                        textOnHover : "Godzilla Road",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                      src : PicJapan29,
                      textOnHover : "Tokyo on a Rainy Day",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                      src : PicJapan30,
                      textOnHover : "Shinjuku Station",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                      src : PicJapan31,
                      textOnHover : "Purple Sunset",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                        src : PicJapan32,
                        textOnHover : "Last evening",
                        hover : false,

                        category : 1,
                        main : false
                    },

                    {
                      src : PicJapan33,
                      textOnHover : "Sunset in Akihabara",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                      src : PicJapan34,
                      textOnHover : "Vaporwave Kyoto",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                      src : PicJapan35,
                      textOnHover : "Autumn in Kyoto",
                      hover : false,

                      category : 1,
                      main : false
                    },

                    {
                      src : PicPortugal1,
                      textOnHover : "Pastel City",
                      hover : false,

                      category : 3,
                      main : false
                    },
                    {
                      src : PicPortugal2,
                      textOnHover : "White walls",
                      hover : false,

                      category : 3,
                      main : false
                    },
                    {
                        src : PicPortugal3,
                        textOnHover : "White walls",
                        hover : false,

                        category : 3,
                        main : false
                    },
                    {
                        src : PicPortugal4,
                        textOnHover : "Nazare from Above",
                        hover : false,

                        category : 3,
                        main : false
                    },
                    {
                        src : PicPortugal5,
                        textOnHover : "Across the Sea",
                        hover : false,

                        category : 3,
                        main : false
                    },
                    {
                        src : PicPortugal6,
                        textOnHover : "The Sun is setting",
                        hover : false,

                        category : 3,
                        main : false
                    },
                    {
                      src : PicPortugal7,
                      textOnHover : "Orange Mood",
                      hover : false,

                      category : 3,
                      main : false
                    },
                    {
                      src : PicPortugal8,
                      textOnHover : "Pastel Door",
                      hover : false,

                      category : 3,
                      main : false
                    },
                    {
                        src : PicPortugal9,
                        textOnHover : "Jellyfish",
                        hover : false,

                        category : 3,
                        main : false
                    },
                    {
                        src : PicPortugal10,
                        textOnHover : "Jellyfish",
                        hover : false,

                        category : 3,
                        main : false
                    },
                    {
                        src : PicPortugal11,
                        textOnHover : "Pastel Alley",
                        hover : false,

                        category : 3,
                        main : false
                    },
                    {
                      src : PicPortugal12,
                      textOnHover : "Pastel Window",
                      hover : false,

                      category : 3,
                      main : false
                    },
                    {
                        src : PicPortugal13,
                        textOnHover : "Purple Flowers",
                        hover : false,

                        category : 3,
                        main : false
                    },
                    {
                      src : PicPortugal14,
                      textOnHover : "Purple Flowers",
                      hover : false,

                      category : 3,
                      main : false
                    },
                    {
                    src : PicPortugal15,
                    textOnHover : "Lisbon view",
                    hover : false,

                    category : 3,
                    main : false
                  },
                    {
                    src : PicPortugal16,
                    textOnHover : "Tramway",
                    hover : false,

                    category : 3,
                    main : false
                  },
                    {
                      src : PicPortugal17,
                      textOnHover : "Small Coffee",
                      hover : false,

                      category : 3,
                      main : false
                    },
                    {
                    src : PicPortugal18,
                    textOnHover : "Sunset along the Sea",
                    hover : false,

                    category : 3,
                    main : false
                  },
                  {
                    src : PicGreece1,
                    textOnHover : "First Night",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    src : PicGreece2,
                    textOnHover : "Purple Sky over Santorini",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    src : PicGreece3,
                    textOnHover : "House like a painting",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    src : PicGreece4,
                    textOnHover : "Parthenon during dusk",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    src : PicGreece5,
                    textOnHover : "Athens after dark",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    src : PicGreece6,
                    textOnHover : "Ela na sou po",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    src : PicGreece7,
                    textOnHover : "Athens road in Pastel",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    src : PicGreece8,
                    textOnHover : "Sea at Cap Sounion",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    src : PicGreece9,
                    textOnHover : "Poseidon Temple",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    src : PicGreece10,
                    textOnHover : "Red Sunset",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    src : PicGreece11,
                    textOnHover : "Flashing lights",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    src : PicGreece12,
                    textOnHover : "Athens after dark",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    src : PicGreece13,
                    textOnHover : "First day in Santorini",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    src : PicGreece14,
                    textOnHover : "Όλα Καλά",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    src : PicGreece15,
                    textOnHover : "Friendship",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    src : PicGreece16,
                    textOnHover : "Fira view",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    src : PicGreece17,
                    textOnHover : "Along the sea",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    src : PicGreece18,
                    textOnHover : "Sunset over the rocks",
                    hover : false,

                    category : 2,
                    main : false
                  },


                ],
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
  
  
 
  

</style>