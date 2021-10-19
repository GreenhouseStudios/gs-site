<template>
  <div v-if="!$store.getters.loading">
    <div class="grid" v-if="activePeople.length > 0">
      <person-card
        v-for="person in activePeople"
        :key="person.slug"
        :person="person"
      ></person-card>
    </div>
    <div  v-if="alumni.length > 0">
      <h1>Alumni</h1>
      <ul><li v-for="a in alumni" :key="a.title.rendered">{{a.title.rendered}}</li></ul>
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
    },
    alumni(){
      if(this.people.length > 0){
        return this.people.filter(p => p.categories.indexOf(86) >= 0)
      }
      else return [];
    },
    activePeople(){
      if(!this.$store.getters.loading && this.people.length > 0){
        return _.sortBy(this.people.filter(p => p.categories.indexOf(86) < 0), [function(o){return o.custom_fields.last_name[0]}])
      } else return [];
    }
  },
  updated() {
    this.people = this.$store.getters.allPeople;
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/projects.css";
</style>