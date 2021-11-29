<template>
  <div class="flipCard" @click="flipCard">
    <div class="card" :class="{ flipped: isFlipped }">
      <div class="side front" v-show="!isFlipped || flipping">
        <div
          class="img-front"
          style="height: 100%; width: 100%; object-fit: cover"
          :style="`background-image: url(${require('../../public/img/Watercolor_background.png')}); background-position: ${
            ((Math.sin(phase) + 1) / 2) * 100
          }% ${((Math.cos(phase) + 1) / 2) * 100}%; filter: hue-rotate(${
            Math.sin(phase) * 10 + 2
          }deg) `"
          alt="Front side of flippable card for the project 'By Our Love'"
        >
          <img
            :src="project.custom_fields.project_card_front"
            alt="project title"
          />
        </div>
      </div>
      <div
        class="side back flex-container"
        :alt="
          'Back side of flippable card for the project' + project.title.rendered
        "
      >
        <img
          class="title-new"
          :src="project.custom_fields.project_title_img"
          alt="by our love"
        />
        <div class="desc" v-if="project.custom_fields.about">
          <p>
            {{ project.custom_fields.about[0] }}
          </p>
        </div>

        <a
          v-if="hasSite()"
          id="button"
          :style="`border: 2px solid ${btnColor}; background-color:${
            hover ? 'white' : btnColor
          }; border-color:${btnColor} !important; color: ${
            hover ? btnColor : btnTextColor
          }`"
          @mouseleave="hover = false"
          @mouseenter="hover = true"
          :href="project.custom_fields.website_url"
          @click.stop=""
        >
          WEBSITE
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
          >READ MORE</a
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
  },
  data() {
    return {
      isFlipped: false,
      flipping: false,
      hover: false,
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
      return convert.hex.hsl(this.project.custom_fields.btn_color)[2] > 50
        ? "black"
        : "white";
    }
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
    hasSite() {
      if (this.project.custom_fields.website_url[0] == "") {
        return false;
      } else {
        return true;
      }
    },
  },
  mounted () {
    console.log(convert.hex.hsl(this.project.custom_fields.btn_color)[2]);
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
</style>