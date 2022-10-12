<template>
    <div id="blogmain">
      <div id="blogcontent" v-if="post">
        <img v-if="isMobile()" id="mainimg" class="img alignleft" 
          v-bind:src="(`${getImg(post.content.rendered)}`)" 
          v-bind:alt="(`${getAlt(post.content.rendered)}`)"/>
          <div class="titledatecontainer">
          <div class="blogtitle">
        <h2 class="f1 blogtitle" v-html="post.title.rendered"></h2>
      </div>
        <div class="credits"> Posted <br> <span class="date">{{new Date(post.date).toLocaleDateString('en-us')}}</span></div>
      </div>
        <div class="textbox">
          <span v-html="post.content.rendered"></span>
        </div>
      </div>
      <div v-else>
        <h2>There was a problem fetching this blog post.</h2>
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
    };
  },
  mounted () {
    this.post = this.$store.getters.postBySlug(this.$route.params.slug);
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        console.log(previousParams)
        this.post = this.$store.getters.postBySlug(toParams.slug)
      }
    );
  },
  methods: {
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
        src = "https://dev-greenhouse-studios.pantheonsite.io/wp-content/uploads/2017/10/Greenhouse-Studios-Logos_STACKED-WORDMARK_TWO-COLOR-1.jpg"
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "./assets/blog.css";
body{
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.428571429;
  color: #333333;
}
h2{
  margin:0px;
  border:0px;
  padding-right:10px;
}

h1{
  font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: #161616;
    margin-top: 20px;
    margin-bottom: 10px;
}
.date{
  border: 3px solid #333333;
  padding: 3px;
  color: #333333;
  font-weight: 700;
}
.credits{
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
#blogmain img{
  display: flex;
  margin-right: 15px;
  float: left;
}
@media (max-width: 38em) {
  #blogmain img{
    width: 100%;
    padding: 0;
    height: auto;
  }
}
#blogmain #mainimg{
  width: 100%;
  padding: 0;
  height: auto;
}
#blogmain a{
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
.wp-caption{
  margin: auto;
  width: 100% !important;
}
.wp-caption-text{
  font-size: 14px;
  text-align: center;
}

</style>