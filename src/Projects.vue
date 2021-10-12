<template>
  <div>
    <div class="grid">
      <card v-for="project in projects" :key="project.id"></card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./components/Card.vue";
export default {
  name: "Projects",
  components: { Card },
  data() {
    return {
      projects: null,
    };
  },
  created() {
    axios
      .get(
        "https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/pages?categories=85"
      )
      .then((res) => {
        this.projects = res.data;
      });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/projects.css";
</style>