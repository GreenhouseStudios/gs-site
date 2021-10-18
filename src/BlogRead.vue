<template>
    <div id="blogmain">
      <div id="blogcontent" v-if="post">
        <h1>{{post.title.rendered}}</h1>
        <div class="credits"> Posted on {{getDate(post.date).month}} {{date.day}}, {{date.year}} by [author]</div>
        <p><em>{{removeTags(post.content.rendered).split('.\n', 1)[0]}}</em></p>
        <hr>
        <div class="textbox">
          <p>
            <img class="img alignleft" src="../public/img/GS_G_logo.png" />
            {{getTextblock(post.content.rendered)}}
          </p>
        </div>
        <p>This entry was posted in [Category] and tagged [tags]</p>
        <div class="nav-links row">
          <a style="float: left" href="#">← Previous</a>
          <a style="float: right" href="#">Next →</a>
        </div>
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
    getTextblock(str){
      var textblock = this.removeTags(str);
      var lines = textblock.split('\n');
      lines.splice(0,1);
      return lines.join('\n');
    },
    removeTags(str) {
        if ((str===null) || (str===''))
        return false;
        else{
          str = str.toString();
          str = str.replace(/&#8217;/g, "'");
          str = str.replace( /(<([^>]+)>)/ig, '');
          str = str.replace(/&amp;/g, "&");
          str = str.replace(/&nbsp;/g, " ");
        }
        return str;
      },
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
.img{
  height: auto;
  max-width: 50%;
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