<template>
    <div id="blogmain">
      <div id="blogcontent" v-if="post">
        <h1>{{post.title.rendered}}</h1>
        <div class="credits"> Posted on {{getDate(post.date).month}} {{date.day}}, {{date.year}}</div>
        <div class="textbox">
          <span v-html="post.content.rendered"></span>
        </div>
        <!-- <p>This entry was posted in [Category] and tagged [tags]</p> -->
        <!-- <div class="nav-links row">
          <a style="float: left" href="#">← Previous</a>
          <a style="float: right" href="#">Next →</a>
        </div> -->
      </div>
    </div>
</template>

<script>
export default {
  name: "BlogRead",
  data() {
    return {
      date: "",
      post: null,
      slug: this.$route.params.slug
    };
  },
  created() {
    this.post = this.$store.getters.postBySlug(this.slug);
  },
  methods: {
      getDate(str){
        const date = new Date(str);  // 2009-11-10
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();
        this.date = {month: month, day: day, year: year}
        console.log(this.date);
        return this.date;
      },
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/blog.css";
body{
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.428571429;
  color: #333333;
}
h1{
  font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: #161616;
    margin-top: 20px;
    margin-bottom: 10px;
}
.credits{
  margin-bottom: 1.5em;
}
#blogmain{
  overflow: hidden;
  background: white;
}
#blogcontent{
  margin: 2em 20%;
}
@media (min-width: 38em) and (max-width: 52em) {
  #blogcontent{
    margin: 2em 10%;
  }
}
@media (max-width: 38em) {
  #blogcontent{
    margin: 2em;
  }
}
.textbox{
  height: 100%;
}
.alignleft{
  display: inline;
  float: left;
  margin-right: 1.5em;
  margin-bottom: 1.5em;
}
hr{
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eeeeee;
}
img{
  height: auto;
  max-width: 100%;
}
a{
  color: #717073;
  text-decoration: none;
}
#blogmain a:hover {
  text-decoration: none;
  color: #8cc947;
}
</style>