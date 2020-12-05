<template>

  <main class="page projets-page">
    <section class="portfolio-block project-no-images">
      <div class="container">

        <div class="heading">
          <h2>Shops</h2>
        </div>

        <div class="row">

          <div class="col-md-6 col-lg-4">
            <div class="tuile-shop project-card-no-image">
              <h3>InPrint</h3>
              <h4>You can shop my prints on InPrint here</h4><a class="btn btn-outline-primary btn-sm" role="button" href="#" target="_blank">Shop</a>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="tuile-shop project-card-no-image">
              <h3>DarkRoom</h3>
              <h4>You can shop my prints on DarkRoom here</h4><a class="btn btn-outline-primary btn-sm" role="button" href="https://lopesraphael.darkroom.tech/" target="_blank">Shop</a>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="tuile-shop project-card-no-image">
              <h3>Society6</h3>
              <h4>You can shop my prints on Society6 here</h4><a class="btn btn-outline-primary btn-sm" role="button" href="#" target="_blank">Shop</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>

</template>

<script>
export default {
name: "Shop"
}
</script>

<style scoped>

.tuile-shop{
  background-color: whitesmoke;
  border-radius: 5%;
}

</style>