<template>
  <div id="app" style="width:100vw; overflow-x: hidden; " :style="`${menuOn ? 'overflow-y: hidden; height: 100vh; position: fixed' : ''}`">
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
            <p id="super-title"></p>
            <h1 id="site-title">
              <a href="/" style="color: #000e2f">Greenhouse Studios</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <Nav v-on:toggle="menuOn = !menuOn"></Nav>
    <loading v-if="$store.getters.loading"></loading>
    <div :style="`height:${height}`" class="overflow-hidden" v-if="showBgImages">
    <img
      :src="bgImages[i % bgImages.length]"
      class="absolute o-10 z--1"
      :style="`top: ${spacing * i + 500}px; left:${randomXinMargin(i)}px; transform:scale(${width > 600 ? 1 : 2})`"
      v-for="i in Array.from(Array(numBgImages).keys())"
      :key="i"
    /></div>
    <router-view v-on:subnav-change="childUpdate"></router-view>
    <hr />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Loading from "./components/Loading.vue";
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
    Footer,
    Loading,
  },
  data() {
    return {
      menuOn: false,
      height: null,
      width: 900,
      showBgImages: true,
      bgImages: [
        require("../public/bgImg/gs_spider-plant-fully-grown_bw.png"),
      ],
    };
  },
  created() {
    this.$store.dispatch("getSiteData");
  },
  methods: {
    randomXOffset() {
      return this.scale(this.width * Math.random(),0,this.width,50,this.width - 50);
    },
    randomXinMargin(i){
      return i%2 === 1 ? 0 - this.width/2: this.width - 800;
    },
    scale(number, inMin, inMax, outMin, outMax) {
      return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    },
    childUpdate(){
      this.showBgImages= false;
      this.height = document.body.scrollHeight;
      this.width = document.body.scrollWidth;
      this.showBgImages = true
    }
  },
  computed: {
    numBgImages() {
      return Math.abs(Math.floor(this.height / this.spacing) - 1);
    },
    spacing(){
      return 1000;
    }
  },
  mounted() {
    this.height = document.body.scrollHeight;
    this.width = document.body.scrollWidth;
  },
  updated() {
    this.height = document.body.scrollHeight;
    this.width = document.body.scrollWidth;
  },
};
</script>

<style>
Nav {
  overflow: visible !important;
}
body,html {
  overflow-x: hidden;
}
footer {
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
#site-header {
  background: white !important;
  padding: 0 15px !important;
}
#uconn-header-container {
  background-color: #fff !important;
  color: #000;
}
#uconn-banner {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1) !important;
}
#wordmark {
  color: #000e2f !important;
}
#university-of-connecticut {
  color: #000e2f !important;
}
.off-black{
  color: #191919;
}
.off-black-2{
  color: #404040;
}
.dark-gray{
  color: #808080;
}
:root {
  --main-bg-color: #8CC947;
}
</style>
