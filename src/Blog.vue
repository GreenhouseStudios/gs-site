<template>
  <div class="w-75 center">
    <span class="flex justify-between items-center ma2">
      <h1 class="f3">Recent Posts</h1>

      <div class="relative flex items-center">
        <select
          v-model="selectedValue"
          id="category-select"
          class="f6"
          @change="$router.push('/blog/category/' + $event.target.value)"
        >
          <option value="" class="pa0" selected disabled hidden>All</option>
          <option
            v-for="cat in $store.state.categories"
            :key="cat.slug"
            v-bind:value="cat.slug"
          >
            {{ cat.name }}
          </option>
        </select>
        <div class="reset" v-if="selectedValue != null">
          <router-link :to="'/blog'">
            <button class="w2 h2 ma2 bg-white grow border-1">X</button>
          </router-link>
        </div>
      </div>
    </span>

    <div class="center w-60 relative">
      <div class="blog-grid" v-if="!$store.getters.loading && posts">
        <blog-card
          v-for="post in filter"
          :key="post.slug"
          :post="post"
          :title="post.title"
          :content="post.content"
          :date="post.date"
          :slug="post.slug"
        ></blog-card>
        <infinite-loading
          @infinite="loadMore"
          :distance="1"
          v-if="!busy && posts.length < $store.state.postCount"
        ></infinite-loading>
        <div style="margin-bottom: 5%"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BlogCard from "./components/BlogCard.vue";
export default {
  name: "Blog",
  components: { BlogCard },
  data() {
    return {
      posts: null,
      busy: false,
      selectedValue: "",
      page: 1,
    };
  },
  mounted() {
    this.posts = this.$store.getters.allPosts;
  },
  updated() {
    if (this.$route.params.id) {
      this.selectedValue = this.$route.params.id;
    } else {
      this.selectedValue = "";
    }
  },
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
    changeRoute(e) {
      this.$router.push("/category/" + e.target.value);
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
      return this.$store.state.categories;
    },
    allTags() {
      return this.$store.getters.allTags;
    },
    filter() {
      let id = this.$route.params.id;
      let filteredPosts = [];
      let posts = this.$store.getters.allPosts;
      let allCategories = this.$store.getters.allCategories;
      //let selectedCategory = this.selectedValue;
      //let category = (id != undefined) ? id : selectedCategory
      if (id != undefined) {
        posts.forEach(function (post) {
          let categories = post.categories;
          categories.forEach(function (cat) {
            allCategories.forEach(function (category) {
              if (cat == category.id) {
                cat = category.slug;
              }
            });
            if (cat == id) {
              filteredPosts.push(post);
            }
          });
        });
      } else {
        posts.forEach(function (post) {
          filteredPosts.push(post);
        });
      }
      return filteredPosts;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/blog.css";

#category-select {
  width: 150px;
  padding: 10px;
}
* {
  font-family: "Libre Franklin";
}
</style>