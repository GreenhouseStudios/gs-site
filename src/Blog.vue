<template>
<div class="w-75 center">

  <h1 class="ml6 mt5 f3">Recent Posts</h1>
  <div
    class="grid"
    v-if="!$store.getters.loading && posts"
  >
    
    <blog-card
      v-for="post in posts"
      :key="post.slug"
      :post="post"
      :title="post.title"
      :content="post.content"
      :date="post.date"
      :slug="post.slug"
    ></blog-card>
    <infinite-loading @infinite="loadMore" :distance="1" v-if="!busy && posts.length < $store.state.postCount"></infinite-loading>
    <div style="margin-bottom: 5%"></div>
  </div>
</div>
</template>

<script>
import BlogCard from "./components/BlogCard.vue";
export default {
  name: "Blog",
  components: { BlogCard },
  data() {
    return {
      posts: null,
      busy: false,
      page: 1,
    };
  },
  mounted() {
    this.posts = this.$store.getters.allPosts;
  },
  methods: {
    async loadMore($state) {
      this.posts = this.$store.getters.allPosts;
      if(this.busy || this.$store.getters.unloadedPosts <= 0) return;
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
  },
  computed: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/blog.css";
*{
  font-family: "Libre Franklin";
}
</style>