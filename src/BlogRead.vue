<template>
  <div id="blogmain">
    <div v-if="!$store.getters.loading && post">
      <div
        v-bind:style="
          this.post.custom_fields.headerBgColor
            ? { backgroundColor: this.post.custom_fields.headerBgColor[0] }
            : { backgroundColor: '#8cc947' }
        "
        class="flex pa6-l pa2 items-center justify-center white relative"
        id="blog-read-header"
      >
        <router-link
          class="absolute left-2 top-2 fw7 f4"
          id="back-link"
          to="/blog"
          ><i>&#8592;</i> Back</router-link
        >
        <div
          class="w-two-thirds-ns w-90 justify-center items-center flex flex-row-ns flex-column center"
        >
          <img
            v-if="post.fimg_url && showFeaturedImg"
            :src="post.fimg_url"
            id="featured-img"
            alt=""
            class="mr4-ns shadow-2 mb3 mw6-ns w5-m dn di-ns"
          />
          <div class="blogtitle lh-solid ml4-ns ph2">
            <div>
              <h2 class="f1" v-html="post.title.rendered"></h2>
              <img
                v-if="post.fimg_url && showFeaturedImg"
                :src="post.fimg_url"
                id="featured-img"
                alt=""
                class="mr4-ns shadow-2 mv3 w6 dn-ns"
              />
              <div
                class="f4 pv2 flex items-center justify-around justify-start-ns mb2"
              >
                <img
                  :src="authorImage"
                  alt=""
                  class="author-image br-100 mr3-ns"
                />
                <div class="">
                  <div class="fw7 pa1">{{ authorName }}</div>
                  <div class="fw2 pa1">{{ authorRole }}</div>
                </div>
              </div>
              <div class="pa1 w-100 flex items-center">
                <span class="mr5">{{
                  new Date(post.date).toLocaleDateString("en-us")
                }}</span>
                <span class="f5 fw2 mv3-ns">{{ readTime }} minute read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          class="textbox w-50-l w-90 pv5-ns pv1 center"
          style="line-height: 2.2rem"
        >
          <span class="dn di-l"><share-links></share-links></span>
          <h3 v-if="post.custom_fields.byline" class="i font-weight-500 f5 fw5">
            {{ post.custom_fields.byline[0] }}
          </h3>
          <span v-html="post.content.rendered"></span>
          <div class="mv2">
            <span class="dn-l di"><share-links></share-links></span>
            <p class="di fw7 mr3">Topics:</p>
            <a
              :href="'/blog/categories/' + cat.name"
              class="ph2 pv1 f6 fw6 mh2 category"
              style="background: #8cc947"
              v-for="cat in categoryList"
              :key="cat.name"
              >{{ cat.name }}</a
            >
          </div>
          <div class="text-1 mv5" v-if="getSuggestedPosts.length > 0">
            <div class="fprojects-text">
              <h3 class="title-2">Suggested Blog Posts</h3>
            </div>
            <div class="suggestedPosts">
              <blog-card
                class="mh3"
                v-for="p in getSuggestedPosts"
                :key="p.slug"
                :post="p"
                :title="p.title"
                :content="p.content"
                :date="p.date"
                :slug="p.slug"
              ></blog-card>
            </div>
          </div>
        </div>
      </div>
      <div v-if="$store.getters.loading">
        <Loading></Loading>
      </div>
      <div v-if="!$store.getters.loading && !post">
        <NotFound></NotFound>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BlogCard from "./components/BlogCard.vue";
import NotFound from "./NotFound.vue";
import ShareLinks from "./components/ShareLinks.vue";
import Loading from "./components/Loading.vue";
export default {
  name: "BlogRead",
  components: { NotFound, ShareLinks, Loading, BlogCard },
  data() {
    return {
      date: "",
    };
  },
  computed: {
    ...mapGetters({
      postBySlug: "postBySlug",
      allCategories: "allCategories",
      nextPost: "nextPost",
      previousPost: "previousPost",
    }),
    post() {
      return this.postBySlug(this.$route.params.slug);
    },
    allCategories() {
      return this.$store.getters.allCategories;
    },
    getSuggestedPosts() {
      let allPosts = this.$store.state.posts;
      let numSuggested = 0;
      let suggestedPosts = [];
      let currentCategories = this.post.categories;
      for (let i = 0; i < allPosts.length; i++) {
        if (allPosts[i] != this.post) {
          let postCategories = allPosts[i].categories;
          for (let x = 0; x < currentCategories.length; x++) {
            if (postCategories.includes(currentCategories[x])) {
              suggestedPosts.push(allPosts[i]);
              numSuggested += 1;
            }
            break;
          }
        }
        if (numSuggested == 3) {
          break;
        }
      }
      return suggestedPosts;
    },
    next() {
      return this.nextPost(this.post);
    },
    prev() {
      return this.previousPost(this.post);
    },
    wordCount() {
      if (this.post.content)
        return this.post.content.rendered.split(" ").length;
      return 0;
    },
    readTime() {
      if (this.wordCount) return Math.round(this.wordCount / 200);
      else return null;
    },
    showFeaturedImg() {
      if (this.post?.custom_fields?.show_featured_img?.length)
        return this.post?.custom_fields?.show_featured_img[0] !== "false";
      else return true;
    },
    headerBgColor() {
      if (this.post.custom_fields.headerBgColor) {
        return this.post.custom_fields.headerBgColor;
      } else return "#de7f42";
    },
    authorName() {
      return this.post._embedded.author[0].name;
    },
    author(){
      return this.post._embedded.author[0]
    },
    authorPersonRecord(){
      let author = this.post._embedded.author[0].name;
      return this.$store.state.people.find(
        (x) => x.title.rendered === author
      );
    },
    authorRole() {
      return this.$store.state.peopleCategories.find( x => x.id === this.authorPersonRecord?.people_category[0])?.name;
    },
    authorImage() {
      let result = this.$store.state.people.find(
        (p) => p.title.rendered === this.post._embedded.author[0].name
      );
      result = result?.image.source_url;
      if (!result)
        result =
          "https://dev-greenhouse-studios.pantheonsite.io/wp-content/uploads/2017/01/g_icon-placeholder-1.jpg";
      return result;
    },
    categoryList() {
      let result;
      if (this.post.categories && this.$store.state.categories)
        result = this.$store.state.categories.filter((x) =>
          this.post.categories.includes(x.id)
        );
      return result;
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
    getCategorySlug(id) {
      for (let i = 0; i < this.allCategories.length; i++) {
        if (this.allCategories[i].id == id) {
          return this.allCategories[i].slug;
        }
      }
    },
    removeTags(str) {
      if (str === null || str === "") return false;
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
      } else {
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
      } else {
        alt = alt[2];
      }
      return alt;
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/blog.css";

body {
  font-family: "Libre Franklin", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.428571429;
  color: #333333;
}

h2 {
  margin: 5px;
  border: 0px;
  padding-right: 10px;
  font-size: 24px;
  line-height: 2.5rem;
}

.category {
  color: white;
  text-decoration: none;
}

.category:hover {
  color: white;
  text-decoration: underline;
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
  background: #8cc947;
  padding: 5px 10px;
  color: #fff;
  font-weight: 700;
  border-radius: 20px;
  font-size: 18px;
}

.credits {
  font-weight: 700;
  font-size: 18px;
  color: white;
  padding-top: 5px;
}

.blogtitle {
  max-width: 600px;
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

@media (min-width: 600px) {
  h2 {
    margin: 0px;
    border: 0px;
    padding-right: 10px;
    font-size: 32px;
  }
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

@media (max-width: 38em) {
  #blogmain img {
    padding: 0;
    height: auto;
  }
}

#blogmain #mainimg {
  width: 100%;
  padding: 0;
  height: auto;
}

/* #blogmain a:hover {
  color: #8cc947;
} */
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

#blog-read-header {
  background-image: url("../public/bgImg/BlogHeaderBG.png");
  min-height: 560px;
  background-size: cover;
  background-repeat: no-repeat;
}

.author-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

#back-link {
  color: white !important;
  text-decoration: none;
}

#back-link:hover {
  color: white !important;
  text-decoration: underline;
}

* {
  font-family: Libre Franklin;
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

.suggestedPosts {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
</style>
