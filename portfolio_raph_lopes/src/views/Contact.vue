

<template>

  <main class="page contact-page">
    <section class="portfolio-block contact">
      <div class="container">
        <div class="heading">
          <h1> Contact Me </h1>
        </div>
        <form class="formmail" method="POST" action="https://formspree.io/f/xgepnweq" >
          <div class="form-group"><label class="espacing" for="name">Your name</label><input class="form-control item" name="name" type="text" id="name"></div>
          <div class="form-group"><label class="espacing" for="subject">Subject</label><input class="form-control item" name="subject" type="text" id="subject"></div>
          <div class="form-group"><label class="espacing" for="email">Mail</label><input class="form-control item" name="_replyto" type="email" id="email"></div>
          <div class="form-group"><label class="espacing" for="message">Message</label><textarea class="form-control item" name="message" id="message" ></textarea></div>

          <div class="form-group espacing"><button onclick="sendEmail()" class="boutton-send"  id="sendEmail" type="submit">Submit</button></div>
          <div class="notes">  <p>We are using <a target="_blank" href="http://formspree.io">FormSpree</a> for this form.
            Please consult their privacy policy if you have any questions regarding this matter.</p>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>


<script>

import axios from "axios";
  export default {
    name: "Contact",
    methods : {
    /* sendEmailAjax: function () {
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
      } */
    },
    mounted(){
      axios.post("https://formspree.io/f/xgepnweq",{} ) //https://github.com/axios/axios
    }
  }


</script>

<style scoped>

.boutton-send {

  padding: .5rem 1.2rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 10%;

  color: whitesmoke;
  background-color: #222222;
  border: none;
  width: auto;
}

.heading{
  color:whitesmoke;
}
.formmail{
  background-color: rgba(53,53,53,1);
}
.espacing{
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 1.5%;
  padding-bottom: 1.5%;
  font-size: 20px;
  color: whitesmoke;
}

.notes{
  color: white;
  padding-top: 2%;
}
</style>