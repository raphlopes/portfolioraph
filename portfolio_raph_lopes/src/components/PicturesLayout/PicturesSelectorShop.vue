<template>
  <div class=" px-4 w-100 mansonry-with-flex" ref="selector" style="transform: matrix(1, 0, 0, 1, 0, 0)" :style="'height :'+maxHeight+'px'" :class="{'hidden' : !isFullyLoaded}">

    <div  v-for="(pic) in selectedPictures" :key="pic.id" >

      <picture-item class="p-5 postalCard" ref="selectorItem" :imgWidth="imgWidth" @loaded="isLoad" :pic="pic" @selectCategory="$emit('selectCategory',pic.category)" :key="category"></picture-item>

    </div>

  </div>
</template>

<script>
import PictureItem from "./PictureItem";

import PicJapanCover from "@/assets/imgcover/japan.jpg"
import PicGreeceCover from "@/assets/imgcover/greece.jpg"

import PicJapan2 from "@/assets/img/japan/PicJapan (2).jpg"
import PicJapan3 from "@/assets/img/japan/PicJapan (3).jpg"
import PicJapan4 from "@/assets/img/japan/PicJapan (4).jpg"
import PicJapan7 from "@/assets/img/japan/PicJapan (7).jpg"
import PicJapan9 from "@/assets/img/japan/PicJapan (9).jpg"
import PicJapan14 from "@/assets/img/japan/PicJapan (14).jpg"
import PicJapan16 from "@/assets/img/japan/PicJapan (16).jpg"
import PicJapan25 from "@/assets/img/japan/PicJapan (25).jpg"
import PicJapan26 from "@/assets/img/japan/PicJapan (26).jpg"
import PicJapan27 from "@/assets/img/japan/PicJapan (27).jpg"
import PicJapan28 from "@/assets/img/japan/PicJapan (28).jpg"

import PicJapan34 from "@/assets/img/japan/PicJapan (34).jpg"


import PicGreece14 from "@/assets/img/greece/PicGreece (14).jpg"
import PicGreece18 from "@/assets/img/greece/PicGreece (18).jpg"

export default {
  name: "PicturesSelectorShop",
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
          link : "https://lopesraphael.darkroom.tech/products/598433",
          category : 1,
          main: true
        },
        {
          picture : PicGreeceCover,
          textOnHover : "Greece",
          hover : false,
          link : "https://lopesraphael.darkroom.tech/products/598423",
          category : 2,
          main : true
        },
        {
          picture : PicJapan2,
          textOnHover : "Kabukichō by Night (歌舞伎町)",
          hover : false,
          link : "https://lopesraphael.darkroom.tech/products/598428",
          category : 1,
          main : false
        },
        {
          picture : PicJapan3,
          textOnHover : "Purple Reflection",
          hover : false,
          link : "https://lopesraphael.darkroom.tech/products/792537",
          category : 1,
          main : false
        },
        {
          picture : PicJapan4,
          textOnHover : "",
          hover : false,
          link : "https://lopesraphael.darkroom.tech/products/792537",
          category : 1,
          main : false
        },
        {
          picture : PicJapan7,
          textOnHover : "Osaka after Dark",
          hover : false,
          link : "https://lopesraphael.darkroom.tech/products/600273",
          category : 1,
          main : false
        },
        {
          picture : PicJapan9,
          textOnHover : "Ginkaku-ji in Anime",
          hover : false,
          link : "https://lopesraphael.darkroom.tech/products/598429",
          category : 1,
          main : false
        },
        {
          picture : PicJapan14,
          textOnHover : "Osaka Never sleep",
          hover : false,
          link : "https://lopesraphael.darkroom.tech/products/598427",
          category : 1,
          main : false
        },
        {
          picture : PicJapan16,
          textOnHover : "Shinseikai in Anime",
          hover : false,
          link : "https://lopesraphael.darkroom.tech/products/598425",
          category : 1,
          main : false
        },
        {
          picture : PicJapan25,
          textOnHover : "Memory Lane",
          hover : false,
          link : "https://lopesraphael.darkroom.tech/products/820990",
          category : 1,
          main : false
        },
        {
          picture : PicJapan26,
          textOnHover : "Late Night Subways",
          hover : false,
          link : "https://lopesraphael.darkroom.tech/products/820991",
          category : 1,
          main : false
        },
        {
          picture : PicJapan27,
          textOnHover : "Tokyo After Dark",
          hover : false,
          link : "https://lopesraphael.darkroom.tech/products/814756",
          category : 1,
          main : false
        },
        {
          picture : PicJapan28,
          textOnHover : "Golden Gai After Dark",
          hover : false,
          link : "https://lopesraphael.darkroom.tech/products/820989",
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
          picture : PicGreece14,
          textOnHover : "Όλα Καλά",
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

.postalCard{
  padding: 5rem;
  background-color: white;
  outline: 2px solid grey;
}



.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}


</style>