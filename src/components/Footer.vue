<template>
  <div>
    <footer class="overflow-hidden">
      <img
        class="footer-img"
        loading="lazy"
        src="../../public/img/watercolor-footer.png"
      />
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
              ><img
                loading="lazy"
                class="shadow"
                src="../../public/img/email.svg"
                alt="email"
            /></a>
          </div>
          <div class="instagram social-icon">
            <a href="https://www.instagram.com/greenhousestudiosuconn/?hl=en"
              ><img
                loading="lazy"
                class="shadow"
                src="../../public/img/instagram.svg"
                alt="instagram"
            /></a>
          </div>
          <div class="youtube social-icon">
            <a href="https://www.youtube.com/channel/UCuDO0yPZYSaXBE3G7ArmQjw"
              ><img
                loading="lazy"
                class="shadow"
                src="../../public/img/youtube.svg"
                alt="youtube"
            /></a>
          </div>
          <div class="facebook social-icon">
            <a href="https://www.facebook.com/GreenhouseStudiosUConn/"
              ><img
                loading="lazy"
                class="shadow"
                src="../../public/img/facebook.svg"
                alt="facebook"
            /></a>
          </div>
          <div class="twitter social-icon">
            <a href="https://twitter.com/greenhouseuconn?lang=en"
              ><img
                loading="lazy"
                class="shadow"
                src="../../public/img/twitter.svg"
                alt="twitter"
            /></a>
          </div>
        </div>

        <div class="copyright f4-ns f5" id="footer-links">
          <p>© <a href="www.uconn.edu">University of Connecticut</a></p>
          <p>
            <a href="https://uconn.edu/disclaimers-privacy-copyright/"
              >Disclaimers, Privacy & Copyright</a
            >
          </p>
          <p><a href="https://accessibility.uconn.edu/">Accessibility</a></p>
          <p>
            <a href="https://dev-greenhouse-studios.pantheonsite.io/wp-admin/"
              >Editor Login</a
            >
          </p>
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-information {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
@media (max-width: 45em) {
  .footer-information {
    flex-direction: column;
    padding-top: 100px;
  }
}

.contact-info,
.social-media,
.copyright {
  padding: 20px;
}
section {
  padding-bottom: 30px;
}
footer {
  position: relative;
}
.footer-img {
  position: absolute;
  bottom: -180px;
}
.grants {
  position: relative;
}
.shadow:hover {
  -webkit-filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.6))
    drop-shadow(0px 1px 1px black);
  filter: invert(100%) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.6));
}
.social-icon {
  padding: 5px;
}
a > img {
  height: 40px;
}
#footer-links {
  > p > a {
    color: #1a1a1a;

    &:hover {
      color: white !important;
    }
  }
}
</style>