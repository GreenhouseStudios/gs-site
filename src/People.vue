<template>
  <div>
    <div class="grid">
      <person-card
        v-for="person in people"
        :key="person.slug"
        :person="person"
      ></person-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PersonCard from "./components/PersonCard.vue";
import WPAPI from "wpapi";
export default {
  name: "People",
  components: { PersonCard },
  data() {
    return {
      people: [],
      wp: new WPAPI({
        endpoint: "https://dev-greenhouse-studios.pantheonsite.io/wp-json",
      }),
      posts: null,
      imgs: null,
    };
  },
  created() {
    axios
      .get(
        "https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/person?fields[]=department,about"
      )
      .then((res) => {
        // this.people = res.data;
        // var imgs = [];
        // for (var i = 0; i < this.people.length; i++) {
        //   axios
        //     .get(res.data[i]._links["wp:featuredmedia"][0].href)
        //     .then((result) => {
        //       imgs.push(result.data.guid.rendered);
        //       this.imgs = imgs;
        //     });
        // }
        res.data.forEach((person) => {
          console.log(person);
          if (person._links['wp:featuredmedia']) {
            axios
              .get("https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/media/" + person.featured_media)
              .then((imgSrc) => {
                person["image"] = imgSrc.data.guid.rendered;
                this.people.push(person);
              });
          }
        });
      });

    // this.wp
    //   .pages()
    //   .get()
    //   .then((posts) => {
    //     this.posts = posts;
    //   });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/projects.css";
</style>