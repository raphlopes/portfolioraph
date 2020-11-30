<template>
  <section>
  <div class="row no-gutters">
    <div class="col-md-6 col-lg-4">
    <a>
      <img class="img-fluid image" src="../assets/imgcover/japan.jpg">
    </a>
    </div>
    <div class="col-md-6 col-lg-4 item zoom-on-hover">
    <a>
      <img class="img-fluid image" src="../assets/imgcover/greece.jpg">
    </a>
    </div>
      <div class="col-md-6 col-lg-4 item zoom-on-hover">
    <a>
      <img class="img-fluid image" src="../assets/imgcover/nights.jpg">
    </a>
      </div>
  </div>

  </section>

</template>

<script>
  
    export default {
        name: "PicturesTest",
        components : {
        
        }
    }
</script>

<style scoped>

.project-covers{
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 0px;
  padding-top: 0px;
}

</style>