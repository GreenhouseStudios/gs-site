<template>
  <div>
    <div
      id="blogmain"
      v-if="!$store.state.loading && project"
      class="mt6-ns w-two-thirds-ns w-90 center"
    >
      <div v-if="project">
        <div class="textbox">
          <span v-html="project.content.rendered"></span>
        </div>
      </div>
    </div>
    <div v-else>
      <not-found></not-found>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NotFound from "./NotFound.vue";
export default {
  components: { NotFound },
  name: "ProjectPage",
  data() {
    return {
      date: "",
    };
  },
  computed: {
    project(){
      return this.projectBySlug(this.slug);
    },
    slug(){
      return this.$route.params.slug;
    },
    ...mapGetters({
      projectBySlug: "projectBySlug",
    }),
    
  },
  methods: {
    getAlt(str) {
      var regex = /<img.*?src="(.*?)" alt="(.*?)"/;
      var alt = regex.exec(str);
      if (alt == null) {
        // Placeholder Image
        alt = "A blog image";
      } else {
        alt = alt[2];
      }
      return alt;
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/blog.css";
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.428571429;
  color: #333333;
}
figure {
  margin: 4em auto !important;
}
h1 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: #161616;
  margin-top: 20px;
  margin-bottom: 10px;
}
.credits {
  margin-bottom: 1.5em;
}
#blogmain {
  overflow: hidden;
  background: transparent;
}

#mainimg {
  width: 100%;
  height: auto;
}
@media (min-width: 38em) and (max-width: 52em) {
}
@media (max-width: 38em) {
}
.textbox {
  height: 100%;
}
.alignleft {
  display: inline;
  float: left;
  margin-right: 1.5em;
  margin-bottom: 1.5em;
}
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eeeeee;
}
img {
  height: auto;
  max-width: 100%;
}
a {
  color: #717073;
}
#blogmain a:hover {
  color: #8cc947;
}
</style>