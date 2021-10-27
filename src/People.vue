<template>
  <div v-if="!$store.getters.loading">
    <div id="tab-btn-container" class="w-50-ns center flex flex-row justify-between"><button @click="activeTab = index" class="pa3-ns pa2 br2 grow ma1 bg-transparent" :class="{active: activeTab === index, inactive: activeTab !== index}" v-for="(tab,index) in tabs" :key="tab"><h1 class="ma0 f2-ns f4">{{tab}}</h1></button></div>
    <div class="w-50-ns w-90 center f3-ns f4 pv5-ns pv3 fw3 i">{{tabIntros[activeTab]}}</div>
    
    <div id="active-people w-100" v-show="activeTab === 0"><div class="grid" v-if="activePeople.length > 0" >
      <person-card
        v-for="person in activePeople"
        :key="person.slug"
        :person="person"
      ></person-card>
    </div></div>
    <div  v-if="alumni.length > 0" v-show="activeTab === 1">
      <ul><li v-for="a in alumni" :key="a.title.rendered">{{a.title.rendered}}</li></ul>
    </div>
    <div>
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
      tabs: ['Active', 'Alumni', 'Partners'],
      tabIntros: ['Active: Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis vel dolores minus quis asperiores illum rem in, nihil sapiente ex sint quo accusamus nulla tempora vero eaque facere libero saepe aspernatur ut distinctio consequatur. Nostrum cupiditate iusto dignissimos eius quos corporis illo expedita. Ullam blanditiis cum atque esse nulla!',
      'Alumni: Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis vel dolores minus quis asperiores illum rem in, nihil sapiente ex sint quo accusamus nulla tempora vero eaque facere libero saepe aspernatur ut distinctio consequatur. Nostrum cupiditate iusto dignissimos eius quos corporis illo expedita. Ullam blanditiis cum atque esse nulla!',
      'Partners: Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis vel dolores minus quis asperiores illum rem in, nihil sapiente ex sint quo accusamus nulla tempora vero eaque facere libero saepe aspernatur ut distinctio consequatur. Nostrum cupiditate iusto dignissimos eius quos corporis illo expedita. Ullam blanditiis cum atque esse nulla!'],
      activeTab: 0,
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
  mounted(){
    this.people = this.$store.getters.allPeople;
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/projects.css";
.active{
  border: 2px solid black;
}
.inactive{
  border: 2px dashed rgba(128,128,128,0.4);
}
</style>