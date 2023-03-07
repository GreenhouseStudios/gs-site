<template>
  <div v-if="!$store.getters.loading">
    <div class="w-50 f3-ns f4 mh5 mv6 ma6-l pv3-ns pv3 fw4">
      <h2 class="page-title f1">People</h2>
      We are an interdisciplinary team with diverse backgrounds who bring their
      individual interests and passions into the Greenhouse Studios community.
    </div>
    <div id="tab-btn-container" class="w-50-ns center flex flex-row justify-around bb">
      <button @click="changeActiveTab(index)" class="ma3 pa3 br2 ma1 bg-transparent w5" id="subnav-btn"
        :class="{ active: activeTab === index, inactive: activeTab !== index }" v-for="(tab, index) in tabs" :key="tab">
        <h3 class="ma0 f1 f4-ns f4" style="color: #333333">{{ tab }}</h3>
      </button>
    </div>
    <div id="active-people w-100" v-show="activeTab === 0">
      <div class="grid pa4" v-if="activePeople.length > 0">
        <person-card v-for="(person, index) in activePeople" :key="person.slug" :person="person" :index="index"
          ref="cards"></person-card>
      </div>
    </div>
    <div v-if="alumni.length > 0" v-show="activeTab === 1" class="relative center w-50-ns w-75-m w-90 pa3-ns f3-ns f5">
      <ul class="relative top-0 dib alumni-list w-third tc" style="vertical-align: top">
        <li class="pa2" v-for="a in alumni.slice(0, alumni.length / 3)" :key="a.title.rendered">
          {{ a.title.rendered }}
        </li>
      </ul>
      <ul class="relative top-0 dib alumni-list w-third tc" style="vertical-align: top">
        <li class="pa2" v-for="a in alumni.slice(alumni.length / 3, (2 * alumni.length) / 3)" :key="a.title.rendered">
          {{ a.title.rendered }}
        </li>
      </ul>
      <ul class="relative top-0 dib alumni-list w-third tc" style="vertical-align: top">
        <li class="pa2" v-for="b in alumni.slice((2 * alumni.length) / 3)" :key="b.title.rendered">
          {{ b.title.rendered }}
        </li>
      </ul>
    </div>
    <!-- <div v-show="activeTab === 2">
      <div class="grid partner">
        <img v-for="p in partners" :key="p" class="partner-img" :src="p" />
      </div>
    </div> -->
    <!-- <div v-show="activeTab === 3">
      <div class="relative center w-50-ns w-90">
        <div class="ma2 mb4">
          <h3 class="f3">Greenhouse Studios Leadership</h3>
          <p class="f4">Director, Tom Scheinfeldt</p>
          <p class="f4">Associate Director (Research), Clarissa Ceglio</p>
          <p class="f4">Associate Director (Coordinator), Sara Sikes</p>
        </div>

        <div class="ma2 mb4">
          <h3 class="f3">Steering Committee</h3>
          <p class="f4">CLAS: Alexis Boylan, Anke Finger, Brendan Kane,</p>
          <p class="f4">
            SFA: Clarissa Ceglio, Cora Lynn Deibler, Tom Scheinfeldt
          </p>
          <p class="f4">
            University Library: Greg Colati, Sara Harrington, Sara Sikes
          </p>
        </div>

        <div class="ma2 mb4">
          <h3 class="f3">Advisory Board</h3>
          <p class="f4">
            Matthew Battles, Associate Director, metaLAB, Harvard University
          </p>
          <p class="f4">
            Michael Edson, Associate Director/Head of Digital at United Nations
            Live Museum for Humanity, Copenhagen, Denmark
          </p>
          <p class="f4">
            Kathleen Fitzpatrick, PhD, Director of Scholarly Communication,
            Modern Language Association
          </p>
          <p class="f4">
            Matthew K. Gold, PhD, Director, GC Digital Scholarship Lab, City
            University of New York
          </p>
          <p class="f4">
            Ian Gonsher, MFA, Associate Director, Brown Creative Mind Initiative
          </p>
          <p class="f4">Tara McPherson, PhD, Founding Editor, Vectors</p>

          <p class="f4">
            Amy Papaelias, MFA Intermedia Design, Assistant Professor of Graphic
            Design/Foundations, Fine Art Department, State University of New
            York at New Paltz
          </p>
          <p class="f4">
            Barbara Rockenbach, MSLIS, Director, Humanities & History Libraries,
            Columbia University Libraries/Information Services
          </p>
        </div>
      </div>
    </div> -->
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
          if (people[i].people_category[x] == 98) {
            alumniList.push(people[i])
          }
        }
      }
      return alumniList;
    },
    /*alumni() {
      if (this.people.length > 0) {
        return _.sortBy(
          this.people.filter((p) => p.categories.indexOf(86) >= 0),
          function (o) {
            return o.custom_fields.last_name
              ? o.custom_fields.last_name[0].toLowerCase()
              : "";
          }
        );
      } else return [];
    },*/
    activePeople() {
      if (!this.$store.getters.loading && this.people.length > 0) {
        return _.sortBy(
          this.people.filter((p) => p.categories.indexOf(86) < 0),
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
  mounted() {
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