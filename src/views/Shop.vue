<template>

  <main class="page projets-page">
    <section class="portfolio-block project-no-images">
      <div class="container">

        <div class="row">

          <div class=" tuile col-md-6 col-lg-4">
            <div class="tuile-shop project-card-no-image">
              <in-prnt></in-prnt>
              <h4>You can shop my prints on InPrint here</h4><a class="btn btn-outline-primary btn-sm shopping" role="button" href="https://inprnt.com/gallery/raph_lopes" target="_blank">Shop Now</a>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="tuile-shop project-card-no-image">
              <img class="fit-picture"
                   src="@/assets/icon/darkroom.png"
                   alt="darkroom">
              <h4>You can shop my prints on DarkRoom here</h4><a class="btn btn-outline-primary btn-sm shopping" role="button" href="https://lopesraphael.darkroom.tech/" target="_blank">Shop Now</a>
            </div>
          </div>
 <!--
          <div class="col-md-6 col-lg-4">
            <div class="tuile-shop project-card-no-image">
              <h3>Society6</h3>
              <h4>You can shop my prints on Society6 here</h4><a class="btn btn-outline-primary btn-sm" role="button" href="#" target="_blank">Shop</a>
            </div>
          </div>
  -->

        </div>
      </div>
    </section>
  </main>

</template>

<script>

import inPrnt from "@/assets/icon/inprnt.svg"

export default {
name: "Shop",

  components: {
    inPrnt,
  },
}
</script>

<style scoped lang="scss">

.shopping{
  background-color: white;
  color: grey;
  border-color: black;
  border-width: thin;
}


.tuile-shop{

  border-color: transparent;
  color: white;
  background-color: grey;
  border-radius: 5%;
  height: auto;

  svg {
  width: 45%;
    padding-bottom: 10%;
    color:black;
  }

  img {
    height: 65%;
    width: 65%;
    padding-bottom: 10%;
  }

}

</style>