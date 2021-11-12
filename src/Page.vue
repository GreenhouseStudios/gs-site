<template>
  <div v-if="page" id="container" class="ph5-ns">
    <h2 class="f1">{{page.title.rendered}}</h2>
    <div v-html="page.content.rendered"></div>
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
</style>