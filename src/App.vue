<template>
  <div id="app">
    <Nav></Nav>
    <router-view />
    <img class="vue-img" src="./assets/logo.png" />
    {{ wpLocation }}
  </div>
</template>

<script>
/*
structure:
  - headless WP at EC2 location, Vue front-end
  - no user logins. is just a static display of a blog that has been made
*/
import Nav from "./components/Nav.vue";

if (process.env.WP_LOCATION) {
  var wpLocation = process.env.WP_LOCATION;
} else {
  wpLocation = require("./vars.js").domain;
}

export default {
  components: {
    Nav
  },
  name: "App",
  data() {
    return {
      wpLocation
    };
  }
};
</script>
