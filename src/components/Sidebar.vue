<template>
  <div class="sidebar">
    <h2 class="sidebar__title" style="margin-top: 0;">Authors</h2>
    <SmallLoader v-if="authorsLoading" />
    <div v-else v-for="author in authors">
      <p class="sidebar__item">
        <router-link to="/all-posts" class="sidebar__item-link">
          <span @click="fetchPosts(`author ${author.id}`, 'date-ascending')" :data-id="'author ' + author.id">{{
            author.name
          }}</span>
        </router-link>
      </p>
    </div>
    <h2 class="sidebar__title">Categories</h2>
    <SmallLoader v-if="postCategoriesLoading" />
    <div v-else v-for="postCategory in postCategories">
      <p class="sidebar__item">
        <router-link to="/all-posts" class="sidebar__item-link">
          <span
            @click="fetchPosts(`postCategory ${postCategory.id}`, 'date-ascending')"
            :data-id="'postCategory ' + postCategory.id"
            >{{ postCategory.name }}</span
          >
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import SmallLoader from "./loading-icons/SmallLoader";

export default {
  components: {
    SmallLoader
  },
  props: [
    "authors",
    "authorsLoading",
    "postCategories",
    "postCategoriesLoading",
    "fetchPosts"
  ]
};
</script>

<style scoped>
.sidebar {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-left: 2px solid #ddd;
}
@media (max-width: 576px) {
  .sidebar {
    display: none;
  }
}
.sidebar__title {
  margin-bottom: 7px;
}
.sidebar__item {
  margin: 0;
}
.sidebar__item-link {
  text-decoration: none;
  color: black;
}
.sidebar__item-link:hover {
  text-decoration: underline;
}
</style>
