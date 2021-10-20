<template>
  <div>
    <header class="header">
      <home-button></home-button>
      <img class="nav-img" src="../../public/img/watercolor-nav.png" />
      <input class="menu-btn" type="checkbox" id="menu-btn" />
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
    </header>
  </div>
</template>

<script>
import HomeButton from './HomeButton.vue';
export default {
  components: { HomeButton },};
</script>

<style scoped>
ul{
    background-color: rgba(1,1,1,0) !important;
}
a{
  font-family: Samo;
}
li{
  font-size: 1.2rem;
  animation: out 0.5s ease-in-out;
}
li:hover{
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
</style>