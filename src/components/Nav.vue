<template>
  <div>
    <header class="header bg-transparent z-5">
      <img
        :src="require('../../public/img/watercolor-nav.png')"
        alt="gs-watercolor-background"
        class="absolute"
        id="watercolor-bg"
      />
      <home-button class="o-0"></home-button>
      <div
        class="
          absolute
          top-0
          left-0
          ttu
          ph3
          mh3
          mv0
          f2-l
          f3
          o-90
          db-l
          dn
          off-black
        "
        id="page-indicator"
      >
        <!-- <h2 class="mv1" v-if="currentPage !== 'Home'">{{ currentPage }}</h2> -->
      </div>
      <input
        class="menu-btn"
        type="checkbox"
        id="menu-btn"
        @click="toggleMenu()"
      />
      <label
        class="absolute-l top-0 left-0 pa3 f3-ns f5 menu-icon"
        for="menu-btn"
      >
        <span><i class="fa fa-2x fa-bars"></i></span>
      </label>
      <ul class="menu ttc">
        <li>
          <router-link class="shimmer relative" to="/"
            >home
            <img
              class="w-70 absolute bottom-0 left-1 dn"
              :style="`transform: scaleX(${Math.random() > 0.5 ? 1 : -1})`"
          /></router-link>
        </li>
        <li>
          <router-link class="shimmer relative" to="/people"
            >people<img
              class="w-70 absolute bottom-0 left-1 dn"
          /></router-link>
        </li>
        <li>
          <router-link class="shimmer relative" to="/projects"
            >projects<img
              class="w-70 absolute bottom-0 left-1 dn"
          /></router-link>
        </li>
        <li>
          <router-link class="shimmer relative" to="/page/join-us"
            >join us<img
              class="w-70 absolute bottom-0 left-1 dn"
          /></router-link>
        </li>
        <li>
          <router-link class="shimmer relative" to="/blog"
            >blog<img
              class="w-70 absolute bottom-0 left-1 dn"
          /></router-link>
        </li>
      </ul>
      <transition name="slide-fade">
        <div
          class="z-5 absolute top-0"
          v-if="showMenu"
          id="mobile-menu"
          style="width: 100vw"
        >
          <button
            @click="toggleMenu()"
            class="absolute h2 w2 top-0 right-0 bn bg-white f2 ma3"
            style="color: white; background: var(--main-bg-color)"
          >
            <i class="dib fa fa-xs fa-times"></i>
          </button>
          <ul
            @click="toggleMenuDelay()"
            class="flex flex-column items-center justify-center h-100"
            id="mobile-menu-list"
          >
            <li class="w-100"><router-link class="mobilebutton ripple" to="/">HOME</router-link></li>
            <li class="w-100"><router-link class="mobilebutton ripple" to="/people">PEOPLE</router-link></li>
            <li class="w-100"><router-link class="mobilebutton ripple" to="/projects">PROJECTS</router-link></li>
            <li class="w-100"><router-link class="mobilebutton ripple" to="/page/join-us">JOIN US</router-link></li>
            <li class="w-100"><router-link class="mobilebutton ripple" to="/blog">BLOG</router-link></li>
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
      return this.$route.name;
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      this.$emit("toggle");
    },
    toggleMenuDelay() {
      setTimeout(() => this.toggleMenu(), 300);
    },
  },
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
  position: absolute;
  right: 0;
  @media screen and (min-width: 1440px) {
    width: 65vw;
    top: 100px;
  }
  @media screen and (max-width: 1440px) {
    width: 130vw;
  }
}

li {
  font-size: 1.2rem;
}
li:hover {
}

.header {
  width: 100%;
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
.menu > li a {
  display: block;
  padding: 20px 20px;
  text-decoration: none;
  color: #161616;
  font-size: 1.5rem;
}
#mobile-menu-list > li a {
  display: block;
  padding: 20px 20px;
  color: white;
  font-size: 1.75rem;
  text-decoration: none;
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
  padding: 35px 30px;
  position: relative;
  user-select: none;
  display: flex;
  align-items: stretch;
}

.header .menu-icon .navicon {
  background: #161616;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
  transform: scale(2);
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
  background-color: var(--main-bg-color);
  height: 100vh;
}
#mobile-menu-list {
  font-weight: 800;
  
  > li {
    font-family: "Libre Franklin" !important;
    color: white !important;
  }
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
  > img {
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
.mobilebutton 
  {
  border: none;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  outline: none;
}
/* Ripple effect */
.ripple {
  background-position: center;
  transition: background 0.6s;
}
.ripple:hover {
  background: #9fdd59 radial-gradient(circle, transparent 1%, #8CC947 1%) center/15000%;
}
.ripple:active {
  background-color: #f5f5f5;
  background-size: 100%;
  transition: background 0s;
}
</style>