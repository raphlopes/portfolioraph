<template>
  <div id="app">
    <navbar></navbar>
    <div class="mt-5 pt-5">
      <transition name="fade-custom" mode="out-in">
  
        <router-view/>
      </transition>
    </div>

    <section class="back-top" v-if="showBackToTopSection">
      <a href="#"> <span class="arrow">↑</span> <span class="preserve-whitespace">Back to Top</span> </a>
    </section>

    <transition name="fade">
      <div v-if="cartCount>0" class="p-2 cart-top-fixed js-back-to-top cart-top-fixed-with-panel"
         data-hover-hint="backToTop"
         data-hover-hint-placement="top-start" href="#">
          <cart-icon @click="openCart" >
          </cart-icon>
      </div>
    </transition>
    <transition name="fade">
          <a class="back-top-fixed js-back-to-top back-top-fixed-with-panel" data-hover-hint="backToTop" data-hover-hint-placement="top-start" href="#"
             v-if="!scrolledToBottom && !scrolledToTop">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;" xml:space="preserve" class="icon icon-back-top">
              <g>
                <path d="M13.8,1.3L21.6,9c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.1,0.3,0.1,0.4s0,0.3-0.1,0.4c-0.1,0.1-0.1,0.3-0.3,0.4
                  c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.3,0.1-0.4,0.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.1-0.3-0.2-0.4-0.3L14.2,5l0,19.1
                  c0,0.2-0.1,0.3-0.1,0.5c0,0.1-0.1,0.3-0.3,0.4c-0.1,0.1-0.2,0.2-0.4,0.3c-0.1,0.1-0.3,0.1-0.5,0.1c-0.1,0-0.3,0-0.4-0.1
                  c-0.1-0.1-0.3-0.1-0.4-0.3c-0.1-0.1-0.2-0.2-0.3-0.4c-0.1-0.1-0.1-0.3-0.1-0.5l0-19.1l-5.7,5.7C6,10.8,5.8,10.9,5.7,11
                  c-0.1,0.1-0.3,0.1-0.4,0.1c-0.2,0-0.3,0-0.4-0.1c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1-0.1-0.1-0.2-0.2-0.4C4.1,10.2,4,10.1,4.1,9.9
                  c0-0.1,0-0.3,0.1-0.4c0-0.1,0.1-0.3,0.3-0.4l7.7-7.8c0.1,0,0.2-0.1,0.2-0.1c0,0,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.2-0.1
                  c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1C13.7,1.2,13.8,1.2,13.8,1.3z"></path>
              </g>
              </svg>
          </a>
        </transition>

    <cart v-if="cartOpen" @close="cartOpen = false"></cart>
      <admin-modal v-if="modalAccess" @close="modalAccess = false"></admin-modal>
    <footerbar v-if="$route.name!='Admin'" @open-modal-admin="modalAccess = true"></footerbar>

  </div>
</template>


<script>
  
    import Navbar from "./components/Navbar";
    import footerbar from "./components/footerbar";
    import CartIcon from "./assets/icon/cart.svg";
    import Cart from "./views/Cart";
    import AdminModal from "@/components/AdminModal.vue";
    export default {
        name : 'app',
        components: {
            AdminModal ,
            Cart,
            CartIcon,
            Navbar,
            footerbar
        },
        watch: {
            '$route' (to) {
                document.title = to.meta.title || 'yala'
            }
        },
      data: function() {
        return{
            scrolledToBottom: false,
            scrolledToTop: true,
            cartOpen: false,
            modalAccess : false,
        }
      },
    computed : {
        cartCount(){
            return this.$store.getters.cartItems.length
        },
        showBackToTopSection() {
            // Define an array of routes where you want to show the back-top section
            const allowedRoutes = ['Home'];
            const allowedRoutesMobile = ['Home', 'Shop', 'ShopDisplay'];

            if(window.innerWidth > 768 && allowedRoutes.includes(this.$route.name)) {
              return true;
            }
            else if(allowedRoutesMobile.includes(this.$route.name) && window.innerWidth < 768) {
              return true;
            }
            else {
              return false;
            }
        }
    },
      methods: {
        openCart(){
            this.cartOpen = true
        },
        scroll () {
          window.onscroll = () => {
            let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
            let topOfWindow = window.scrollY == 0

            if (bottomOfWindow) {
              this.scrolledToBottom = true
              //la sinon ici je fais disparaitre le <a>
            }
            else{
              this.scrolledToBottom = false
            }

            if (topOfWindow) {
              this.scrolledToTop = true
              //la sinon ici je fais disparaitre le <a>
            }
            else{
              this.scrolledToTop = false
            }
          }
        }
      },
      mounted () {
            this.$store.dispatch('loadPrices');
            this.scroll()
      }
    }
</script>

<style lang="scss">

.fade-custom-enter-active,
.fade-custom-leave-active {
    transition: opacity 0.3s;
}

.fade-custom-enter,
.fade-custom-leave-to
    /* .fade-leave-active in <2.1.8 */

{
    opacity: 0;
}

html {
    scroll-behavior: smooth;
}



@font-face{font-family:vcsm;src:url(https://use.typekit.net/af/cebe0e/00000000000000003b9b3060/27/l?subset_id=2&fvd=n3&v=3) format("woff2"),url(https://use.typekit.net/af/cebe0e/00000000000000003b9b3060/27/d?subset_id=2&fvd=n3&v=3) format("woff"),url(https://use.typekit.net/af/cebe0e/00000000000000003b9b3060/27/a?subset_id=2&fvd=n3&v=3) format("opentype");font-weight:300;font-style:normal;font-display:auto;}@font-face{font-family:vcsm;src:url(https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/l?subset_id=2&fvd=n4&v=3) format("woff2"),url(https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/d?subset_id=2&fvd=n4&v=3) format("woff"),url(https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/a?subset_id=2&fvd=n4&v=3) format("opentype");font-weight:400;font-style:normal;font-display:auto;}@font-face{font-family:vcsm;src:url(https://use.typekit.net/af/576d53/00000000000000003b9b3066/27/l?subset_id=2&fvd=n6&v=3) format("woff2"),url(https://use.typekit.net/af/576d53/00000000000000003b9b3066/27/d?subset_id=2&fvd=n6&v=3) format("woff"),url(https://use.typekit.net/af/576d53/00000000000000003b9b3066/27/a?subset_id=2&fvd=n6&v=3) format("opentype");font-weight:600;font-style:normal;font-display:auto;}@font-face{font-family:vcsm;src:url(https://use.typekit.net/af/949f99/00000000000000003b9b3068/27/l?subset_id=2&fvd=n7&v=3) format("woff2"),url(https://use.typekit.net/af/949f99/00000000000000003b9b3068/27/d?subset_id=2&fvd=n7&v=3) format("woff"),url(https://use.typekit.net/af/949f99/00000000000000003b9b3068/27/a?subset_id=2&fvd=n7&v=3) format("opentype");font-weight:700;font-style:normal;font-display:auto;}@font-face{font-family:xscx;src:url(https://use.typekit.net/af/df3b56/0000000000000000000134f6/27/l?subset_id=2&fvd=n4&v=3) format("woff2"),url(https://use.typekit.net/af/df3b56/0000000000000000000134f6/27/d?subset_id=2&fvd=n4&v=3) format("woff"),url(https://use.typekit.net/af/df3b56/0000000000000000000134f6/27/a?subset_id=2&fvd=n4&v=3) format("opentype");font-weight:400;font-style:normal;font-display:auto;}

.preserve-whitespace {
    white-space: pre-wrap;
}

.link-transition a {
    transition: background 0.2s ease, color 0.2s ease;
    transition-property: background, color;
    transition-duration: 0.2s, 0.2s;
    transition-timing-function: ease, ease;
    transition-delay: 0s, 0s;
}

.cart-top {
    clear: both;
    display: block;
    padding-bottom: 60px;
    padding-top: 60px;
    text-align: center;
}

.cart-top-fixed {
    position: fixed;
    z-index: 3;
    background: rgba(255, 255, 255, 1);
    border-radius: 60px;
    display: block;
    bottom: 80%;
    height: 60px;
    width: 60px;
    right: 2.5%;
}

.back-top {
    clear: both;
    display: block;
    padding-bottom: 3rem;
    padding-top: 3rem;
    text-align: center;
}

.back-top-fixed {
    position: fixed;
    z-index: 3;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 60px;
    display: block;
    bottom: 4%;
    height: 60px;
    width: 60px;
    right: 2.5%;
}

.icon-back-top {
    fill: #222222;
    height: 24px;
    opacity: 1;
    position: absolute;
    width: 24px;
}

.icon-back-top {
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
}

.back-top a {
    color: #888;
    font-family: vcsm;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
}

.back-top .arrow {
    display: inline-block;
    margin-right: 10px;
}

body {
    background-color: #222222;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-family: vcsm;

}



#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}


</style>