<template>
  <div
    id="app"
    style="width: 100vw; overflow-x: hidden"
    :style="`${
      menuOn ? 'overflow-y: hidden; height: 100vh; position: fixed' : ''
    }`"
  >
    <Header v-if="$route.name !== 'Blog' && $route.name !== 'BlogRead'"></Header>
    <Nav v-on:toggle="menuOn = !menuOn" v-if="$route.name !== 'Blog' && $route.name !== 'BlogRead'"></Nav>
    <BlogNav v-if="$route.name == 'Blog'" v-on:toggle="menuOn = !menuOn" ></BlogNav>
    <!-- <loading v-if="$store.getters.loading"></loading> -->
    <!-- <div
      :style="`height:${height}; width:${width}`"
      class="overflow-hidden"
      v-if="showBgImages"
    >
      <img
        :src="bgImages[0]"
        class="absolute o-10 right-0"
      />
    </div> -->
    
    <div class="route-container"><keep-alive>
      <router-view></router-view>
    </keep-alive></div >
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from './components/Header.vue';
// import Loading from "./components/Loading.vue";
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
    Footer,
    Header,
    // Loading,
  },
  data() {
    return {
      menuOn: false,
      height: null,
      width: null,
      showBgImages: true,
      bgImages: [require("../public/bgImg/spiderplant-BG.png")],
    };
  },
  created() {
    this.$store.dispatch("getSiteData");
  },
};
</script>

<style >
@media screen and (min-width: 1440px) and ( max-width: 2560px) {
  .route-container{
    padding: 0 250px;
  }
}
@media screen and (min-width: 2561px) {
  .route-container{
    padding: 0 550px;
  }
}
@media screen and (max-width: 1920px){
  .route-container{
    padding: 0;
  }
}

Nav {
  overflow: visible !important;
}
body,
html {
  overflow-x: hidden;
}
body {
  width: 100vw;
  position: relative;
  background-image: url("~@/../public/bgImg/spiderplant-BG.png");
  background-repeat: repeat-y;
  background-size: 100vw;
  line-height: 1.428571429;
  background-position-x: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
footer {
  font-size: 14px;
  
  color: #333333;
  display: block;
}
#footer {
  padding: 1.5em 0;
  color: rgba(255, 255, 255, 0.7);
}
#site-header {
  background: #000e2f !important;
  padding: 0 15px !important;
}
#uconn-header-container {
  background-color: #000e2f !important;
  color: #fff;
}
#uconn-banner {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1) !important;
}
#wordmark {
  color: #fff !important;
}
#university-of-connecticut {
  color: #fff !important;
}
.off-black {
  color: #191919;
}
.off-black-2 {
  color: #404040;
}
.dark-gray {
  color: #808080;
}
#bg-image {
  pointer-events: none;
}
:root {
  --main-bg-color: #8cc947;
}
a, a:link, a:visited, a:focus, a:hover, a:active{
  color: #161616;
}
.shimmer:hover {
  display: inline-block;
  color: white;

  background: #000 -webkit-gradient(linear, 100% 0, 0 0, from(#444), color-stop(0.5, #aaa), to(#444));

  background-position: -4rem top; /*50px*/
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation-name: shimmer;
  -webkit-animation-duration: 2.2s;
  -webkit-animation-iteration-count: infinite;
  -webkit-background-size: 4rem 100%; /*50px*/
}
@-webkit-keyframes shimmer {
  0% {
    background-position: -4rem top; /*50px*/
  }

  70% {
    background-position: 12.5rem top; /*200px*/
  }

  100% {
    background-position: 12.5rem top; /*200px*/
  }
}
</style>
