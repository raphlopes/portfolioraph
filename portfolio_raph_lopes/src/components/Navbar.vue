<template>
  <nav class="navbar navbar-dark navbar-expand-lg fixed-top portfolio-navbar navgradient" @mouseover="hover = true" @mouseleave="hover = false" :style="navbar">
    <div class="container"><a class="navbar-brand logo" href="/">Raph-folio</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navbarNav"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse"
           id="navbarNav">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item">
            <router-link id="Acceuil" class="nav-link active"

                          to="/">Accueil</router-link>

          </li>
          <li class="nav-item"><router-link class="nav-link active" to="/about">A propos</router-link> </li>
          <li class="nav-item"><router-link class="nav-link active" to="/work">My Work</router-link> </li>
          <li class="nav-item"><router-link class="nav-link active" to="/shop">Shop</router-link> </li>
          <li class="nav-item"><router-link class="nav-link active" to="/contact">Contact</router-link> </li>
          <!-- <li class="nav-item"><a class="nav-link" href="hire-me.html">Hire me</a></li> -->
        </ul>
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
              hover:false
          }
        },
        methods : {
          actionHover : function(){
            this.color='black';
            console.log('test de couleur');

          },
          actionLeavehover : function(){
            this.color='white';
            console.log="test de leave couleur";
          },
            handleScroll(){
                this.scrollPosition = window.scrollY;
            }
        },
        computed : {
            
            navbar : function () {

                  return {
                      "opacity" : ( (this.scrollPosition == 0 || this.hover)?"1":"0" ) ,
                  }
                
            }
            
            
        },
        created: function () {
            window.addEventListener('scroll', this.handleScroll);
        },
    }
</script>

<style scoped>

  .navgradient{
    background: #353535;
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

</style>