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
          src="https://greenhousestudios.uconn.edu/wp-content/uploads/sites/1957/2021/06/BOL_01-copy.jpg"
          alt="Front side of flippable card for the project 'By Our Love'"
        />
      </div>
      <div
        style="
          background-image: url('https://greenhousestudios.uconn.edu/wp-content/uploads/sites/1957/2021/07/bol-4.png');
        "
        class="side back flex"
        alt="Back side of flippable card for the project 'By Our Love'"
      >
        <img
          class="title-new"
          src="https://greenhousestudios.uconn.edu/wp-content/uploads/sites/1957/2021/06/BOL_back.png"
          alt="by our love"
        />
        <p class="desc">
          An animated short set to an instrumental jazz arrangement of a
          Christian hymn, that raises questions about the state of contemporary
          Christendom, its relationship to politics, and our shared
          responsibility to heal.
        </p>
        <a href="https://www.by-our-love.com/team/" target="_blank"
          ><button id="button" class="btn-bol">WEBSITE</button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
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