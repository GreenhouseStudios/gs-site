<template>
  <div
    class="flipCard"
    
    @click="isFlipped = !isFlipped"
  >
    <div class="card" :class="{ flipped: isFlipped }">
      <div class="side front">
        <img
          class="img-front"
          style="height: 100%; width: 100%; object-fit: cover"
          :src="project.custom_fields.project_card_front"
          alt="Front side of flippable card for the project 'By Our Love'"
        />
      </div>
      <div
        :style="
          'background-image: url(' + project.custom_fields.project_card_back + ');'
        "
        class="side back flex"
        :alt="'Back side of flippable card for the project' + project.title.rendered " 
      >
        <img
          class="title-new"
          :src="project.custom_fields.project_title_img"
          alt="by our love"
        />
        <p class="desc" v-if="project.custom_fields.about">
          {{project.custom_fields.about[0]}}
        </p>
        <a :href="project.custom_fields.website_url" target="_blank"
          ><button id="button" class="btn-bol">WEBSITE</button></a
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
      default: () => {}
    },
  },
  data() {
    return {
      isFlipped: false,
    };
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
</style>