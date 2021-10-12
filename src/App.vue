<template>
  <div id="app">
    <Nav></Nav>
    <home-button></home-button>
    <router-view></router-view>
    <!-- <home></home> -->
  </div>
</template>

<script>
import HomeButton from './components/HomeButton.vue'
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    Nav,
    HomeButton
  }
}
</script>

<style>
</style>
