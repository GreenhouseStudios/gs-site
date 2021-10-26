<template>
    <div class="wrapper" :style="'background-image: url(' + getImg(content.rendered) + ')'" alt="Blog Card Image">
      <div class="data">
        <div class="content">
          <hr>
          <div class="date">
              <span class="month">{{getDate(date).month}} </span>
              <span class="day">{{getDate(date).day}}, </span>
              <span class="year">{{getDate(date).year}}</span>
          </div>
          <h1 class="title">{{removeTags(title.rendered)}}</h1>
          <p class="text">{{removeTags(content.rendered)}}<br><br>
          <router-link class="link" :to="`/blog/${slug}`">
            <button id="button" class="btn-bol">READ MORE</button>
          </router-link>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "BlogCard",
    props: {
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
            isFlipped: false
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
        return this.trimString(str)
      },
      trimString(str){
        var maxLength = 115 // maximum number of characters to extract
        //trim the string to the maximum length
        var trimmedString = str.substr(0, maxLength);
        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        return trimmedString + "..."
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
        var regex = /<img.*?src="(.*?)"/;
        var src = regex.exec(str);
        if(src == null){
          // Placeholder Image
          src = "http://greenhousestudios.uconn.edu/wp-content/uploads/sites/1957/2016/10/Greenhouse-Studios-Logos-STACKED-TWO-COLOR.png"
        }else{
          src = src[1];
        }
        return src;
      }
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/projects.css";
.btn-bol{
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>