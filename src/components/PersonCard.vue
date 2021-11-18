<template>
  <div
    class="flipCard"
    @click="isFlipped = !isFlipped"
    v-lazy-container="{ selector: 'div' }"
  >
    <div class="card" :class="{ flipped: isFlipped }">
      <div class="side front" style="overflow: hidden">
        <div
          class="img-front"
          style="
            height: 35%;
            width: 100%;
            object-fit: cover;
            border-radius: 5px 5px 0px 0px;
            background-size: 150%;
            back
          "
          :style="`background-image: url(${require('../../public/img/GH-Watercolor.png')}); background-position: ${
            ((Math.sin(phase) + 1) / 2) * 100
          }% ${((Math.cos(phase) + 1) / 2) * 100}%;
           filter: hue-rotate(${Math.sin(phase) * 20 + 40}deg) saturate(${
            Math.sin(phase) * 20 + 30
          }deg)`"
          alt="watercolor card background image"
        ></div>
        <div
          v-if="person.image"
          class="people-img"
          :style="` filter: hue-rotate(${
            Math.random() * 0
          }deg); background-image:url( ${
            person.image
          } ); background-repeat: no-repeat; background-size:  ${
            person.image.includes('placeholder')
              ? '80%;  background-position: center'
              : '101%; background-position:center'
          }`"
        ></div>
        <h4
          class="people-name"
          style="
            width: 80%;
            text-overflow: wrap;
            margin: 0 auto;
            font-weight: normal;
          "
          v-if="
            person.custom_fields.first_name && person.custom_fields.first_name[0] && person.custom_fields.last_name  && person.custom_fields.last_name[0]
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
      <div class="side back flex" alt="" style="text-overflow: ellipsis">
        <p
          class="people-desc"
          v-html="person.custom_fields.about[0]"
          style="overflow: hidden"
          v-if="person.custom_fields.about && person.custom_fields.about[0]"
        ></p>
        <div class="social-media">
          <div v-if="person.custom_fields.email && person.custom_fields.email[0]" class="email">
            <a :href="'mailto:' + person.custom_fields.email[0]"
              ><img src="../../public/img/email.svg" alt="email"
            /></a>
          </div>
          <div
            v-if="person.custom_fields.site && person.custom_fields.site[0]"
            class="site"
          >
            <a :href="person.custom_fields.site[0]"
              ><img src="../../public/img/site.png" alt="website"
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
              ><img src="../../public/img/instagram.svg" alt="instagram"
            /></a>
          </div>
          <div
            v-if="
              person.custom_fields.linkedin && person.custom_fields.linkedin[0]
            "
            class="facebook"
          >
            <a :href="person.custom_fields.linkedin[0]"
              ><img src="../../public/img/linkedin.png" alt="linkedin"
            /></a>
          </div>
          <div
            v-if="
              person.custom_fields.twitter && person.custom_fields.twitter[0]
            "
            class="twitter"
          >
            <a :href="person.custom_fields.twitter[0]"
              ><img src="../../public/img/twitter.svg" alt="twitter"
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
          src="img/GH-Watercolor.png"
          alt="watercolor card background image"
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
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/projects.css";
.people-name {
  font-family: "Libre Franklin";
  text-transform: capitalize;
}
.img-front {
}
</style>