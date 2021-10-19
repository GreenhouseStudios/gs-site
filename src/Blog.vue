<template>
    <div class="grid">
        <blog-card
            v-for="post in posts"
            :key="post.slug"
            :title="post.title"
            :content="post.content"
            :date="post.date"
            :slug="post.slug"
      ></blog-card>
      <div style="margin-bottom: 5%"></div>
    </div>
</template>

<script>
import axios from "axios";
import BlogCard from "./components/BlogCard.vue";
export default {
  name: "Blog",
  components: { BlogCard },
  data() {
    return {
      posts: null,
    };
  },
  created() {
    axios
      .get(
        "https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/posts"
      )
      .then((res) => {
        this.posts = res.data;
        console.log(this.posts);
      });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/blog.css";
</style>