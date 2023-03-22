<template>
  <div>
    <footer class="overflow-hidden">
      <img
        class="footer-img"
        loading="lazy"
        src="../../public/img/watercolor-footer.png"
      />
      <section class="footer-information">
        <div class="footer-container">
        <div class="footer-nav-info">
        <img src="../../public/img/greenhouse-long-wordmark.png" class="long-wordmark">
        <div class="square-wordmark-container">
        <img src="../../public/img/greenhouse-studios-square-logo.png" class="square-wordmark">
      </div>
        <div class="nav-links">
        <p><a id="link">Home</a></p>
        <p><a id="link">People</a></p>
        <p><a id="link">Projects</a></p>
        <p><a id="link">Join Us</a></p>
        <p><a id="link">Blog</a></p>
      </div>
      <div class="footer-info-container">
        <div class="contact-info f4-ns f5">
          <p>Homer Babbidge Library, Level One</p>
          <p>369 Fairfield Way, Unit 1005</p>
          <p>Storrs, CT 06269-1005</p>
        </div>
        <div class="copyright f4-ns f5" id="footer-links">
          <p>© <a href="www.uconn.edu" id="link">University of Connecticut</a></p>
          <p>
            <a href="https://uconn.edu/disclaimers-privacy-copyright/" id="link"
              >Disclaimers, Privacy & Copyright</a
            >
          </p>
          <p><a href="https://accessibility.uconn.edu/" id="link">Accessibility</a></p>
        </div>
      </div>
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
          <div class="twitter social-icon">
            <a href="https://www.linkedin.com/company/greenhousestudiosuconn"
              ><img
                loading="lazy"
                class="shadow"
                src="../../public/img/linkedin.png"
                alt="twitter"
            /></a>
          </div>
        </div>
        <div class="footer-2">
        <a href="mailto:greenhousestudios@uconn.edu" class="fa fa-envelope"></a>
        <div class="icon">
            <a href="https://www.instagram.com/greenhousestudiosuconn/?hl=en" class="fa fa-instagram"
              ></a>
            </div>
            <a href="https://www.youtube.com/channel/UCuDO0yPZYSaXBE3G7ArmQjw" class="fa fa-youtube"
              ></a>
            <a href="https://www.facebook.com/GreenhouseStudiosUConn/" class="fa fa-facebook"
              ></a>
            <a href="https://twitter.com/greenhouseuconn?lang=en" class="fa fa-twitter"
              ></a>
            <a href="https://www.linkedin.com/company/greenhousestudiosuconn" class="fa fa-linkedin"
              ></a>
            </div>
    </div>
      </section>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

#link:hover {
  text-decoration: underline;
  color: black;
}

.fa {
  color: white;
  font-size: 24px;
  margin: 10px;
  padding: 10px;
  text-align: center;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  background-color: #8cc947;
  border-radius: 50px;
  height: 36px;
}

.icon:hover {
  background-color: black;
}

.footer-information {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align:left;
}
.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.footer-info-container {
  display: flex;
  justify-content: space-between;
}

.footer-info-container p {
  font-size: 16px;
}

.long-wordmark {
  padding: 10px 0px;
}

.footer-nav-info {
display: flex;
flex-direction: column;
justify-content: space-around;
max-width: 750px;
}

.nav-links {
  display: flex;
  justify-content: space-between;
padding: 10px 0px 5px 0px;
}

.social-media,
.copyright {
  padding: 20px;
}
section {
  padding-bottom: 30px;
}
footer {
  position: relative;
  margin-top: 25px
}

.copyright {
  padding: 0px;
  text-align: end;
}

p {
  margin: 10px 0px;
}

.grants {
  position: relative;
}

.square-wordmark-container {
  display: flex;
  justify-content: center;
}


.nav-links p {
  font-weight: 600;
  font-size: 16px;
}

.shadow:hover {
  -webkit-filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.6))
    drop-shadow(0px 1px 1px black);
  filter: invert(100%) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.6));
}


.footer-information {
  padding: 0;
}

a {
  text-decoration: none;
  color: black;
}

.footer-img {
  width: 100%;
}

.social-icon {
  padding: 5px;
}
a > img {
  height: 30px;
}

.long-wordmark {
  display: none;
}
.square-wordmark {
  display: flex;
  width: 100%;
  max-width: 200px;
}

#footer-links, .nav-links  {
  > p > a {
    color: black;

    &:hover {
      text-decoration: underline;
      color: black;
    }
  }
}

@media screen and (min-width: 650px) {
  .footer-info-container p {
  font-size: 18px;
}
.nav-links p {
  font-weight: 600;
  font-size: 18px;
}

a > img {
  height: 40px;
}

.square-wordmark {
  display: none;
}

.long-wordmark {
  display: block;
  width: 100%;
}

}

</style>