<template>
  <div class="nav">
    <div class="nav__brand-container">
      <h2 class="nav__brand">Blog</h2>
    </div>
    <div class="nav__btns">
      <div class="nav__link-container">
        <router-link to="/" class="nav__link">
          Home
        </router-link>
      </div>
      <div class="nav__link-container">
        <router-link to="/posts" class="nav__link">
          Posts
        </router-link>
      </div>
      <div class="nav__link-container">
        <router-link to="/authors" class="nav__link">
          Authors
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

<style scoped>
.nav {
  width: 800px;
  max-width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ccc;
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
  background-color: #ddd;
  padding: 20px;
}
.nav__link {
  color: black;
}
</style>
