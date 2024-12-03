<template>
    <header class="h7 w-100 cf" style="background: #00a192">
      <!-- <home-button class="o-0"></home-button> -->
      <div class="w-100 pv7-ns pv6-ns pv3 tc" id="blog-header">
        <div class="blog-header-text">
          <!-- <img src="../../public/img/GH-White-Logo.png" class="logo-white w-100 mb0"> -->
          <p class="center white f1-ns f3 mb4 mb0-ns mt0 mh3 " id="blog-title">The Greenhouse Studios Blog</p>
          <!-- <p class="f4 white mh0 mv1">The best place to catch up on the latest news about our
            research and initiatives.</p> -->
        </div>
      </div>
    </header>
</template>
  
<script>

export default {

  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    navImg() {
      return require("../../public/img/avif/watercolor-nav.avif");
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

.logo-white {
  max-width: 450px;
  margin: auto;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.blog-header-text {
  margin: auto;
  padding: 15px;
  max-width: 800px;
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active below version 2.1.8 */
  {
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

.menu>li a {
  display: block;
  padding: 20px 20px;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
}

#mobile-menu-list>li a {
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

  >li {
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

  background-position: -4rem top;
  /*50px*/
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation-name: shimmer;
  -webkit-animation-duration: 2.2s;
  -webkit-animation-iteration-count: infinite;
  -webkit-background-size: 4rem 100%;
  /*50px*/
}

.router-link-exact-active {
  >img {
    display: block;
    bottom: 5%;
  }
}

@-webkit-keyframes shimmer {
  0% {
    background-position: -4rem top;
    /*50px*/
  }

  70% {
    background-position: 12.5rem top;
    /*200px*/
  }

  100% {
    background-position: 12.5rem top;
    /*200px*/
  }
}

.mobilebutton {
  border: none;
  font-size: 16px;
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
  background: #9fdd59 radial-gradient(circle, transparent 1%, #00a192 1%) center/15000%;
}

.ripple:active {
  background-color: #f5f5f5;
  background-size: 100%;
  transition: background 0s;
}

#blog-header {
  font-family: 'Libre Franklin';
  position: relative;
}

#blog-header::after{
  content: "";
  background-image: url('../../public/bgImg/GSBlogHeaderTexture.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 10%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0;
  z-index: 2;
  opacity: 0.4;
}

#blog-title{
  // font-family: 'Samo';
  // text-shadow: 5px 5px 10px rgba(0,0,0,0.2);
  font-weight: 700;
  margin-bottom: 0 !important;
  
}
</style>
