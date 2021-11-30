<template>
    <div>
    <footer>
      <img class="footer-img" src="../../public/img/watercolor-footer.png" />
      <section class="footer-information">
        <div class="contact-info f4-ns f5">
          <p>Greenhouse Studios</p>
          <p>Homer Babbidge Library, Level One</p>
          <p>369 Fairfield Way, Unit 1005</p>
          <p>Storrs, CT 06269-1005</p>
        </div>

        <div class="social-media">
          <div class="email social-icon">
            <a href="mailto:greenhousestudios@uconn.edu" 
              ><img class="shadow" src="../../public/img/email.svg" alt="email"
            /></a>
          </div>
          <div class="instagram social-icon">
            <a href="https://www.instagram.com/greenhousestudiosuconn/?hl=en"
              ><img class="shadow" src="../../public/img/instagram.svg" alt="instagram"
            /></a>
          </div>
          <div class="youtube social-icon">
            <a href="https://www.youtube.com/channel/UCuDO0yPZYSaXBE3G7ArmQjw"
              ><img class="shadow" src="../../public/img/youtube.svg" alt="youtube"
            /></a>
          </div>
          <div class="facebook social-icon">
            <a href="https://www.facebook.com/GreenhouseStudiosUConn/"
              ><img class="shadow" src="../../public/img/facebook.svg" alt="facebook"
            /></a>
          </div>
          <div class="twitter social-icon">
            <a href="https://twitter.com/greenhouseuconn?lang=en"
              ><img class="shadow" src="../../public/img/twitter.svg" alt="twitter"
            /></a>
          </div>
        </div>

        <div class="copyright f4-ns f5">
          <p>© University of Connecticut</p>
          <p>Disclaimers, Privacy & Copyright</p>
          <p>Accessibility</p>
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
.footer-information{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
@media (max-width: 45em) {
  .footer-information{
    flex-direction: column;
}
}

.contact-info, .social-media, .copyright{
  padding: 20px;
}
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
.shadow:hover {
  -webkit-filter: drop-shadow(1px 1px 0 black)
  drop-shadow(0px 1px 1px black);
  filter: invert(100%) drop-shadow(0px 1px 3px black);
}
.social-icon {
  padding: 5px;
}
a >img{
  height: 40px;
}
</style>