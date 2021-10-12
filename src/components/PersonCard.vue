<template>
  <div class="flipCard" @click="isFlipped = !isFlipped">
    <div class="card" :class="{ flipped: isFlipped }">
      <div class="side front">
        <img
          class="img-front"
          style="
            height: 35%;
            width: 100%;
            object-fit: cover;
            border-radius: 5px 5px 0px 0px;
          "
          src="img/GH-Watercolor.png"
          alt="watercolor card background image"
        />
        <img class="people-img" :src="person.image" />
        <h1 class="people-name" v-for="word in person.title.rendered.split(' ')" :key="word">{{word.toUpperCase()}}</h1>
        <p class="people-title"></p>
      </div>
      <div class="side back flex" alt="">
        <p class="people-desc">
          Alexis thinks, writes, and teaches about visual culture, specifically
          visual representations of race, gender, and sexuality. She teaches Art
          History with a joint-appointment in the Africana Studies Institute.
        </p>
        <img
          class="img-front"
          style="
            height: 15%;
            width: 100%;
            padding-top: 300px;
            object-fit: cover;
            border-radius: 0px 0px 5px 5px;
          "
          src="img/GH-Watercolor.png"
          alt="watercolor card background image"
        />
        <img
          class="linkedin"
          style="
            height: 10%;
            width: auto;
            position: absolute;
            margin-top: 102.5%;
            margin-right: 75%;
          "
          src="img/linkedin-logo-white.png"
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
        img: {
            type: String
        }
    },
    data(){
        return {
            isFlipped: false
        }
    },
   
};
</script>

<style lang="scss" scoped>
@import "../assets/projects.css";
</style>