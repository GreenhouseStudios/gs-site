<template>
  <div id="blogmain">
    <div id="blogcontent" v-if="!$store.getters.loading && post">
      <div class="titledatecontainer">
        <div class="blogtitle">
          <h2 class="f1 blogtitle" v-html="post.title.rendered"></h2>
        </div>
        <div class="credits">
          Posted <br />
          <span class="date">{{
            new Date(post.date).toLocaleDateString("en-us")
          }}</span>
        </div>
      </div>
      <div id="img_and_byline">
        <img v-if="post.fimg_url" :src="post.fimg_url" class="w5" alt="" />
        <h3 v-if="post.custom_fields.byline" class="i font-weight-500 f5 fw5">{{ post.custom_fields.byline[0] }}</h3>
      </div>
      <div class="textbox">
        <span v-html="post.content.rendered"></span>
      </div>
      <div>
        <ul class="categorylist">
          <li v-for="cat in post.categories" :key="cat">
            <router-link :to="'/blog/category/' + cat">{{ getCategoryById(cat) }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <NotFound></NotFound>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NotFound from './NotFound.vue';
export default {
  name: "BlogRead",
  data() {
    return {
      date: "",
    };
  },

  // async created() {
  //     this.post = await this.$store.getters.postBySlug(this.$route.params.slug);
  // },

  computed: {
    ...mapGetters({
      postBySlug: "postBySlug",
      allCategories: "allCategories",
    }),
    post() {
      return this.postBySlug(this.$route.params.slug)
    },
    allCategories() {
      return this.$store.getters.allCategories
    },
  },
  methods: {
    getCategoryById(id) {
      for (let i = 0; i < this.allCategories.length; i++) {
        if (this.allCategories[i].id == id) {
          return this.allCategories[i].name;
        }
      }
    },
    removeTags(str) {
      if (str === null || str === "")
        return false;
      else {
        str = str.toString();
        str = str.replace(/&#8217;/g, "'");
        str = str.replace(/(<([^>]+)>)/gi, "");
        str = str.replace(/&amp;/g, "&");
        str = str.replace(/&nbsp;/g, " ");
      }
      return str;
    },
    getImg(str) {
      var regex = /<img.*?src="(.*?)"/;
      var src = regex.exec(str);
      if (src == null) {
        // Placeholder Image
        src =
          "https://dev-greenhouse-studios.pantheonsite.io/wp-content/uploads/2017/10/Greenhouse-Studios-Logos_STACKED-WORDMARK_TWO-COLOR-1.jpg";
      }
      else {
        src = src[1];
      }
      return src;
    },
    getAlt(str) {
      var regex = /<img.*?src="(.*?)" alt="(.*?)"/;
      var alt = regex.exec(str);
      if (alt == null) {
        // Placeholder Image
        alt = "A blog image";
      }
      else {
        alt = alt[2];
      }
      return alt;
    },
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      }
      else {
        return false;
      }
    },
  },
  components: { NotFound }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/blog.css";

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.428571429;
  color: #333333;
}

h2 {
  margin: 0px;
  border: 0px;
  padding-right: 10px;
}

h1 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: #161616;
  margin-top: 20px;
  margin-bottom: 10px;
}

.date {
  border: 3px solid #333333;
  padding: 3px;
  color: #333333;
  font-weight: 700;
}

.credits {
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  color: #333333;
  padding-top: 5px;
}

.titledatecontainer {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 2em, 20%;
}

#mainimg {
  float: left;
}

#blogmain {
  overflow: hidden;

}

#blogcontent {
  margin: 2em 20%;
}

@media (min-width: 38em) and (max-width: 52em) {
  #blogcontent {
    margin: 2em 10%;
  }
}

@media (max-width: 38em) {
  #blogcontent {
    margin: 2em;
  }
}

.textbox {
  height: 100%;
  margin-top: 5em;
}

.alignleft {
  display: inline;
  float: left;
  margin-right: 1.5em;
}

hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eeeeee;
}

img {
  height: auto;
  max-width: 100%;
}

#blogmain img {
  display: flex;
  margin-right: 15px;
  float: left;
}

@media (max-width: 38em) {
  #blogmain img {
    width: 100%;
    padding: 0;
    height: auto;
  }
}

#blogmain #mainimg {
  width: 100%;
  padding: 0;
  height: auto;
}

#blogmain a {
  color: #717073;
  font-weight: bold !important;
}

#blogmain a:hover {
  color: #8cc947;
}

iframe {
  width: 100%;
  margin: auto;
}

.wp-caption {
  margin: auto;
  width: 100% !important;
}

.wp-caption-text {
  font-size: 14px;
  text-align: center;
}

li {
  display: inline-block;
}

.categorylist {
  display: inline;
  list-style: none;
  padding: 0px;
}

.categorylist li {
  display: inline;
}

.categorylist li::after {
  content: "-";
}

.categorylist li:last-child::after {
  content: "";
}
</style>