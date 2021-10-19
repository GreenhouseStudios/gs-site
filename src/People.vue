<template>
  <div>
    <div class="grid">
      <person-card
        v-for="person in peopleByLastName"
        :key="person.slug"
        :person="person"
      ></person-card>
    </div>
  </div>
</template>

<script>
import PersonCard from "./components/PersonCard.vue";
import _ from "lodash"
export default {
  name: "People",
  components: { PersonCard },
  data() {
    return {
      people: [],
      posts: null,
      imgs: null,
    };
  },
  computed: {
    peopleByLastName() {
      return _.sortBy(this.people, [function(o){return o.custom_fields.last_name[0]}])
    }
  },
  created() {
    this.people = this.$store.getters.allPeople;
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/projects.css";
</style>