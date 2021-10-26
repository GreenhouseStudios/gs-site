<template>
  <div class="flipCard" @click="isFlipped = !isFlipped">
    <div class="card" :class="{ flipped: isFlipped }">
      <div class="side front" style="overflow: hidden">
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
        <div class="people-img" :style="`background-image:url( ${person.image} ); background-repeat: no-repeat; background-size:  ${person.image.includes('placeholder') ? '80%;  background-position: center': '100%; background-position:center'}`"></div>
        <h1 class="people-name" style="width: 90%; text-overflow: wrap; margin: 0 auto;">{{(person.custom_fields.first_name[0] + " " + person.custom_fields.last_name[0]).toUpperCase()}}</h1>
        <!-- <h1 class="people-name">{{person.custom_fields.last_name[0].toUpperCase()}}</h1> -->
        <!-- <p class="people-title" v-html="person.custom_fields.title[0]"></p> -->
      </div>
      <div class="side back flex" alt="" style="text-overflow: ellipsis;">
        <p class="people-desc" v-html="person.custom_fields.about[0]" style="overflow:hidden">
        </p>
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
        <!-- <img
          class="linkedin"
          style="
            height: 10%;
            width: auto;
            position: absolute;
            margin-top: 102.5%;
            margin-right: 75%;
          "
          src="img/linkedin-logo-white.png"
        /> -->
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
.people-name{
  font-family: "Libre Franklin";
}
</style>