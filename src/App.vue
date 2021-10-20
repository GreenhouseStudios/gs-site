<template>
  <div id="app">
    <head>
      <meta charset="utf-8" />
      <title>UConn Banner</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <link :href="require('./assets/banner.css')" rel="stylesheet" />
    </head>
    <div id="uconn-banner">
      <div id="uconn-header-container">
        <div class="row-container">
          <div class="row-fluid">
            <div id="home-link-container">
              <a id="home-link" href="http://uconn.edu/">
                <span id="wordmark">UCONN</span>
                <span id="university-of-connecticut"
                  >UNIVERSITY OF CONNECTICUT</span
                >
              </a>
            </div>
            <div id="button-container">
              <span>
                <a class="btn" href="http://uconn.edu/search.php" title="Search"
                  ><i class="icon-search"></i>
                </a>
              </span>
              <span>
                <a
                  class="btn"
                  href="http://uconn.edu/azindex.php"
                  title="AZ Index"
                  ><i class="icon-a-z"></i
                ></a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="row-container" id="site-header">
        <div class="row-fluid">
          <div>
            <p id="super-title">
              <a href="http://lib.uconn.edu/" style="color: white;"
                >UCONN LIBRARY</a
              >
            </p>
            <h1 id="site-title"><a href="/" style="color: white;">Greenhouse Studios</a></h1>
          </div>
          
        </div>
      </div>
    </div>

    <Nav></Nav>
    <home-button></home-button>
    <loading v-if="$store.getters.loading"></loading>
    <router-view></router-view>
    <!-- <home></home> -->
    <hr>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import HomeButton from "./components/HomeButton.vue";
import Loading from './components/Loading.vue';
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
    HomeButton,
    Footer,
    Loading,
  },
  created () {
    this.$store.dispatch('getSiteData')
  },
};
</script>

<style>
footer{
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 14px;
line-height: 1.428571429;
color: #333333;
display: block;
}
#footer {
padding: 1.5em 0;
color: rgba(255, 255, 255, 0.7);
}
#site-header{
  background: #9ac840!important;
}
</style>
