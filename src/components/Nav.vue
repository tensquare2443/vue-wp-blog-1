<template>
  <div class="nav">
    <div class="nav__brand-container">
      <router-link to="/" class="nav__link">
      <h2 class="nav__brand">A Vue Blog</h2>
      </router-link>
    </div>
    <div class="nav__btns">
      <div class="nav__link-container">
        <router-link to="/all-posts" class="nav__link">
          <span @click="fetchPosts(false, 'date-ascending')"
            >Posts</span
          >
        </router-link>
      </div>
      <div class="nav__link-container">
        <router-link to="/about" class="nav__link">
          About
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "fetchPosts"
  ]
};
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  background-color: whitesmoke;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ddd;
}
.nav__brand {
  font-family: "Lobster", cursive;
  margin: 0;
  padding: 10px 20px;
}
.nav__btns {
  display: flex;
}
.nav__link-container {
  padding: 20px;
}
@media (max-width: 416px) {
  .nav__link-container {
    padding-left: 10px;
    padding-right: 10px;
  }
}
.nav__link {
  color: black;
}
.nav__brand-container .nav__link {
  text-decoration: none;
}
</style>
