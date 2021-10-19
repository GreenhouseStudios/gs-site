<template>
  <div v-if="!$store.getters.loading">
    <div class="grid" v-if="projects">
      <card v-for="project in projects" :key="project.id" :project="project"></card>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
export default {
  name: "Projects",
  components: { Card },
  data() {
    return {
      projects: null,
    };
  },
  updated() {
    this.projects = this.$store.getters.allProjects
  },
  mounted () {
    this.projects = this.$store.getters.allProjects;
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/projects.css";
</style>