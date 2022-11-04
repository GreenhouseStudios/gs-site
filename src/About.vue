<template>
  <div v-if="person" class="flex-ns center w-50-ns w-90 justify-around" style="padding-top: 200px">
    <!-- <h1 class="about">ABOUT ME</h1> -->
    <div class="ph4 flex-col">
      <div class="image flex">
        <div
          v-if="image"
          class="people-img"
          :style="`background-image: url(${image}); background-size: ${imageSize}%;`"
        >
          <!-- <img :src="image" alt="" :style="`width: ${imageSize}%`" /> -->
        </div>
      </div>
      <h1 class="name tc">
        <strong>{{
          person.custom_fields.first_name[0] +
          " " +
          person.custom_fields.last_name[0]
        }}</strong>
      </h1>
    </div>
    <div class="w-50-ns w-100 tl-ns tc relative-ns top--1 center">
      <div class="social-media justify-start-ns relative-ns left--1 pt0">
        <div
          v-if="person.custom_fields.email && person.custom_fields.email[0]"
          class="email"
        >
          <a :href="'mailto:' + person.custom_fields.email[0]"
            ><img
              loading="lazy"
              class="shadow"
              src="../public/img/email.svg"
              alt="email"
          /></a>
        </div>
        <div
          v-if="person.custom_fields.site && person.custom_fields.site[0]"
          class="site"
        >
          <a :href="person.custom_fields.site[0]"
            ><img
              loading="lazy"
              class="shadow"
              src="../public/img/site.png"
              alt="website"
          /></a>
        </div>
        <div
          v-if="
            person.custom_fields.instagram && person.custom_fields.instagram[0]
          "
          class="instagram"
        >
          <a :href="person.custom_fields.instagram[0]"
            ><img
              loading="lazy"
              class="shadow"
              src="../public/img/instagram.svg"
              alt="instagram"
          /></a>
        </div>
        <div
          v-if="
            person.custom_fields.linkedin && person.custom_fields.linkedin[0]
          "
          class="facebook"
        >
          <a :href="person.custom_fields.linkedin[0]"
            ><img
              loading="lazy"
              class="shadow"
              src="../public/img/linkedin.png"
              alt="linkedin"
          /></a>
        </div>
        <div
          v-if="person.custom_fields.twitter && person.custom_fields.twitter[0]"
          class="twitter"
        >
          <a :href="person.custom_fields.twitter[0]"
            ><img
              loading="lazy"
              class="shadow"
              src="../public/img/twitter.svg"
              alt="twitter"
          /></a>
        </div>
      </div>
      <div v-html="person.custom_fields.about[0]" class="bio"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    person() {
      return this.$store.getters.personByName(this.$route.params.name);
    },
    image() {
      if (this.person && this.person.image && this.person.image.source_url) {
        return this.person.image.source_url;
      } else return this.person.image;
    },
    personHasImage() {
      return this.person && this.person.image;
    },
    imageSize() {
      if (this.image.includes("placeholder")) {
        return "80";
      }
      return "101";
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 900px) {
  .nest {
    margin: 0 20%;
    top: 200px;
    z-index: 1;
  }
}

@media screen and (min-width: 900px) {
  .nest {
    margin: 0 30%;
    top: -100px;
    z-index: 1;
  }
}

.people-img {
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
  width: 200px;
  height: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  border: 5px solid white;
  background-color: white;
  border-radius: 100%;
  display: inline-block;
}

.about {
  font-family: "Samo";
  font-size: 50px;
  font-weight: 100;
  padding-left: 100px;
  padding-bottom: 50px;
}

br {
  margin-top: -200px;
}

.name {
  // text-align: center;
}

.bio {
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 400;
}

.image {
  // display: grid;
  // justify-content: center
  // place-content: center;
}

.greenbg {
  max-width: 105%;
  max-height: 100%;
  min-width: 0%;
  margin-top: -20px;
}

/* p {
    display:flex;
    text-justify: inter-word;
    margin: 0px 300px 0px 300px;
    min-width: 50%;
} */

.icongrid {
  display: flex;
  gap: 20px;
}

img {
  margin: 20px;
}

.circle {
  background: rgb(0, 0, 0);
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.grid3 {
  font-family: "Libre Franklin";
  text-align: center;
}

.grid1 {
  font-family: "Libre Franklin";
  text-align: center;
}

.bottom {
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;
  margin-left: -200px;
  margin-right: -200px;
}

.circle:hover {
  background: white;
  box-shadow: rgba(100, 100, 100, 0.5) 0px 7px 20px 0px;
}
.shadow:hover {
  -webkit-filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.6))
    drop-shadow(0px 1px 1px black);
  filter: invert(100%) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.6));
}
</style>
