

<template>

  <main class="page contact-page">
    <section class="portfolio-block contact">
      <div class="container">
        <div class="heading">
          <h2>Contact me</h2>
        </div>
        <form method="POST" action="https://formspree.io/f/xgepnweq">
          <div class="form-group"><label for="name">Votre nom</label><input class="form-control item" type="text" name="name" id="name"></div>
          <div class="form-group"><label for="subject">Sujet</label><input class="form-control item" type="text" name="subject" id="subject"></div>
          <div class="form-group"><label for="email">Email</label><input class="form-control item" type="email" name="_replyto" id="email"></div>
          <div class="form-group"><label for="message">Message</label><textarea class="form-control item" id="message" name="message"></textarea></div>
          <div class="form-group"><button @click="sendEmail" id="sendEmail" class="btn btn-primary btn-block btn-lg" type="submit">Envoi</button></div>
        </form>
      </div>
    </section>
  </main>
</template>



<script>
import axios from "axios";

  export default {
    name: "Contact",
    methods: {
      sendEmail: function () {
        var message = "";
        $("#sendMessage").on("click", function () {
          message = $("#contactform").serialize();
          $.ajax({
            url: "//formspree.io/dynamicrealities@gmail.com",
            method: "POST",
            data: {message: message},
            dataType: "json"
          });
          alert('Thanks for the email, we\'ll be in touch promptly.');
          return false;
        });

      }
    },
    mounted(){
      axios.post("https://formspree.io/f/xgepnweq",{} ) //https://github.com/axios/axios
    }
  }



</script>

<style scoped>

</style>