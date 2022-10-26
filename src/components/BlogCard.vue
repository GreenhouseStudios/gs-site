<template>
    <div class="wrapper" :style="'background-image: url(' + post.fimg_url + '), url(' + backupImg + ')'" alt="Blog Card Image" >
      <div class="data" onclick="">
        <div class="content">
          <hr>
          <div class="date">
              <span class="month">{{getDate(date).month}} </span>
              <span class="day">{{getDate(date).day}}, </span>
              <span class="year">{{getDate(date).year}}</span>
          </div>
          <h3 class="title">{{removeTags(title.rendered)}}</h3>
          <div class="text">
            <p class="blogcardtext">{{removeTags(content.rendered)}}</p>
            <br><br>
            <router-link class="" :to="`/blog/${slug}`">
            <button id="button" class="btn-bol btn-blog">READ MORE</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
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
          type: String
        }
    },
    data(){
        return {
            isFlipped: false,
            backupImg: "https://dev-greenhouse-studios.pantheonsite.io/wp-content/uploads/2017/10/Greenhouse-Studios-Logos_STACKED-WORDMARK_TWO-COLOR-1.jpg"
        }
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
        return str
      },
      getDate(str){
        const date = new Date(str);  // 2009-11-10
        const month = date.toLocaleString('default', { month: 'short' });
        const day = date.getDate();
        const year = date.getFullYear();
        const newdate = {month: month, day: day, year: year}
        return newdate;
      },
      getImg(str){
        if(this.post.image){
          src = this.post.image;
        }else{
          var regex = /<img.*?src="(.*?)"/;
          var src = regex.exec(str);
          if(src == null){
            // Placeholder Image
            src = this.backupImg;
          }else{
            src = src[1];
          }
        }
        return src;
      }
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/projects.css";

.blogcardtext {
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3; /* number of lines to show */
           line-clamp: 3; 
   -webkit-box-orient: vertical;
}
</style>