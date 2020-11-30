<template>
  <section>
    <div class="row px-4" >
      <div class="col-md-6 col-lg-4 item ">
        <a class="">
          <img class="img-fluid image w-100 h-100" src="../assets/imgcover/japan.jpg">
        </a>
      </div>
      <div class="col-md-6 col-lg-4 item">
        <a>
          <img class="img-fluid image w-100 h-100" src="../assets/imgcover/greece.jpg">
        </a>
      </div>
      <div class="col-md-6 col-lg-4 item" @mouseover="test">
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
        components: {},
        methods : {
            
            test : function () {

                console.log("yes");
            }
        }
    }
</script>

<style scoped>
  
  .project-covers {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 0px;
    padding-top: 0px;
  }
  

</style>