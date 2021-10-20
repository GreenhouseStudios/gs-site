<template>
  <div class="overlay">
    <div class="container">
      <img src="../../public/img/GS_G_logo.png" alt="" />
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: 5;
}
.container {
  position: fixed;
  top: 20vh;
  left: 30vw;
  background: white;
  padding: 10%;
}
h1 {
  text-align: center;
}
</style>