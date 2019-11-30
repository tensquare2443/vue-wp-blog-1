<template>
  <div
    dd-element="true"
    class="sort-posts__btn"
    @click="initiateSortPosts"
    :data-id="btn"
  >
    <div dd-element="true">
      <p
        v-if="btn && btn.includes('date')"
        class="sort-posts__btn-txt"
        dd-element="true"
      >
        Date
      </p>
      <p
        v-else-if="btn && btn.includes('alph')"
        class="sort-posts__btn-txt"
        dd-element="true"
      >
        A-Z
      </p>
    </div>
    <div class="sort-posts__arrow-container" dd-element="true">
      <svg
        v-if="btn && btn.includes('ascending')"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="2 2 20 20"
        dd-element="true"
      >
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
      <svg
        v-else-if="btn && btn.includes('descending')"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="2 2 20 20"
      >
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        <path fill="none" d="M0 0h24v24H0V0z" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sort", "btn", "initiateSortPosts"]
};
</script>

<style scoped>
.sort-posts__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  padding: 5px 8px;
  width: 68px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.sort-posts__btn:hover {
  background-color: #ccc;
}
.active {
  background-color: #ccc;
}
.sort-posts__btn-txt {
  margin: 0 0 0 5px;
}
.sort-posts__arrow-container {
  display: flex;
}
</style>
