<!-- :style="'background-image: url(' + post.fimg_url + '), url(' + backupImg + ')'" -->
<template>
  <router-link class="grow" style="text-decoration: none" :to="`/blog/${slug}`">
    <div class="wrapper" alt="Blog Card Image">
      <div v-if="blueFrame">
        <img
      class="mb0 w-100 absolute frame"
        style="object-fit: cover"
        src="../../public/img/thumbnail-blue.png"
        alt=""
        >
      </div>
      <div v-if="mintFrame">
        <img
      class="mb0 w-100 absolute frame"
        style="object-fit: cover"
        src="../../public/img/thumbnail-mint.png"
        alt=""
        >
      </div>
      <div v-if="turquoiseFrame">
        <img
      class="mb0 w-100 absolute frame"
        style="object-fit: cover"
        src="../../public/img/thumbnail-turquoise.png"
        alt=""
        >
      </div>
      <div v-if="greenFrame">
        <img
      class="mb0 w-100 absolute frame"
        style="object-fit: cover"
        src="../../public/img/thumbnail-green.png"
        alt=""
        >
      </div>
      <img
        class="mb0 w-100"
        style="object-fit: cover"
        :src="post.fimg_url ? post.fimg_url : backupImg"
        alt=""
      />
      <div
        class="bg-light-gray w-100 pa0 bn absolute"
        style="height: 8rem"
        id="card-info"
      >
        <div class="ph3 pv2 mt1">
          <span class="ph2 pv1 white f6 fw6 mt5" style="background: #8CC947">{{mainCategory}}</span>
          <h3 class="mv1  f5 blogcardtext">{{ removeTags(title.rendered) }}</h3>
          <div class="absolute date-text">
          <span class="month">{{ getDate(date).month }} </span>
          <span class="day">{{ getDate(date).day }}, </span>
          <span class="year">{{ getDate(date).year }}</span>
          </div>
        </div>
        
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    post: {
      type: Object,
    },
    title: {
      type: Object,
    },
    content: {
      type: Object,
    },
    date: {
      type: String,
    },
    slug: {
      type: String,
    },
  },
  data() {
    return {
      isFlipped: false,
      backupImg:
        "https://dev-greenhouse-studios.pantheonsite.io/wp-content/uploads/2017/10/Greenhouse-Studios-Logos_STACKED-WORDMARK_TWO-COLOR-1.jpg",
    };
  },
  methods: {
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
    getDate(str) {
      const date = new Date(str); // 2009-11-10
      const month = date.toLocaleString("default", { month: "short" });
      const day = date.getDate();
      const year = date.getFullYear();
      const newdate = { month: month, day: day, year: year };
      return newdate;
    },
    getImg(str) {
      if (this.post.image) {
        src = this.post.image;
      } else {
        var regex = /<img.*?src="(.*?)"/;
        var src = regex.exec(str);
        if (src == null) {
          // Placeholder Image
          src = this.backupImg;
        } else {
          src = src[1];
        }
      }
      return src;
    },
  },
  computed: {
    mainCategory() {
      let result;
      if(this.post.categories[0] && this.$store.state.categories)
      result = this.$store.state.categories.find( x => x.id === this.post.categories[0])?.name
      else result = "none"
      if(!result) result = "none"
      return result;
    },
    blueFrame(){
     return this.post.custom_fields.blueFrame;
    },
    mintFrame(){
     return this.post.custom_fields.mintFrame;
    },
    turquoiseFrame(){
     return this.post.custom_fields.turquoiseFrame;
    },
    greenFrame(){
     return this.post.custom_fields.greenFrame;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/projects.css";

img {
  aspect-ratio: 1/1;
}
.title:hover {
  text-decoration: underline;
}

.date-text {
  bottom: 8px;
}
.blogcardtext {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
#card-info {
  top: 300px;
}
a:visited{
  color:black;
}

h3 {
  font-size: 18px;
}

.wrapper {
  height: 428px;
}

.frame{
  z-index: 10;
}
</style>