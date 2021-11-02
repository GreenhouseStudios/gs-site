<template>
    <div class="grid" v-if="!$store.getters.loading">
        <blog-card
            v-for="post in posts"
            :key="post.slug"
            :post="post"
            :title="post.title"
            :content="post.content"
            :date="post.date"
            :slug="post.slug"
      ></blog-card>
      <div style="margin-bottom: 5%"></div>
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
    };
  },
  updated() {
    this.posts = this.$store.getters.allPosts;
  },
  mounted () {
    this.posts = this.$store.getters.allPosts;
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/blog.css";
</style>