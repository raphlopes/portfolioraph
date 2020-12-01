<template>
  <section class="covers">
    <div class="d-flex d-wrap px-4 w-100" >
      <div class="col-md-6 col-lg-4 item img-covers">
        <a>
          <img class="img-fluid image w-100 h-100" src="../assets/imgcover/japan.jpg">
        </a>
      </div>
      <div class="col-md-6 col-lg-4 item img-covers">
        <a>
          <img class="img-fluid image w-100 h-100" src="../assets/imgcover/greece.jpg">
        </a>
      </div>
      <div class="col-md-6 col-lg-4 item img-covers">
        <a>
          <img class="img-fluid image w-100 h-100" src="../assets/imgcover/nights.jpg">
        </a>
      </div>
    </div>
  
  </section>

</template>

<script>

    export default {
        name: "PicturesTest",
        components: {}
    }
</script>

<style scoped>

  .img-covers{
    border: lightgrey;
  }
  .covers {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 2.5%;
    padding-top: 2.5%;
    padding-left: 1%;
    padding-right: 1%;
  }
  

</style>