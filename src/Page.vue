<template>
  <div v-if="page" id="container" class="w-80 f3-ns f4 mh2 center mv2 mh6-l mv3-l  pv3-ns pv3 fw4">
    <h2 class="f1 page-title">{{ page.title.rendered }}</h2>
    <div v-html="page.content.rendered" class="mh6-ns"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      page: null,
      locked: false,
    };
  },
  mounted() {
    axios
      .get(
        "https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/pages?slug=" +
        this.$route.params.slug
      )
      .then( ( res ) => {
        this.page = res.data[0];
        if(this.page.content.protected){
          let pw = prompt("Please enter the password: ");
          axios.get("https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/pages?slug=" +
        this.$route.params.slug + "&password=" + pw).then( ( res ) => {
          this.page = res.data[0];
        } );
        }
      } );
  },
  updated () {
     axios
      .get(
        "https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/pages?slug=" +
        this.$route.params.slug
      )
      .then( ( res ) => {
        this.page = res.data[0];
        if(this.page.content.protected){
          let pw = prompt("Please enter the password: ");
          axios.get("https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/pages?slug=" +
        this.$route.params.slug + "&password=" + pw).then( ( res ) => {
          this.page = res.data[0];
        } );
        }
      } );   
  },
};
</script>

<style lang="scss" scoped>
#container {
  font-family: "Libre Franklin", Arial, Helvetica, sans-serif !important;
}

.title {
  font-family: "Samo";
  font-size: 3rem;
}

img {
  height: auto !important;
}
</style>