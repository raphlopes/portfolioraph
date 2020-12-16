<template>
  
  <nav class="navbar navbar-dark navbar-expand-lg fixed-top portfolio-navbar navgradient px-0 px-lg-5"
       @mouseover="hover = true" @mouseleave="hover = false" :style="navbar">
    <div class="d-flex col-12 col-lg-2 justify-content-between " ref="navbar">
      <router-link class="navbar-brand logo" to="/">Raph-folio</router-link>
      
      <button class="navbar-toggler hamburger hamburger--collapse py-0"
              @click="togglerHamburger" :class="{'is-active': isActive}">
        <span class="sr-only">Toggle navigation</span>
        <span class="hamburger-box d-flex d-lg-none flex-column justify-content-center">
            <span class="hamburger-inner"></span>
          </span>
      </button>
    
    </div>
    <div class="collapse navbar-collapse d-lg-flex w-100 h-100" id="navbarNav" :style="navbarCustom" >
      <transition name="fade-nav" >
      
        <div v-if="isActiveReal" class="h-100 w-100 d-lg-flex">
          <ul class="nav navbar-nav w-100 flex-lg-row flex-column justify-content-center"   >
            <li class="nav-item" @click="closeNavBar">
              <router-link id="accueil" class="nav-link" to="/">Accueil</router-link>
            </li>
            <li class="nav-item" @click="closeNavBar">
              <router-link class="nav-link"  to="/about">About me</router-link>
            </li>
            <li class="nav-item" @click="closeNavBar">
              <router-link class="nav-link" to="/work">My Work</router-link>
            </li>
            <li class="nav-item" @click="closeNavBar">
              <router-link class="nav-link"  to="/shop">Shop</router-link>
            </li>
            <li class="nav-item" @click="closeNavBar">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <!-- <li class="nav-item" @click="closeNavBar"><a class="nav-link" href="hire-me.html">Hire me</a></li> -->
  
          </ul>
  
          <div class="social-icons d-flex justify-content-lg-end justify-content-center col-lg-2 col-12" :style="'height :' + (!this.isActive && this.isActiveReal? 'unset':'20%')">
            <a href="https://instagram.com/raph_lop" target="_blank" class="px-2 my-lg-auto">
      
              <instagramr-icon></instagramr-icon>
            </a>
           <!-- <a href="https://twitter.com/Nefaaarx" target="_blank" class="px-2 my-lg-auto  ">
              <twitter-icon></twitter-icon>
            </a> -->
            <a href="mailto:lopesraphael94@gmail.com" class="px-2 my-lg-auto  ">
              <mail-icon></mail-icon>
    
            </a>
          </div>
        </div>
      
      
      </transition>
    </div>
  </nav>

</template>

<script>
    //import TwitterIcon from "@/assets/icon/twitter.svg"
    import MailIcon from "@/assets/icon/mail.svg"
    import InstagramrIcon from "@/assets/icon/instagram.svg"
    
    // Then we set the value in the --vh custom property to the root of the document
    export default {
        name: "Navbar",
        data: function () {
            return {
                scrollPosition: 0,
                hover: false,
                isActive: false,
                isMounted : false,
                windowWidth : 0,
                windowHeight : 0
            }
        },
        components: {

           // TwitterIcon,
            InstagramrIcon,
            MailIcon
        },
        methods: {

            closeNavBar: function () {
                this.isActive = false
            },

            togglerHamburger: function () {
                this.isActive = !this.isActive;
            },

            handleScroll() {
                this.scrollPosition = window.scrollY;
            },


        },
        computed: {

            navbar: function () {

                return {
                    "opacity": ((this.scrollPosition === 0 || this.hover) ? "1" : "0"),
                }

            },
            navbarCustom : function(){
            
                return{
                    height : (this.isActive && this.isActiveReal? (this.windowHeight+this.$refs.navbar.clientHeight)+"px": (!this.isActive && this.isActiveReal? "100%":"0vh"))+"!important",
                    display: "block",
                    "padding-bottom" : (this.isMounted && this.isActiveReal && this.isActive?this.$refs.navbar.clientHeight:0)+"px",
                    "font-size": (!this.isActive && this.isActiveReal? "large":"x-large")
                }
            },
            isActiveReal : {

                get(){
                    if(this.windowWidth>992){
                        return true;
                    }else{
                        return this.isActive;
                    }
                },
                set(newvalue){
                    this.windowWidth = value;
                }
                
                
            }


        },
        mounted() {
            this.isMounted = true;
            this.windowWidth = window.innerWidth;

            this.windowHeight= window.innerHeight;
            this.isActive = false;
            window.addEventListener('resize', () => {
                this.windowWidth = window.innerWidth
                this.windowHeight= window.innerHeight
            })
        },
        created: function () {
            window.addEventListener('scroll', this.handleScroll);
            
        }
    }

</script>

<style scoped lang="scss">
  
  
  .navgradient {
    background: #353535;
    width: 100%;
  }
  
  .navbar-brand {
    color: #aaa;
  }
  
  .navbar-brand:hover {
    color: white;
  }
  
  .navbar-dark .navbar-toggler {
    color: #fff;
    border-color: hsla(0, 0%, 100%, .1);
    border: transparent;
    outline: none;
  }
  
  .navbar-collapse {
    transition: height 0.5s ease-in-out;
  }
  
  .hamburger {
    
    padding-right: 3%
    
  }

  .portfolio-navbar .navbar-nav .nav-link a{
    font-weight: normal;
    font-size: 120%;
  }
  
  .navbar-collapse {
    
    .navbar-nav {
      height: 80%;
    }
    
    .social-icons {
      svg {
        height: 25px;
        width: 25px;
        margin: 0 14px;
      }
    }
  }
  
  .portfolio-navbar {
    transition: opacity 0.5s ease;
  }
  
  .social-icons {
    
    svg {
      height: 24px;
      width: 24px;
    }
  }

  .social-icons li{
    list-style-type: none;
  }

  .social-icons a{
    border: unset;
    background-color: unset;
  }
  
  .social-icons a:hover {
    color: #fff;
  }
  
  .nav-item:hover {
    a {
      color: white !important;
    }
  }
  
  .nav-link {
    color: #aaa !important;
  }
  .nav-link.router-link-exact-active {
    color: white !important;
  }
  
  
  .nav-item {
    color: #ffffff;
    transition: color 0.5s ease-in-out;
    padding: 0 !important;
  }
  
  ul {
    list-style-type: none;
  }

  /* Les animations d'entrée (« enter ») et de sortie (« leave »)  */
  /* peuvent utiliser différentes fonctions de durée et de temps.  */
  .fade-nav-enter-active {
    transition: all 0.3s 0.3s ease-in;
  }
  .fade-nav-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-nav-enter, .fade-nav-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
  }

</style>