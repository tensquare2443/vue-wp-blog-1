<template>
  <div id="app">
    <Nav></Nav>
    <router-view />
    <img class="vue-img" src="./assets/logo.png" />
  </div>
</template>

<script>
/*
structure:
  - headless WP at EC2 location, Vue front-end
  - no user logins. is just a static display of a blog that has been made
*/
import Nav from './components/Nav.vue';

export default {
  components: {
    Nav
  },
  name: "App"
};
</script>
