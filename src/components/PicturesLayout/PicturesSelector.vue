<template>
    <div>
        <div class="d-flex flex-column h-100 w-100 " v-if="!isFullyLoaded" :class="{'hidden' : isFullyLoaded}">
            <div class="d-flex justify-content-center text-center py-5">
                <loading style="color: white; height: 6rem;" class=""></loading>
            </div>
        </div>
        <div class="px-4 w-100 mansonry-with-flex" ref="selector"
             style="transform: matrix(1, 0, 0, 1, 0, 0)" :style="'height :'+maxHeight+'px'"
             :class="{'hidden' : !isFullyLoaded}">
            <div  v-for="(pic) in selectedPictures" :key="pic.id" >
                <picture-item ref="selectorItem"
                              :imgWidth="imgWidth" @loaded="isLoad"
                              :pic="pic" @selectCategory="$emit('selectCategory',pic.category)"
                              :key="category">
                </picture-item>
            </div>
        </div>
    </div>
</template>

<script>
  import PictureItem from "./PictureItem";
  import Loading from "@/assets/icon/loading.svg";

  import { homePictures } from "@/utils/imageConstants";

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
            },
            pictures : {
                default : homePictures,
            }
        },
        components: {
            PictureItem,
            Loading
        },
        data : function (){
          
            return {
                cols: 2,
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