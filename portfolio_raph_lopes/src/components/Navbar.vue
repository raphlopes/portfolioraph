<template>
  <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
    <div class="container"><a class="navbar-brand logo" href="#">Brand</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navbarNav"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse"
           id="navbarNav">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item"><router-link class="nav-link active" to="/">Home</router-link> </li>
          <li class="nav-item"><router-link class="nav-link active" to="/about">About</router-link> </li>
          <li class="nav-item"><a class="nav-link" href="cv.html">CV</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
          <li class="nav-item"><a class="nav-link" href="hire-me.html">Hire me</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>