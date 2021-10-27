<template>
  <div>
    <header class="header">
      <home-button></home-button>
      <input
        class="menu-btn"
        type="checkbox"
        id="menu-btn"
        @click="showMenu = true"
      />
      <label class="menu-icon" for="menu-btn"
        ><span class="navicon"></span
      ></label>
      <ul class="menu">
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/people">PEOPLE</router-link></li>
        <li><router-link to="/projects">PROJECTS</router-link></li>
        <li><router-link to="/page/join-us">JOIN US</router-link></li>
        <li><router-link to="/blog">BLOG</router-link></li>
      </ul>
      <div class="mobile-menu absolute top-0 bottom-0 left-0 right-0 w-100 bg-white z-5" v-show="showMenu" id="mobile-menu">
        <button @click="showMenu = false" class="absolute h2 w2 top-0 right-0 bn bg-white f2 ma3" style="color: #161616"><i class="dib fa fa-xs fa-times"></i></button>
        <ul @click="showMenu = false" class="flex flex-column items-center justify-center h-100">
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/people">PEOPLE</router-link></li>
          <li><router-link to="/projects">PROJECTS</router-link></li>
          <li><router-link to="/page/join-us">JOIN US</router-link></li>
          <li><router-link to="/blog">BLOG</router-link></li>
        </ul>
      </div>
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
  },
};
</script>

<style scoped>
a {
  font-family: Samo;
}
li {
  font-size: 1.2rem;
  animation: out 0.5s ease-in-out;
}
li:hover {
  animation: in 0.5s ease-in-out forwards;
}

@keyframes in {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
@keyframes out {
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
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
  font-size: 2rem;
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
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
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

#mobile-menu{
  font-size: 10rem !important;
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
</style>