<template>
  <div>
    <header class="header relative">
      <img
        :src="require('../../public/img/watercolor-nav.png')"
        alt="gs-watercolor-background"
        class="absolute"
        id="watercolor-bg"
      />
      <home-button class="o-0"></home-button>
      <div
        class="absolute top-0 left-0 ttu ph3 mh3 mv0 f2-l f3 o-90 db-l dn off-black"
        id="page-indicator"
      >
        <h2 class="mv1" v-if="currentPage !== 'Home'">{{ currentPage }}</h2>
      </div>
      <input
        class="menu-btn"
        type="checkbox"
        id="menu-btn"
        @click="showMenu = true"
      />
      <label
        class="absolute-l top-0 left-0 pa3 f1-ns f3 menu-icon"
        for="menu-btn"
      >
        <p class="menu-title" style="margin: 0 15px">{{ currentPage }}</p>
        <span class="navicon"></span>
      </label>
      <ul class="menu ttc">
        <li><router-link class="shimmer relative" to="/">home <img :src="require('../../public/img/Line2.svg')" class="w-70 absolute bottom-0 left-1 dn" :style="`transform: scaleX(${Math.random() > 0.5 ? 1 : -1})`"/></router-link></li>
        <li><router-link class="shimmer relative" to="/people">people<img :src="require('../../public/img/Line2.svg')" class="w-70 absolute bottom-0 left-1 dn"/></router-link></li>
        <li>
          <router-link class="shimmer relative" to="/projects">projects<img :src="require('../../public/img/Line2.svg')" class="w-70 absolute bottom-0 left-1 dn"/></router-link>
        </li>
        <li>
          <router-link class="shimmer relative" to="/page/join-us">join us<img :src="require('../../public/img/Line2.svg')" class="w-70 absolute bottom-0 left-1 dn"/></router-link>
        </li>
        <li><router-link class="shimmer relative" to="/blog">blog<img :src="require('../../public/img/Line2.svg')" class="w-70 absolute bottom-0 left-1 dn"/></router-link></li>
      </ul>
      <transition name="slide-fade">
        <div
          class="
            mobile-menu
            absolute
            top-0
            bottom-0
            left-0
            right-0
            w-100
            bg-white
            z-5
          "
          v-if="showMenu"
          id="mobile-menu"
        >
          <button
            @click="showMenu = false"
            class="absolute h2 w2 top-0 right-0 bn bg-white f2 ma3"
            style="color: #161616"
          >
            <i class="dib fa fa-xs fa-times"></i>
          </button>
          <ul
            @click="showMenu = false"
            class="flex flex-column items-center justify-center h-100"
          >
            <li><router-link to="/">HOME</router-link></li>
            <li><router-link to="/people">PEOPLE</router-link></li>
            <li><router-link to="/projects">PROJECTS</router-link></li>
            <li><router-link to="/page/join-us">JOIN US</router-link></li>
            <li><router-link to="/blog">BLOG</router-link></li>
          </ul>
        </div></transition
      >
    </header>
  </div>
</template>

<script>
import HomeButton from "./HomeButton.vue";
export default {
  components: { HomeButton },
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    navImg() {
      return require("../../public/img/watercolor-nav.png");
    },
    currentPage() {
      var title = "";
      var expr = this.$route.path;
      switch (expr) {
        case "/":
          title = "Home";
          break;
        case "/people":
          title = "People";
          break;
        case "/projects":
          title = "Projects";
          break;
        case "/page/join-us":
          title = "Join Us";
          break;
        case "/blog":
          title = "Blog";
          break;
      }
      return title;
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
#page-indicator {
  font-family: SAMO;
}
.menu-title {
  font-family: Samo;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(1000px);
}

#watercolor-bg {
  z-index: -1;
  max-width: 60vw;
  position: absolute;
  right: 0;
}

li {
  font-size: 1.2rem;
}
li:hover {
}
router-link {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif !important;
}
.header {
  width: 100%;
  background-size: 100%;
}

.header ul {
  font-family: "Libre Franklin";
  font-weight: 300;
  text-align: center;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}
li a {
  display: block;
  padding: 20px 20px;
  text-decoration: none;
  color: #161616;
  font-size: 1.75rem;
}

.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}
/* menu */

.header .menu {
  clear: both;
  margin: 0;
  padding: 0;
  max-height: 0;
  font-family: "Libre Franklin";
  font-weight: 500;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
  display: flex;
  align-items: center;
}

.header .menu-icon .navicon {
  background: #161616;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #161616;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

#mobile-menu {
  font-size: 10rem !important;
}
.menu {
  font-family: "Libre Franklin" !important;
}
/* 48em = 768px */

@media (min-width: 60em) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
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
.router-link-exact-active {
  > img{
    display: block;
    bottom: 5%;
  }
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