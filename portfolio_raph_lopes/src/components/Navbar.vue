<template>

  <nav class="navbar navbar-dark navbar-expand-lg fixed-top portfolio-navbar navgradient" @mouseover="hover = true" @mouseleave="hover = false" :style="navbar">
    <div class="container">
      <a class="navbar-brand logo" href="/">Raph-folio</a>

      <button data-toggle="collapse" class="navbar-toggler hamburger hamburger--collapse" data-target="#navbarNav" @click="togglerHamburger" :class="{'is-active': isActive}"   >
        <span class="sr-only">Toggle navigation</span>
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">

        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item" id="accueil1" @click="closeNavBar">
            <router-link id="accueil" class="nav-link active" to="/">Accueil</router-link>
          </li>
          <li class="nav-item" @click="closeNavBar"><router-link class="nav-link active" to="/about" >About me</router-link> </li>
          <li class="nav-item" @click="closeNavBar"><router-link class="nav-link active" to="/work">My Work</router-link> </li>
          <li class="nav-item" @click="closeNavBar"><router-link class="nav-link active" to="/shop">Shop</router-link> </li>
          <li class="nav-item" @click="closeNavBar"><router-link class="nav-link active" to="/contact">Contact</router-link> </li>
           <!-- <li class="nav-item" @click="closeNavBar"><a class="nav-link" href="hire-me.html">Hire me</a></li> -->

        </ul>

        <li class="social-icons">
          <a href="https://instagram.com/raph_lop" target="_blank">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 24" style="enable-background:new 0 0 30 24;" xml:space="preserve" class="icon">
                                <g>
                                  <path d="M15,5.4c2.1,0,2.4,0,3.2,0c0.8,0,1.2,0.2,1.5,0.3c0.4,0.1,0.6,0.3,0.9,0.6c0.3,0.3,0.5,0.5,0.6,0.9
                                    c0.1,0.3,0.2,0.7,0.3,1.5c0,0.8,0,1.1,0,3.2s0,2.4,0,3.2c0,0.8-0.2,1.2-0.3,1.5c-0.1,0.4-0.3,0.6-0.6,0.9c-0.3,0.3-0.5,0.5-0.9,0.6
                                    c-0.3,0.1-0.7,0.2-1.5,0.3c-0.8,0-1.1,0-3.2,0s-2.4,0-3.2,0c-0.8,0-1.2-0.2-1.5-0.3c-0.4-0.1-0.6-0.3-0.9-0.6
                                    c-0.3-0.3-0.5-0.5-0.6-0.9c-0.1-0.3-0.2-0.7-0.3-1.5c0-0.8,0-1.1,0-3.2s0-2.4,0-3.2c0-0.8,0.2-1.2,0.3-1.5c0.1-0.4,0.3-0.6,0.6-0.9
                                    c0.3-0.3,0.5-0.5,0.9-0.6c0.3-0.1,0.7-0.2,1.5-0.3C12.6,5.4,12.9,5.4,15,5.4 M15,4c-2.2,0-2.4,0-3.3,0c-0.9,0-1.4,0.2-1.9,0.4
                                    c-0.5,0.2-1,0.5-1.4,0.9C7.9,5.8,7.6,6.2,7.4,6.8C7.2,7.3,7.1,7.9,7,8.7C7,9.6,7,9.8,7,12s0,2.4,0,3.3c0,0.9,0.2,1.4,0.4,1.9
                                    c0.2,0.5,0.5,1,0.9,1.4c0.4,0.4,0.9,0.7,1.4,0.9c0.5,0.2,1.1,0.3,1.9,0.4c0.9,0,1.1,0,3.3,0s2.4,0,3.3,0c0.9,0,1.4-0.2,1.9-0.4
                                    c0.5-0.2,1-0.5,1.4-0.9c0.4-0.4,0.7-0.9,0.9-1.4c0.2-0.5,0.3-1.1,0.4-1.9c0-0.9,0-1.1,0-3.3s0-2.4,0-3.3c0-0.9-0.2-1.4-0.4-1.9

                                    c-0.2-0.5-0.5-1-0.9-1.4c-0.4-0.4-0.9-0.7-1.4-0.9c-0.5-0.2-1.1-0.3-1.9-0.4C17.4,4,17.2,4,15,4L15,4L15,4z"></path>
                                  <path  d="M15,7.9c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1S17.3,7.9,15,7.9L15,7.9z M15,14.7c-1.5,0-2.7-1.2-2.7-2.7
                                    c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7C17.7,13.5,16.5,14.7,15,14.7L15,14.7z"></path>
                                  <path  d="M20.2,7.7c0,0.5-0.4,1-1,1s-1-0.4-1-1s0.4-1,1-1S20.2,7.2,20.2,7.7L20.2,7.7z"></path>
                                </g>
                                </svg>
          </a>
          <a href="https://twitter.com/Nefaaarx" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 30 24" xml:space="preserve" class="icon"><path  d="M24.71 5.89C24 6.2 23.2 6.4 22.4 6.53c0.82-0.5 1.45-1.29 1.75-2.23c-0.77 0.46-1.62 0.8-2.53 1 C20.92 4.5 19.9 4 18.7 4c-2.2 0-3.99 1.81-3.99 4.04c0 0.3 0 0.6 0.1 0.92C11.54 8.8 8.6 7.2 6.6 4.7 C6.3 5.3 6.1 6 6.1 6.77c0 1.4 0.7 2.6 1.8 3.36c-0.65-0.02-1.27-0.2-1.81-0.51c0 0 0 0 0 0.1 c0 2 1.4 3.6 3.2 3.96c-0.34 0.09-0.69 0.14-1.05 0.14c-0.26 0-0.51-0.03-0.75-0.07c0.51 1.6 2 2.8 3.7 2.8 c-1.36 1.08-3.08 1.73-4.95 1.73c-0.32 0-0.64-0.02-0.95-0.06C7.05 19.3 9.1 20 11.4 20c7.33 0 11.34-6.15 11.34-11.49 c0-0.18 0-0.35-0.01-0.52C23.5 7.4 24.2 6.7 24.7 5.89z"></path></svg>
          </a>
          <a href="mailto:lopesraphael94@gmail.com">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 24" style="enable-background:new 0 0 30 24;" xml:space="preserve" class="icon">
                                  <g>
                                    <path  d="M15,13L7.1,7.1c0-0.5,0.4-1,1-1h13.8c0.5,0,1,0.4,1,1L15,13z M15,14.8l7.9-5.9v8.1c0,0.5-0.4,1-1,1H8.1c-0.5,0-1-0.4-1-1 V8.8L15,14.8z"></path>
                                  </g>
                                </svg>
          </a>
        </li>

      </div>
    </div>
  </nav>

</template>

<script>
    export default {
        name: "Navbar",
        data: function(){
          return {
            compeurhover: 0,
              color: "white",
              scrollPosition : 0,
              hover:false,
            isActive: false
          }
        },
        methods : {

          closeNavBar : function (){
            $('#navbarNav').collapse('hide');
          },

          togglerHamburger : function (){
            this.isActive = !this.isActive;
          },

          actionHover : function(){
            this.color='white';
            console.log('test de couleur');

          },
          actionLeavehover : function(){
            this.color='grey';
            console.log="test de leave couleur";
          },

          handleScroll(){
             this.scrollPosition = window.scrollY;
          },


        },
        computed : {
            
            navbar : function () {

                  return {
                      "opacity" : ( (this.scrollPosition === 0 || this.hover)?"1":"0" ) ,
                  }
                
            }
            
            
        },
        created: function () {
            window.addEventListener('scroll', this.handleScroll);
        }
    }

</script>

<style scoped lang="scss">

  .navgradient{
    background: #353535;
    width: 100%;
  }

  .navbar-dark .navbar-toggler {
    color: #fff;
    border-color: hsla(0,0%,100%,.1);
    border: transparent;
    outline:none;
  }

  .navbar-collapse {
    height: 0vh !important;
    transition: height 0.5s ease-in-out;
  }

  .hamburger{

  padding-right: 3%

  }
  .navbar-collapse.show {
    height: 100vh !important
  }

  .portfolio-navbar{
    transition: opacity 0.5s ease;
  }

  .social-icons svg{
    fill : rgb(170 170 170)
  }

  .social-icons a{
    border: unset;
    background-color: unset;
  }
  
  .nav-item:hover{
    a{
      color: white!important;
    }

    .nav-item{
      color: #ffffff;
      transition: color 0.5s ease-in-out;
    }
  ul{
      list-style-type: none;
  }

  }

</style>