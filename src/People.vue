<template>
  <div v-if="!$store.getters.loading">
    <div class="w-70-l w-90 center f3-ns f4 ma5 pv6-ns pv3 fw4 i">
      {{ tabIntros[activeTab] }}
    </div>
    <div
      id="tab-btn-container"
      class="w-50-ns center flex flex-row justify-center bb"
    >
      <button
        @click="changeActiveTab(index)"
        class="ma3 pa3-ns pa2 br2 ma1 bg-transparent w5"
        id="subnav-btn"
        :class="{ active: activeTab === index, inactive: activeTab !== index }"
        v-for="(tab, index) in tabs"
        :key="tab"
      >
        <h3 class="ma0 f1 f4-ns f6" style="color: #333333;">{{ tab }}</h3>
      </button>
    </div>
    <div id="active-people w-100" v-show="activeTab === 0">
      <div class="grid" v-if="activePeople.length > 0">
        <person-card
          v-for="(person, index) in activePeople"
          :key="person.slug"
          :person="person"
          :index="index"
        ></person-card>
      </div>
    </div>
    <div
      v-if="alumni.length > 0"
      v-show="activeTab === 1"
      class="relative center w-50-ns w-90 pa3"
    >
      <ul
        class="relative top-0 dib alumni-list w-50 tc"
        style="vertical-align: top"
      >
        <li
          class="pa2"
          v-for="a in alumni.slice(0, alumni.length / 2)"
          :key="a.title.rendered"
        >
          {{ a.title.rendered }}
        </li>
      </ul>
      <ul
        class="relative top-0 dib alumni-list w-50 tc"
        style="vertical-align: top"
      >
        <li
          class="pa2"
          v-for="b in alumni.slice(alumni.length / 2)"
          :key="b.title.rendered"
        >
          {{ b.title.rendered }}
        </li>
      </ul>
    </div>
    <div v-show="activeTab === 2">
      <div class="grid partner">
        <img v-for="p in partners" :key="p" class="partner-img" :src="p" />
      </div>
    </div>
  </div>
</template>

<script>
import PersonCard from "./components/PersonCard.vue";
import _ from "lodash";
export default {
  name: "People",
  components: { PersonCard },
  data() {
    return {
      people: [],
      posts: null,
      imgs: null,
      partners: [
        require("../public/img/UConn_Library_Logo.png"),
        require("../public/img/UConn_Humanities_Institute.png"),
        require("../public/img/Andrew_W_Mellon_Foundation_Logo.png"),
      ],
      tabs: ["Active", "Alumni", "Partners"],
      tabIntros: [
        "Active: Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis vel dolores minus quis asperiores illum rem in, nihil sapiente ex sint quo accusamus nulla tempora vero eaque facere libero saepe aspernatur ut distinctio consequatur. Nostrum cupiditate iusto dignissimos eius quos corporis illo expedita. Ullam blanditiis cum atque esse nulla!",
        "Alumni: Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis vel dolores minus quis asperiores illum rem in, nihil sapiente ex sint quo accusamus nulla tempora vero eaque facere libero saepe aspernatur ut distinctio consequatur. Nostrum cupiditate iusto dignissimos eius quos corporis illo expedita. Ullam blanditiis cum atque esse nulla!",
        "Partners: Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis vel dolores minus quis asperiores illum rem in, nihil sapiente ex sint quo accusamus nulla tempora vero eaque facere libero saepe aspernatur ut distinctio consequatur. Nostrum cupiditate iusto dignissimos eius quos corporis illo expedita. Ullam blanditiis cum atque esse nulla!",
      ],
      activeTab: 0,
    };
  },
  methods: {
    changeActiveTab(i) {
      this.activeTab = i;
      this.$emit('subnav-change')
    }
  },
  computed: {
    peopleByLastName() {
      return _.sortBy(this.people, [
        function (o) {
          return o.custom_fields.last_name[0].toLowerCase();
        },
      ]);
    },
    alumni() {
      if (this.people.length > 0) {
        return _.sortBy(
          this.people.filter((p) => p.categories.indexOf(86) >= 0),
          function (o) {
            return o.custom_fields.last_name[0].toLowerCase();
          }
        );
      } else return [];
    },
    activePeople() {
      if (!this.$store.getters.loading && this.people.length > 0) {
        return _.sortBy(
          this.people.filter((p) => p.categories.indexOf(86) < 0),
          [
            function (o) {
              return o.custom_fields.last_name[0];
            },
          ]
        );
      } else return [];
    },
  },
  updated() {
    this.people = this.$store.getters.allPeople;
  },
  mounted() {
    this.people = this.$store.getters.allPeople;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/projects.css";
.active {
  border: 2px solid black;
  background-color: #8cc947;
}
.inactive {
  border: 2px dashed rgba(128, 128, 128, 0.4);
}
.partner {
  grid-template-rows: repeat(4, 200px) !important;
}
.partner-img {
  margin: auto;
}

.alumni-list {
  font-family: "Libre-Franklin", Arial, Helvetica, sans-serif;
  font-size: 25px;
  margin: 0;
  padding: 0;
  position: relative;
  list-style-type: none;
}
#tab-btn-container {
  display: flex;
  flex-direction: row;
}
#subnav-btn {
  color: #8cc947;
  border: 2px solid #8cc947;
}
#subnav-btn:hover {
  background-color: #bde491;
  color: white;
}
</style>