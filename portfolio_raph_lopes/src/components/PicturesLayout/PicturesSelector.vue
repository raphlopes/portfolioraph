<template>
  <div class=" px-4 w-100 mansonry-with-flex" ref="selector" style="transform: matrix(1, 0, 0, 1, 0, 0)" :style="'height :'+maxHeight+'px'" :class="{'hidden' : !isFullyLoaded}">
    
      <div  v-for="(pic) in selectedPictures" :key="pic.id" >
    
    
        <picture-item ref="selectorItem" :imgWidth="imgWidth" @loaded="isLoad" :pic="pic" @selectCategory="$emit('selectCategory',pic.category)" :key="category"></picture-item>
  
  
      </div>
    
  </div>
</template>

<script>
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
                        picture : PicJapanCover,
                        textOnHover : "Japan",

                        hover : false,
                        link : "",
                        category : 1,
                        main: true
                    },
                    {
                        picture : PicGreeceCover,
                        textOnHover : "Greece",
                        hover : false,

                        category : 2,
                        main : true
                    },
                    {
                        picture : PicPortugalCover,
                        textOnHover : "Portugal",
                        hover : false,

                        category : 3,
                        main : true
                    },
                    {
                        picture : PicJapan1,
                        textOnHover : "Tokyo Anime Street",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        picture : PicJapan2,
                        textOnHover : "Kabukichō by Night (歌舞伎町)",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        picture : PicJapan3,
                        textOnHover : "Purple Reflection",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        picture : PicJapan4,
                        textOnHover : "",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        picture : PicJapan5,
                        textOnHover : "Fushimi Inari-Taisha",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        picture : PicJapan6,
                        textOnHover : "SAGANO CHIKURIN",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                      picture : PicJapan7,
                      textOnHover : "Osaka after Dark",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                        picture : PicJapan36,
                        textOnHover : "Kyoto in Anime",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        picture : PicJapan8,
                        textOnHover : "Tokyo in Anime",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        picture : PicJapan9,
                        textOnHover : "Ginkaku-ji in Anime",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        picture : PicJapan10,
                        textOnHover : "Ginkaku-ji in Anime",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        picture : PicJapan11,
                        textOnHover : "Kyoto Sunset",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        picture : PicJapan12,
                        textOnHover : "Dotonbori sunset",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        picture : PicJapan13,
                        textOnHover : "Dotonbori Purple",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        picture : PicJapan14,
                        textOnHover : "Osaka Never sleep",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        picture : PicJapan15,
                        textOnHover : "Gaming Arcade in Osaka",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        picture : PicJapan16,
                        textOnHover : "Shinseikai in Anime",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        picture : PicJapan17,
                        textOnHover : "Miyajima leaves",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                      picture : PicJapan18,
                      textOnHover : "Shibuya by night",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                      picture : PicJapan19,
                      textOnHover : "Ema",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                      picture : PicJapan20,
                      textOnHover : "Tokyo Tower",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                        picture : PicJapan21,
                        textOnHover : "Kyoto Subway Entrance",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                      picture : PicJapan22,
                      textOnHover : "Kyoto Temple in Anime",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                        picture : PicJapan23,
                        textOnHover : "Kyoto Anime City",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                        picture : PicJapan24,
                        textOnHover : "Shinjuku Sunset in Anime",
                        hover : false,

                        category : 1,
                        main : false
                    },

                    {
                      picture : PicJapan25,
                      textOnHover : "Memory Lane",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                      picture : PicJapan26,
                      textOnHover : "Late Night Subways",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                      picture : PicJapan27,
                      textOnHover : "Tokyo After Dark",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                      picture : PicJapan28,
                      textOnHover : "Golden Gai After Dark",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                      picture : PicJapan29,
                      textOnHover : "Tokyo on a Rainy Day",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                      picture : PicJapan30,
                      textOnHover : "Shinjuku Station",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                      picture : PicJapan31,
                      textOnHover : "Purple Sunset",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                        picture : PicJapan32,
                        textOnHover : "Last evening",
                        hover : false,

                        category : 1,
                        main : false
                    },
                    {
                      picture : PicJapan33,
                      textOnHover : "Sunset in Akihabara",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                      picture : PicJapan34,
                      textOnHover : "Vaporwave Kyoto",
                      hover : false,

                      category : 1,
                      main : false
                    },
                    {
                      picture : PicJapan35,
                      textOnHover : "Autumn in Kyoto",
                      hover : false,

                      category : 1,
                      main : false
                    },

                  {
                      picture : PicPortugal1,
                      textOnHover : "Pastel City",
                      hover : false,

                      category : 3,
                      main : false
                    },
                    {
                      picture : PicPortugal2,
                      textOnHover : "White walls",
                      hover : false,

                      category : 3,
                      main : false
                    },
                    {
                        picture : PicPortugal3,
                        textOnHover : "White walls",
                        hover : false,

                        category : 3,
                        main : false
                    },
                    {
                        picture : PicPortugal4,
                        textOnHover : "Nazare from Above",
                        hover : false,

                        category : 3,
                        main : false
                    },
                    {
                        picture : PicPortugal5,
                        textOnHover : "Across the Sea",
                        hover : false,

                        category : 3,
                        main : false
                    },
                  {
                    picture : PicPortugal6,
                    textOnHover : "Sunset along the Sea",
                    hover : false,

                    category : 3,
                    main : false
                  },
                    {
                      picture : PicPortugal7,
                      textOnHover : "Orange Mood",
                      hover : false,

                      category : 3,
                      main : false
                    },
                    {
                      picture : PicPortugal8,
                      textOnHover : "Pastel Door",
                      hover : false,

                      category : 3,
                      main : false
                    },
                    {
                        picture : PicPortugal9,
                        textOnHover : "Jellyfish",
                        hover : false,

                        category : 3,
                        main : false
                    },
                    {
                        picture : PicPortugal10,
                        textOnHover : "Jellyfish",
                        hover : false,

                        category : 3,
                        main : false
                    },
                    {
                        picture : PicPortugal11,
                        textOnHover : "Pastel Alley",
                        hover : false,

                        category : 3,
                        main : false
                    },
                    {
                      picture : PicPortugal12,
                      textOnHover : "Pastel Window",
                      hover : false,

                      category : 3,
                      main : false
                    },
                    {
                        picture : PicPortugal13,
                        textOnHover : "Purple Flowers",
                        hover : false,

                        category : 3,
                        main : false
                    },
                    {
                      picture : PicPortugal14,
                      textOnHover : "Purple Flowers",
                      hover : false,

                      category : 3,
                      main : false
                    },
                    {
                    picture : PicPortugal15,
                    textOnHover : "Lisbon view",
                    hover : false,

                    category : 3,
                    main : false
                  },
                    {
                    picture : PicPortugal16,
                    textOnHover : "Tramway",
                    hover : false,

                    category : 3,
                    main : false
                  },
                    {
                      picture : PicPortugal17,
                      textOnHover : "Small Coffee",
                      hover : false,

                      category : 3,
                      main : false
                    },
                  {
                    picture : PicPortugal18,
                    textOnHover : "The Sun is setting",
                    hover : false,

                    category : 3,
                    main : false
                  },
                  {
                    picture : PicGreece1,
                    textOnHover : "First Night",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    picture : PicGreece2,
                    textOnHover : "Purple Sky over Santorini",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    picture : PicGreece3,
                    textOnHover : "House like a painting",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    picture : PicGreece4,
                    textOnHover : "Parthenon during dusk",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    picture : PicGreece5,
                    textOnHover : "Athens after dark",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    picture : PicGreece6,
                    textOnHover : "Ela na sou po",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    picture : PicGreece7,
                    textOnHover : "Athens road in Pastel",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    picture : PicGreece8,
                    textOnHover : "Sea at Cap Sounion",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    picture : PicGreece9,
                    textOnHover : "Poseidon Temple",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    picture : PicGreece10,
                    textOnHover : "Red Sunset",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    picture : PicGreece11,
                    textOnHover : "Flashing lights",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    picture : PicGreece12,
                    textOnHover : "Athens after dark",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    picture : PicGreece13,
                    textOnHover : "First day in Santorini",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    picture : PicGreece14,
                    textOnHover : "Όλα Καλά",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    picture : PicGreece15,
                    textOnHover : "Friendship",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    picture : PicGreece16,
                    textOnHover : "Fira view",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    picture : PicGreece17,
                    textOnHover : "Along the sea",
                    hover : false,

                    category : 2,
                    main : false
                  },
                  {
                    picture : PicGreece18,
                    textOnHover : "Sunset over the rocks",
                    hover : false,

                    category : 2,
                    main : false
                  },


                ],
                cols: 3,
                maxHeight : 0,
                backdoor : 1,
                imgWidth : 100/3,
                isFullyLoaded: false
            }
        },
        computed : {
            
            selectedPictures : function () {

                let pictures = this.pictures.map((elem,id) => {
                    elem.id = id;
                    return elem;
                });
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
      watch : {
        
            category : function () {

                console.log("aa")
                this.handleResize();
            }
      },
      
      methods : {
          handleResize : function () {
              if(this.$refs.selectorItem){

                  let selectorWidth = this.$refs.selector ? this.$refs.selector.clientWidth: window.innerWidth;
                  let cols = 3;
                  if (selectorWidth < 540){

                      cols = 1;
                  }else if(selectorWidth <960){
                      cols = 2;
                  }

                  this.cols = cols;
                  this.imgWidth = 100/cols;
                  this.background++;
                  console.log("mounted slector")
                  let lastTop = [];
                  for (let j = 0; j < this.cols; j++) {
                      lastTop.push(0);

                  }

                  for (let i = 0; i < this.$refs.selectorItem.length; i++) {

                      let item = this.$refs.selectorItem[i];

                      let col = lastTop.indexOf(Math.min.apply(null,lastTop));


                      item.top = lastTop[col]+"px";
                      item.left = ((col*100)/cols)+"%";
                      
                      
                      
                      let naturalHeight = item.$refs.picture.naturalHeight;
                      let fictiveWidth = ((selectorWidth *this.imgWidth)/100)-20;
                      let naturalWidth = item.$refs.picture.naturalWidth;
                      
                      let calculatedHeigth = Math.round(naturalHeight*fictiveWidth/naturalWidth);
                      
                     
                    
                      lastTop[col] = lastTop[col]+calculatedHeigth+20;


                  }
                  
                  this.maxHeight = Math.max.apply(null,lastTop);

              }
          },
          isLoad: function (pic) {

              this.pictures[pic.id].loaded = true;
              
              
              this.isFullyLoaded = this.selectedPictures.every( (val) => val.loaded === true);
              if(this.isFullyLoaded){
                  this.handleResize();
              }
          }
          
            
        
            
      },
      destroyed() {
          window.removeEventListener('resize', this.handleResize);
      },
      mounted() {

          window.addEventListener('resize', this.handleResize);
            this.handleResize();
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
  
  .hidden{
    visibility: hidden;
  }

  .list-move {
    transition: transform 1s;
  }
  .list-item {
  }
  .list-enter-active {
    transition: all 1s;
  }
  .list-enter /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  
  


  .zoomIn {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
  }


</style>