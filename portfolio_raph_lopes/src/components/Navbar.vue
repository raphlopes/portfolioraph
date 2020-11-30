<template>
  <nav class="navbar navbar-dark navbar-expand-lg fixed-top portfolio-navbar gradient">
    <div class="container"><a class="navbar-brand logo" href="/">Raph-folio</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navbarNav"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse"
           id="navbarNav">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item" >
            <router-link id="Acceuil" class="nav-link active" @click="actionHover" @mousehover="actionHover"
                         @mouseleave="actionLeavehover()" to="/">Accueil</router-link>

          </li>
          <li class="nav-item"><router-link class="nav-link active" to="/about">A propos</router-link> </li>
          <li class="nav-item"><router-link class="nav-link active" to="/test">My Work</router-link> </li>
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
          }
        },
        methods : {
          actionHover : function(arg){
            this.color='black';
            console.log('test de couleur'+arg);

          },
          actionLeavehover(){
            this.color='white';
            console.log="test de leave couleur";
          }
        }
    }
</script>

<style scoped>

</style>