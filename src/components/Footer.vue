<template>
    <div>
    <footer>
      <img class="footer-img" src="../../public/img/watercolor-footer.png" />
      <section class="footer-information">
        <div class="contact-info">
          <p>Greenhouse Studios</p>
          <p>Homer Babbidge Library, Level One</p>
          <p>369 Fairfield Way, Unit 1005</p>
          <p>Storrs, CT 06269-1005</p>
        </div>

        <div class="social-media">
          <div class="email">
            <a href="mailto:greenhousestudios@uconn.edu"
              ><img src="../../public/img/email.svg"
            /></a>
          </div>
          <div class="instagram">
            <a href="https://www.instagram.com/greenhousestudiosuconn/?hl=en"
              ><img src="../../public/img/instagram.svg"
            /></a>
          </div>
          <div class="youtube">
            <a href="https://www.youtube.com/channel/UCuDO0yPZYSaXBE3G7ArmQjw"
              ><img src="../../public/img/youtube.svg"
            /></a>
          </div>
          <div class="facebook">
            <a href="https://www.facebook.com/GreenhouseStudiosUConn/"
              ><img src="../../public/img/facebook.svg"
            /></a>
          </div>
          <div class="twitter">
            <a href="https://twitter.com/greenhouseuconn?lang=en"
              ><img src="../../public/img/twitter.svg"
            /></a>
          </div>
        </div>

        <div class="footer-pages">
          <div class="footer-people">
            <a href="">People</a>
          </div>
          <div class="footer-projects">
            <a href="">Projects</a>
          </div>
          <div class="footer-joinus">
            <a href="">Join Us</a>
          </div>
        </div>

        <div class="copyright">
          <p>© University of Connecticut</p>
          <p>Disclaimers, Privacy & Copyright</p>
          <p>Accessbility</p>
        </div>

        <div class="grants">
          <img
            class="uconn-library"
            src="../../public/img/UConn_Library_Logo.png"
          />
          <img
            class="uconn-humanities"
            src="../../public/img/UConn_Humanities_Institute.png"
          />
          <img
            class="mellon"
            src="../../public/img/Andrew_W_Mellon_Foundation_Logo.png"
          />
        </div>
      </section>
    </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
section{
padding-bottom: 30px;
}
footer{
  position: relative;
}
.footer-img{
  position: absolute;
  bottom: 0;
}
.grants{
  position: relative;
}
</style>