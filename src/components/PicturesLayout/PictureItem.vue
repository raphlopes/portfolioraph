<template>
  <div class="position-absolute"  :style="'width: ' + imgWidth + '%; top: ' + top + '; left: ' + left + '; ' + (isMobile && pic.shoppingItem ? 'padding: 0 50px;' : 'padding: 0 30px;')">
    
    <div class="bg-white details-on-hover" :class="{'pointer':pic.category || pic.shoppingItem}"
     @mousemove="pic.hover = true" @mouseleave="pic.hover = false" style="transform: matrix(1, 0, 0, 1, 0, 0)">
        <img :class="{'py-4 px-3': pic.shoppingItem && pic.shoppingItem.type=='postalCard'}"
           class="img-fluid image w-100" ref="picture" :src="pic.picture" :id="pic.id" >
        <div v-if="pic.hover"
           class="position-absolute w-100 h-100 d-flex flex-column justify-content-center text-center top-0"
           @click="$emit('selectCategory', pic.category)">

        <h1 class="textcover">{{pic.textOnHover}}</h1>

          <h2 class="textcover">
                <span v-if="pic.shoppingItem && pic.shoppingItem.type" class="textcover">
                   {{ showPrice(pic.shoppingItem.type) }}
                </span>
          </h2>

          <a v-if="pic.shoppingItem" data-v-0746cac8="" @click="addToCart(pic)"
             role="button" class="btn btn-outline-dark mx-auto mt-3">
              Add to cart
          </a>

        </div>
    </div>

    <div v-if="isMobile && pic.shoppingItem" class="text-white pt-3">
      <h5 class="">{{pic.textOnHover}} - {{(pic.shoppingItem && pic.shoppingItem.type?showPrice(pic.shoppingItem.type):"")}} </h5>

      <a v-if="pic.shoppingItem" data-v-0746cac8="" @click="addToCart(pic)"
         role="button" class="btn btn-outline-light mb-5 mx-auto mt-2">
          Add to cart
      </a>
    </div>
  </div>
</template>

<script>
    import {formatAmount} from "@/utils/utils"
    import {mapActions} from "vuex";

    export default {
        name: "Picture",
        computed: {
        } ,
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
                clientHeight: 0,
                isMobile : window.innerWidth<1025
            }
        },
        
        methods : {
            showPrice(type)
            {
                const priceData = this.$store.getters.getPriceByType(type);
                return formatAmount(priceData.amount,priceData.currency);
            },
            checkload() {
                this.$emit('loaded',this.pic);
            },
            ...mapActions(['addToCart']),
            addToCart(item) {
                let itemToAdd = item.shoppingItem
                itemToAdd.textToShow = item.textOnHover
                this.$store.dispatch('addToCart', itemToAdd);
                console.log("Item added to cart:", itemToAdd);
            },
        },
        mounted() {
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