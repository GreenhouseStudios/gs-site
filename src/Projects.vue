<template>
  <div v-if="!$store.getters.loading">
    <!-- <div class="w-50-l w-90 center f3-ns f4 ma5 pv6-ns pv3 fw4 i">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti, delectus repellat officia, nobis error esse laboriosam qui distinctio ullam, quos dolores autem. Repudiandae aliquid facilis laborum nesciunt ab ipsa amet rem quae velit quos atque iste assumenda at deserunt pariatur voluptas earum, voluptatibus itaque dignissimos cumque sit voluptatum! Quae!
    </div> -->
    <div class="w-50 f3-ns f4 mh5 mv6 ma6-l pv3-ns pv3 fw4">
      <h2 class="page-title f1">Projects</h2>
      <p>
        Each project is a test drive for our model of scholarly production. This
        allows us to continually assess our vision of what scholarly
        communications in the digital age looks like.
      </p>
    </div>
    <div class="w-60-l w-90 bb bw1 center mb3"></div>
    <div class="grid" v-if="projects">
      <card
        v-for="(project, index) in projectsByName"
        :key="project.slug"
        :project="project"
        :index="index"
        :slug="project.slug"
        ref="projects"
      ></card>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import _ from "lodash";
export default {
  name: "Projects",
  components: { Card },
  data() {
    return {
      projects: null,
      categories: ["Research", "Storytelling", "Teaching", "All Projects"],
      activeTab: 0,
    };
  },
  updated() {
    this.projects = this.$store.getters.allProjects;
  },
  mounted() {
    this.projects = this.$store.getters.allProjects;
  },
  computed: {
    projectsByName() {
      if (!this.$store.getters.loading && this.projects.length > 0) {
        return _.sortBy(this.projects, [
          function (o) {
            return o.slug ? o.slug.toLowerCase() : "";
          },
        ]);
      } else return [];
    },
  },
  beforeRouteLeave(to, from, next){
    console.log(to);
    console.log(from);
    this.$refs.projects.map(x => x.reset());
    next();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/projects.css";
.active {
  border: 1px solid black;
}
.inactive {
  border: 1px dashed rgba(0, 0, 0, 0.3);
}
#tab-btn-container {
  display: flex;
  flex-direction: row;
}
</style>