<template>
  <div>
    <div class="w-80 f3-ns f4 mh5 mv6 ma6-l pv3-ns pv3 fw4">
      <h2 class="page-title f1">Blog</h2>
      <p>The Greenhouse Studios Blog is the best place to catch up on the latest news about our research and initiatives
      </p>
      <select v-model="selectedValue" class="filtering" id="filteredCategory">
        <option value="" selected disabled hidden>Select</option>
        <option v-for="cat in allCategories" :key="cat" v-bind:value="cat.id">
          {{ cat.name }}
        </option>
      </select>
    </div>

    <div class="grid"
      v-if="!$store.getters.loading && posts && selectedValue === '' && filterByRoute.length == 0 && filtered.length == 0">
      <blog-card v-for="post in posts" :key="post.slug" :post="post" :title="post.title" :content="post.content"
        :date="post.date" :slug="post.slug"></blog-card>
      <infinite-loading @infinite="loadMore" :distance="1"
        v-if="!busy && posts.length < $store.state.postCount"></infinite-loading>
      <div style="margin-bottom: 5%"></div>
    </div>

    <div class="grid" v-if="!$store.getters.loading && posts && filterByRoute.length != 0">
      <blog-card v-for="post in filterByRoute" :key="post.slug" :post="post" :title="post.title" :content="post.content"
        :date="post.date" :slug="post.slug"></blog-card>
      <infinite-loading @infinite="loadMore" :distance="1"
        v-if="!busy && posts.length < $store.state.postCount"></infinite-loading>
      <div style="margin-bottom: 5%"></div>
    </div>

    <div class="grid" v-else-if="!$store.getters.loading && posts && selectedValue !== ''">
      <blog-card v-for="post in filtered" :key="post.slug" :post="post" :title="post.title" :content="post.content"
        :date="post.date" :slug="post.slug"></blog-card>
      <infinite-loading @infinite="loadMore" :distance="1"
        v-if="!busy && posts.length < $store.state.postCount"></infinite-loading>
      <div style="margin-bottom: 5%"></div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BlogCard from "./components/BlogCard.vue";
export default {
  name: "Blog",
  components: { BlogCard },
  data() {
    return {
      posts: null,
      busy: false,
      selectedValue: '',
      page: 1,
    };
  },
  mounted() {
    this.posts = this.$store.getters.allPosts;
  },
  updated() {
    if (this.$route.params.id != undefined) {
      this.selectedValue = this.$route.params.id;
    }
  },
  /*updated() {
    console.log(this.$route);
    if (this.$route != '/blog/category/') {
      let id = this.$route.params.id;
      alert(id);
      //let element = document.getElementById(el);
      this.selectedValue = id;
    }
  },*/
  methods: {
    async loadMore($state) {
      this.posts = this.$store.getters.allPosts;
      if (this.busy || this.$store.getters.unloadedPosts <= 0) return;
      this.busy = true;
      this.page += 1;
      this.$store.dispatch("getMorePosts", this.page).then(() => {
        if (this.posts.length < this.$store.state.postCount) {
          $state.loaded();
        } else {
          $state.complete();
        }
        this.busy = false;
      });
    },
    getSelectedItem(el) {
      var e = document.getElementById(el);
      var cat = e.options[e.selectedIndex].value;
      alert(cat);
    },
    getCategoryById(id) {
      for (let i = 0; i < this.allCategories.length; i++) {
        if (this.allCategories[i].id == id) {
          return this.allCategories[i].name;
        }
      }
    },
  },
  computed: {
    ...mapGetters({
      postBySlug: "postBySlug",
      allCategories: "allCategories",
      allTags: "allTags",
      //getCategoryById: "categoryById",
    }),
    allCategories() {
      return this.$store.getters.allCategories;
    },
    allTags() {
      return this.$store.getters.allTags;
    },
    /*category() {
      return this.categoryById(this.$route.params.id)
    },*/
    filterByRoute() {
      let id;
      let filteredPosts = [];
      let posts = this.$store.getters.allPosts;
      if (this.$route != '/blog') {
        id = this.$route.params.id;
        posts.forEach(function (post) {
          let categories = post.categories;
          categories.forEach(function (cat) {
            if (cat == id) {
              filteredPosts.push(post);
            }
          })
        })
      }
      return filteredPosts;
    },
    filtered() {
      let filteredPosts = [];
      let posts = this.$store.getters.allPosts;
      let selectedCategory = this.selectedValue;
      posts.forEach(function (post) {
        let categories = post.categories;
        categories.forEach(function (cat) {
          if (cat == selectedCategory) {
            filteredPosts.push(post);
          }
        })
      })
      return filteredPosts;
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/blog.css";
</style>