

<template>

  <main class="page contact-page">
    <section class="portfolio-block contact">
      <div class="container">
        <div class="heading">
          <h2>Contact me</h2>
        </div>
        <form method="get" action="formulaire-send-email.php" >
          <div class="form-group"><label for="name">Votre nom</label><input class="form-control item" type="text" id="name"></div>
          <div class="form-group"><label for="subject">Sujet</label><input class="form-control item" type="text" id="subject"></div>
          <div class="form-group"><label for="email">Email</label><input class="form-control item" type="email" id="email"></div>
          <div class="form-group"><label for="message">Message</label><textarea class="form-control item" id="message"></textarea></div>
          <div class="form-group"><button onclick="sendEmail()" class="btn btn-primary btn-block btn-lg" type="submit">Envoi</button></div>
        </form>
      </div>
    </section>
  </main>
</template>

<script src="https://smtpjs.com/v3/smtp.js"></script>
<script>
  export default {
    name: "Contact",
    methods : {
      sendEmail: function () {
        Email.send({
          Host: "smtp.gmail.com",
          Username: "gohubb2@gmail.com",
          Password: "AsErftg,XOLJ74",
          To: 'lopesraphy94@gmail.com',
          From: "gohubb2@gmail.com",
          Subject: "test d'email",
          Body: "wesh bonjour test d'email",
        }).then(
            message => alert("mail sent successfully")
        );

      }
    }
  }


</script>

<style scoped>

</style>