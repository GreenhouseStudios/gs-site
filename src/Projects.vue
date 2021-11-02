<template>
  <div v-if="!$store.getters.loading">
    <div class=" w-60-l w-90 bb bw1 center mb3">
      <div class="flex flex-row justify-between w-80-l center" id="tab-btn-container"><span v-for="(cat,index) in categories" class="ma2" :key="cat"><button @click="activeTab = index" class="br3 f3-l f5 pa2 bg-transparent grow" :class="{active: activeTab === index, inactive: activeTab !== index}" >{{cat}}</button></span></div>
    </div>
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
      categories: ["Research","Storytelling","Teaching", "All Projects"],
      activeTab: 0,
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
.active{
  border: 1px solid black;
}
.inactive{
  border: 1px dashed rgba(0, 0, 0, 0.3)
}
#tab-btn-container{
  display: flex;
  flex-direction: row;
}
</style>