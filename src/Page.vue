<template>
  <div
    v-if="page"
    id="container"
    class="w-80 f3-ns f4 mh2 center mv2 ma6-l pv3-ns pv3 fw4"
  >
    <h2 class="f1 title ttu">{{ page.title.rendered }}</h2>
    <div v-html="page.content.rendered" class="mh6-ns"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      page: null,
    };
  },
  mounted() {
    axios
      .get(
        "https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/pages?slug=" +
          this.$route.params.slug
      )
      .then((res) => {
        this.page = res.data[0];
      });
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-family: "Samo";
  font-size: 3rem;
}
</style>