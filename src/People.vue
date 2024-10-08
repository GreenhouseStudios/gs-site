<template>
  <div v-if="!$store.getters.loading">
    <div class="w-50 f3-ns f4 mh5 mv3 mh6-l mv3-l pv3-ns pv3 fw4">
      <h2 class="page-title f1">People</h2>
      We are an interdisciplinary team with diverse backgrounds who bring their
      individual interests and passions into the Greenhouse Studios community.
    </div>
    <div id="tab-btn-container" class="w-50-ns center flex flex-row justify-around ">
      <button @click="changeActiveTab(index)" class="ma3 pa3 br2 ma1 bg-transparent w5" id="subnav-btn"
        :class="{ active: activeTab === index, inactive: activeTab !== index }" v-for="(tab, index) in tabs" :key="tab">
        <h3 class="ma0 f1 f4-ns f4" style="color: #333333">{{ tab }}</h3>
      </button>
    </div>
    <div id="active-people w-100" v-show="activeTab === 0">
      <div class="blog-grid pa4" v-if="activePeople.length > 0">
        <person-card v-for="(person, index) in activePeople" :key="person.slug" :person="person" :index="index"
          ref="cards"></person-card>
      </div>
    </div>
    <div
      v-if="alumni.length > 0"
      v-show="activeTab === 1"
      class="relative center w-50-ns w-75-m w-90 pa3-ns f3-ns f5"
    >
      <ul
        class="relative top-0 dib alumni-list w-third tc"
        style="vertical-align: top"
      >
        <li
          class="pa2 f4"
          v-for="a in alumni.slice(0, alumni.length / 3)"
          :key="a.title.rendered"
        >
          {{ a.custom_fields.first_name[0] +
            " " +
            a.custom_fields.last_name[0]}}
        </li>
      </ul>
      <ul
        class="relative top-0 dib alumni-list w-third tc"
        style="vertical-align: top"
      >
        <li
          class="pa2 f4"
          v-for="a in alumni.slice(alumni.length / 3, (2 * alumni.length) / 3)"
          :key="a.title.rendered"
        >
          {{ a.custom_fields.first_name[0] +
            " " +
            a.custom_fields.last_name[0] }}
        </li>
      </ul>
      <ul
        class="relative top-0 dib alumni-list w-third tc"
        style="vertical-align: top"
      >
        <li
          class="pa2 f4"
          v-for="a in alumni.slice((2 * alumni.length) / 3)"
          :key="a.title.rendered"
        >
          {{ a.custom_fields.first_name[0] +
            " " +
            a.custom_fields.last_name[0] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PersonCard from "./components/PersonCard.vue";
import _ from "lodash";

const PEOPLE_CAT_ALUMNI = 98;

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
      tabs: [
        "Active",
        "Alumni",
        // "Partners", "Governance"
      ],
      activeTab: 0,
    };
  },
  methods: {
    changeActiveTab(i) {
      this.activeTab = i;
      this.$emit("subnav-change");
    },
    findPersonYOffset(slug) {
      let cardIndex = this.activePeople.findIndex(x => x.slug === slug);
      return ((cardIndex + 1) / 3) * 420 + 780;
    }
  },
  computed: {
    peopleByLastName() {
      return _.sortBy(this.people, [
        function (o) {
          return o.custom_fields.last_name
            ? o.custom_fields.last_name[0].toLowerCase()
            : "";
        },
      ]);
    },
    alumni() {
      let alumniList = [];
      let people = this.people;
      for (let i = 0; i < people.length; i++) {
        for (let x = 0; x < people[i].people_category.length; x++) {
          if (people[i].people_category[x] == PEOPLE_CAT_ALUMNI) {
            alumniList.push(people[i])
          }
        }
      }
      return _.sortBy(alumniList, function (o) {
            return o.custom_fields.last_name
              ? o.custom_fields.last_name[0].toLowerCase()
              : "";});
    },
    activePeople() {
      if (!this.$store.getters.loading && this.people.length > 0) {
        return _.sortBy(
          this.people.filter((p) => p.people_category.indexOf(PEOPLE_CAT_ALUMNI) < 0),
          [
            function (o) {
              return o.custom_fields.last_name
                ? o.custom_fields.last_name[0].toLowerCase()
                : "";
            },
          ]
        );
      } else return [];
    },

  },
  updated() {
    this.people = this.$store.getters.allPeople;
  },
  async mounted() {
    this.loading = true;
    await this.$store.dispatch("getPeople",1);
    this.people = this.$store.getters.allPeople;
    if (this.$route.params.name) {
      setTimeout(() => {
        let offset = this.findPersonYOffset(this.$route.params.name);
        window.scrollTo({
          top: offset,
          left: 0,
          behavior: "smooth",
        });
      }, 100);
    }
    this.loading = false;
  },
  beforeRouteLeave(to, from, next) {
    console.log(to)
    console.log(from);
    this.$refs.cards.map(x => x.reset())
    next();
  }
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
  margin: 0;
  padding: 0;
  position: relative;
  list-style-type: none;
}

#tab-btn-container {
  display: flex;
  flex-direction: row;
  padding: 16px 0px;
}

@media (max-width: 660px) {
  #tab-btn-container {
    flex-direction: column;
    align-items: center;
  }
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