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
          <router-link  class="footer-link" to="/"
            >Home
            </router-link>
         <router-link  class="footer-link" to="/people"
            >People
          </router-link>
        <router-link  class="footer-link" to="/projects"
            >Projects</router-link>
          <router-link  class="footer-link" to="/page/join-us"
            >Join Us
          </router-link>
          <router-link to="/blog" class="footer-link"
            >Blog
          </router-link>
      </div>
      <div class="footer-info-container">
        <div class="address">
          <p>Homer Babbidge Library, Level One</p>
          <p>369 Fairfield Way, Unit 1005</p>
          <p>Storrs, CT 06269-1005</p>
        </div>
        <div class="copyright f4-ns f5" id="footer-links">
          <a href="www.uconn.edu" id="link"><p>© University of Connecticut</p></a>
          <a href="https://uconn.edu/disclaimers-privacy-copyright/" id="link"
 ><p>Disclaimers, Privacy & Copyright</p></a>
          <a href="https://accessibility.uconn.edu/" id="link"><p>Accessibility</p></a>
        </div>
      </div>
    </div>
        <div class="footer-2">
          <div class="icons">
        <a href="mailto:greenhousestudios@uconn.edu" class="fa fa-envelope"></a>
        </div>
        <div class="icons">
            <a href="https://www.instagram.com/greenhousestudiosuconn/?hl=en" class="fa fa-instagram"
              ></a>
            </div>
            <div class="icons">
            <a href="https://www.youtube.com/channel/UCuDO0yPZYSaXBE3G7ArmQjw" class="fa fa-youtube-play"
              ></a>
            </div>
            <div class="icons">
            <a href="https://www.facebook.com/GreenhouseStudiosUConn/" class="fa fa-facebook"
              ></a>
              </div>
              <div class="icons">
            <a href="https://twitter.com/greenhouseuconn?lang=en" class="fa fa-twitter"
              ></a>
              </div>
              <div class="icons">
            <a href="https://www.linkedin.com/company/greenhousestudiosuconn" class="fa fa-linkedin"
              ></a>
              </div>
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

.fa {
  display: flex;
  color: white;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  
}

#link, #link:hover {
  color:black;
  font-size: 14px;
}

router-link {
  color: black;
  text-decoration: none;
  font-family: Libre Franklin;
}

router-link:hover {
  text-decoration: underline;
}


.footer-2 {
  display: flex;
}

.icons:hover {
  background-color: #3e5820;
}

.icons {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8cc947;
  margin: 10px;
  height: 30px;
  width: 30px;
  border-radius: 100%;
}

.footer-link {
  color: black;
  text-decoration: none;
  font-family: Libre Franklin;
  font-weight: 500;
  font-size: 14px;
}

.footer-link:hover {
  text-decoration: underline;
}

.footer-img {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 750px;
  z-index: -1;
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

.nav-links router-link {
  text-decoration: underline;
  color: black;
  font-size: 16px;
}

.address p {
  font-size: 14px;
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

.footer-information {
  padding: 0;
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

@media screen and (min-width: 650px) {
  .footer-info-container p {
  font-size: 18px;
  }

  .address p {
 font-size: 18px;
  }

.footer-link {
  font-size: 18px;
}

a > img {
  height: 40px;
}

.square-wordmark {
  display: none;
}

#link, #link:hover {
  color:black;
  font-size: 18px;
}

.long-wordmark {
  display: block;
  width: 100%;
}

router-link {
  font-size: 30px;
}

.icons {
  width: 40px;
  height: 40px;
}

.fa {
  font-size: 18px;
}

}

</style>