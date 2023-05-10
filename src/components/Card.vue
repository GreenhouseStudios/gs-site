<template>
  <div class="flipCard" @click="flipCard">
    <div class="card" :class="{ flipped: isFlipped }">
      <div class="side front" v-show="!isFlipped || flipping">
        <div
          class="img-front h-100 w-100 overflow-hidden"
        >
           <img
            v-if="project.custom_fields.project_card_front"
            :src="project.custom_fields.project_card_front"
            class="absolute top-0 z-1"
            alt="project title"
            loading="lazy"
          />
            <div v-else class="center w-100 h-100 flex items-center ph3 tc absolute"  ><h2 id="alt-card-title" class="f1 ph3 tc v-mid self-center z-3">{{project.title.rendered  }}</h2></div>
        <img class="h-100" loading="lazy" :src="`${require('../../public/img/avif/Watercolor_background.avif')}`" style="object-fit: cover"  :style="`z-index: -1; ${((Math.cos(phase) + 1) / 2) * 100}%; filter: hue-rotate(${
            Math.sin(phase) * 10 + 2
          }deg) `" alt="Front side of flippable card for the project">
       
        </div>
      </div>
      <div
        class="side back flex-container"
        :alt="
          'Back side of flippable card for the project' + project.title.rendered
        "
         :style="
           'background-image: url(' +
           (project.custom_fields.project_card_back || defaultFaceBackground )+
           '); background-repeat: no-repeat;'
         "
      >
        <img
        v-if="project.custom_fields.project_title_img"
          class="title-new"
          :src="project.custom_fields.project_title_img"
          :alt="project.title.rendered"
          loading="lazy"
        />
        <h2 v-else>{{project.title.rendered }}</h2>
        <div class="desc" v-if="project.custom_fields.about">
          <p>
            {{ project.custom_fields.about[0] }}
          </p>
        </div>

        <a
          v-if="hasSite"
          id="button"
          :style="`text-decoration: none; border: 2px solid ${btnColor}; background-color:${
            hover ? 'white' : btnColor
          }; border-color:${btnColor} !important; color: ${
            hover ? btnColor : btnTextColor
          }`"
          @mouseleave="hover = false"
          @mouseenter="hover = true"
          :href="project.custom_fields.website_url" target="_blank"
          @click.stop=""
        >
          Website
        </a>

        <a
          v-else
          id="button"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
          @click.prevent="$router.push(`/projects/${project.slug}`)"

          :style="`border: 2px solid ${btnColor}; background-color:${
            hover ? 'white' : btnColor
          }; border-color:${btnColor} !important; color: ${
            hover ? btnColor : btnTextColor
          }`"
          >Read More</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import convert from 'color-convert'
export default {
  name: "Card",
  props: {
    project: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
    },
    slug: {
      type: String,
    },
    startsFlipped: {
      type: Boolean,
    }
  },
  data() {
    return {
      isFlipped: this.startsFlipped ? true : false,
      flipping: false,
      hover: false,
      defaultFaceBackground: "https://dev-greenhouse-studios.pantheonsite.io/wp-content/uploads/2021/11/Card_Back_bright_green_new.jpg"
    };
  },
  computed: {
    phase() {
      return (this.index * Math.PI) / 2;
    },
    btnColor() {
      return this.project.custom_fields.btn_color
        ? this.project.custom_fields.btn_color
        : "#8CC947";
    },
    btnTextColor(){
      return this.project.custom_fields.btn_color && convert.hex.hsl(this.project.custom_fields.btn_color)[2] <= 50
        ? "white"
        : "black";
    },
    hasSite() {
      return this.project.custom_fields?.website_url && this.project.custom_fields?.website_url[0] !== "";
    },
  },
  methods: {
    flipCard() {
      var t = this;
      this.isFlipped = !this.isFlipped;
      this.flipping = true;
      setTimeout(() => {
        t.flipping = false;
      }, 600);
    },
  
    reset(){
      this.isFlipped = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: 350px;
  width: 300px;
}
.flipCard .card.flipped {
  transform: rotatey(-180deg);
}

.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back {
  padding: 35px;
}
#button {
  position: absolute;
  bottom: 35px;
}
#alt-card-title{
  font-family: 'SAMO';
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  background: none;
  margin: auto;
}
</style>