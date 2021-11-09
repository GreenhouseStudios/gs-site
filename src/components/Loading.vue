<template>
  <div class="overlay">
    <div class="container">
      <div class="contents">
        <img src="../../public/img/GS_G_logo.png" alt="" />
      </div>
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 350px;
  background: white;
  padding: 5%;
}
@media (max-width: 38em) {
  .container{
    padding: 10%;
  }
}
h1 {
  text-align: center;
}

img {
  animation: breathing 1.4s infinite alternate-reverse;
}
@keyframes breathing {
  0%{
    opacity: 0.6;
    transform: scale(1);
  }

  100%{
    opacity: 1;
    transform: scale(1.2);
  }
}
</style>