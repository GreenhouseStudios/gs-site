<template>
  <div class="flipCard" @click="isFlipped = !isFlipped">
    <div class="card" :class="{ flipped: isFlipped }">
      <div class="side front">
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
          <img :src="project.custom_fields.project_card_front" alt="" />
        </div>
      </div>
      <div
        :style="
          'background-image: url(' +
          project.custom_fields.project_card_back +
          '); background-repeat: no-repeat;'
        "
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
          class="link"
          :href="project.custom_fields.website_url"
          target="_blank"
          ><button id="button" class="btn-bol" :style="`background-color:${btnColor}; border-color:${btnColor}`">WEBSITE</button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
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
  },
  data() {
    return {
      isFlipped: false,
    };
  },
  computed: {
    phase() {
      return (this.index * Math.PI) / 2;
    },
    btnColor(){
      return this.project.custom_fields.btn_color ? this.project.custom_fields.btn_color : '#8CC947';
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
</style>