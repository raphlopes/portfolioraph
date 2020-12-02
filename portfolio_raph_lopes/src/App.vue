<template>
  <div id="app">
    <navbar></navbar>
    <div class="mt-5 pt-5">
      <router-view/>
    </div>

    <section back-top>
      <a href="#"> <span class="arrow">↑</span> <span class="preserve-whitespace">Back to Top</span> </a>
    </section>

    <footerbar></footerbar>
  </div>
</template>

<style lang="scss">

.back-top a {
  color: white;
}

.back-top .arrow {
  display: inline-block;
  margin-right: 10px;
}

body {
  background-color: #222222;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
<script>
  
    import Navbar from "./components/Navbar";
    import footerbar from "./components/footerbar";
    export default {
        components: {Navbar, footerbar},
        watch: {
            '$route' (to) {
                document.title = to.meta.title || 'yala'
            }
        },
    }
</script>