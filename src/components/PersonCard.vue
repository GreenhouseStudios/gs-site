<template>
  <div class="flipCard" @click="isFlipped = !isFlipped">
    <div class="card" :class="{ flipped: isFlipped }">
      <div class="side front" style="overflow: hidden; z-index: 0;">
        <div
          class="img-front absolute"
          style="
            height: 35%;
            width: 100%;
            object-fit: cover;
            border-radius: 5px 5px 0px 0px;
            background-size: 150%;
            z-index: -1;
          "
          :style="`background-image: url(${require('../../public/img/GH-Watercolor-small.png')}); background-position: ${
            this.positionShift
          }% ${((Math.cos(phase) + 1) / 2) * 100}%;
           filter: hue-rotate(${textureHueShift}deg) saturate(${textureSaturationShift}deg)`"
          alt="watercolor card background image"
        ></div>
        <div v-if="image" class="people-img z-1" style="margin-top: 47px">
          <img
            :src="image"
            loading="lazy"
            :style="usesPlaceholder ? 'width: 80%' : 'width:100%'"
          />
        </div>
        <h4
          class="people-name"
          style="
            width: 80%;
            text-overflow: wrap;
            margin: 0 auto;
            font-weight: normal;
          "
          v-if="
            person.custom_fields.first_name &&
            person.custom_fields.first_name[0] &&
            person.custom_fields.last_name &&
            person.custom_fields.last_name[0]
          "
        >
          {{
            person.custom_fields.first_name[0] +
            " " +
            person.custom_fields.last_name[0]
          }}
        </h4>
        <!-- <h1 class="people-name">{{person.custom_fields.last_name[0].toUpperCase()}}</h1> -->
        <!-- <p class="people-title" v-html="person.custom_fields.title[0]"></p> -->
      </div>
      <div
        class="side back gs-card-flex"
        alt=""
        style="text-overflow: ellipsis"
      >
        <p
          class="people-desc"
          v-html="person.custom_fields.about[0]"
          style="overflow: hidden"
          v-if="person.custom_fields.about && person.custom_fields.about[0]"
        ></p>
        <div class="social-media">
          <div
            v-if="person.custom_fields.email && person.custom_fields.email[0]"
            class="email"
          >
            <a :href="'mailto:' + person.custom_fields.email[0]"
              ><img
                loading="lazy"
                class="shadow"
                src="../../public/img/email.svg"
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
                src="../../public/img/site.png"
                alt="website"
            /></a>
          </div>
          <div
            v-if="
              person.custom_fields.instagram &&
              person.custom_fields.instagram[0]
            "
            class="instagram"
          >
            <a :href="person.custom_fields.instagram[0]"
              ><img
                class="shadow"
                src="../../public/img/instagram.svg"
                alt="instagram"
                loading="lazy"
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
                class="shadow"
                src="../../public/img/linkedin.png"
                alt="linkedin"
                loading="lazy"
            /></a>
          </div>
          <div
            v-if="
              person.custom_fields.twitter && person.custom_fields.twitter[0]
            "
            class="twitter"
          >
            <a :href="person.custom_fields.twitter[0]"
              ><img
                class="shadow"
                src="../../public/img/twitter.svg"
                alt="twitter"
                loading="lazy"
            /></a>
          </div>
        </div>
        <img
          class="person-card-watercolor-back"
          style="
            height: 15%;
            width: 100%;
            padding-top: 300px;
            object-fit: cover;
          "
          src="img/GH-Watercolor-small.png"
          alt="watercolor card background image"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonCard",
  props: {
    person: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      isFlipped: false,
    };
  },
  computed: {
    phase() {
      return (this.index * Math.PI) / 6;
    },
    positionShift() {
      return ((Math.sin(this.phase) + 1) / 2) * 100;
    },
    textureHueShift() {
      return Math.sin(this.phase) * 20 + 40;
    },
    textureSaturationShift() {
      return Math.sin(this.phase) * 20 + 30;
    },
    image() {
      if (this.person.image.source_url) return this.person.image.source_url;
      else return this.person.image;
    },
    usesPlaceholder() {
      return this.image.includes("placeholder");
    },
  },
  methods: {
    reset() {
      this.isFlipped = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/projects.css";
.people-name {
  font-family: "Libre Franklin";
  text-transform: capitalize;
}
.shadow:hover {
  -webkit-filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.6))
    drop-shadow(0px 1px 1px black);
  filter: invert(100%) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.6));
}
.people-img {
  overflow: hidden;
  display: grid;
  place-items: center;
}
</style>