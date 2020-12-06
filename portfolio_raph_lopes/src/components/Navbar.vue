<template>
  
  <nav class="navbar navbar-dark navbar-expand-lg fixed-top portfolio-navbar navgradient px-0 px-lg-5"
       @mouseover="hover = true" @mouseleave="hover = false" :style="navbar">
    <div class="d-flex col-12 col-lg-2 justify-content-between " ref="navbar">
      <router-link class="navbar-brand logo" to="/">Raph-folio</router-link>
      
      <button data-toggle="collapse" class="navbar-toggler hamburger hamburger--collapse py-0" data-target="#navbarNav"
              @click="togglerHamburger" :class="{'is-active': isActive}">
        <span class="sr-only">Toggle navigation</span>
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
      </button>
    
    </div>
    <div class="collapse navbar-collapse d-lg-flex w-100 " id="navbarNav" :style="customPadding">
      <ul class="nav navbar-nav w-100 justify-content-lg-center d-flex flex-lg-row flex-column justify-content-around"  >
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
      
      <div class="social-icons d-flex justify-content-lg-end justify-content-center col-lg-2 col-12 ">
        <a href="https://instagram.com/raph_lop" target="_blank" class="px-2 my-auto ">
          
          <instagramr-icon></instagramr-icon>
        </a>
        <a href="https://twitter.com/Nefaaarx" target="_blank" class="px-2 my-auto ">
          <twitter-icon></twitter-icon>
        </a>
        <a href="mailto:lopesraphael94@gmail.com" class="px-2 my-auto ">
          <mail-icon></mail-icon>
        
        </a>
      </div>
    
    </div>
  </nav>

</template>

<script>
    import TwitterIcon from "@/assets/icon/twitter.svg"
    import MailIcon from "@/assets/icon/mail.svg"
    import InstagramrIcon from "@/assets/icon/instagram.svg"

    export default {
        name: "Navbar",
        data: function () {
            return {
                scrollPosition: 0,
                hover: false,
                isActive: false,
                isMounted : false
            }
        },
        components: {

            TwitterIcon,
            InstagramrIcon,
            MailIcon
        },
        methods: {

            closeNavBar: function () {
                $('#navbarNav').collapse('hide');
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
            customPadding: function () {

                
                return { "padding-bottom" : (this.isMounted && this.isActive?this.$refs.navbar.clientHeight:0)+"px"}
                
            }


        },
        mounted() {
            this.isMounted = true;
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
    height: 0vh !important;
    transition: height 0.5s ease-in-out;
  }
  
  .hamburger {
    
    padding-right: 3%
    
  }
  
  .navbar-collapse.show {
    height: 100vh !important;
    
    font-size: x-large;
    
    .navbar-nav {
      height: 90%;
    }
    
    .social-icons {
      height: 10%;
      
      svg {
        height: 30px;
        width: 30px;
        margin: 0 14px;
      }
    }
  }
  
  .navbar-collapse.collapsing {
    padding: 0!important;
    font-size: x-large;
    
    .navbar-nav {
      height: 90%;
    }
    
    .social-icons {
      height: 10%;
      
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

</style>