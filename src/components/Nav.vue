<template>
  <div>
    <header class="header">
      <img class="nav-img" src="../../public/img/watercolor-nav.png" />
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"
        ><span class="navicon"></span
      ></label>
      <ul class="menu">
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/people">PEOPLE</router-link></li>
        <li><router-link to="/projects">PROJECTS</router-link></li>
        <li><router-link to="/people">JOIN US</router-link></li>
        <li><router-link to="/blog">BLOG</router-link></li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../assets/projects.css";
ul{
    background-color: rgba(1,1,1,0) !important;
}
a{
  font-family: Samo;
}
</style>