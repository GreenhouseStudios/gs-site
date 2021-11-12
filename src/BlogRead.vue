<template>
    <div id="blogmain" v-if="!$store.state.loading">
      <div id="blogcontent" v-if="post">
        <img v-if="isMobile()" id="mainimg" class="img alignleft" 
          v-bind:src="(`${getImg(post.content.rendered)}`)" 
          v-bind:alt="(`${getAlt(post.content.rendered)}`)"/>
        <h2 class="f1">{{removeTags(post.title.rendered)}}</h2>
        <div class="credits"> Posted on {{getDate(post.date).month}} {{date.day}}, {{date.year}}</div>
        <div class="textbox">
          <span v-if="!isMobile()" v-html="post.content.rendered"></span>
          <span v-else>{{removeTags(post.content.rendered)}}</span> 
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
  mounted() {
    this.post = this.$store.getters.postBySlug(this.slug);
  },
  updated () {
    this.post = this.$store.getters.postBySlug(this.slug);
  },
  methods: {
    getDate(str){
      const date = new Date(str);  // 2009-11-10
      const month = date.toLocaleString('default', { month: 'long' });
      const day = date.getDate();
      const year = date.getFullYear();
      this.date = {month: month, day: day, year: year}
      return this.date;
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
    getImg(str){
      var regex = /<img.*?src="(.*?)"/;
      var src = regex.exec(str);
      if(src == null){
        // Placeholder Image
        src = "http://greenhousestudios.uconn.edu/wp-content/uploads/sites/1957/2016/10/Greenhouse-Studios-Logos-STACKED-TWO-COLOR.png"
      }else{
        src = src[1];
      }
      return src;
    },
    getAlt(str){
      var regex = /<img.*?src="(.*?)" alt="(.*?)"/;
      var alt = regex.exec(str);
      if(alt == null){
        // Placeholder Image
        alt = "A blog image"
      }else{
        alt = alt[2];
      }
      return alt;
    },
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
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
#mainimg{
  width: 100%;
  height: auto;
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