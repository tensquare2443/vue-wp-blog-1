<template>
  <div class="home__content">
    <Posts
      :posts="posts"
      :postsLoading="postsLoading"
      :postAuthorsLoading="postAuthorsLoading"
      :fetchPosts="fetchPosts"
      :fetchPost="fetchPost"
    />
    <Sidebar
      :authors="authors"
      :authorsLoading="authorsLoading"
      :postCategories="postCategories"
      :postCategoriesLoading="postCategoriesLoading"
      :fetchPosts="fetchPosts"
    />
  </div>
</template>

<script>
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

export default {
  components: {
    Posts,
    Sidebar
  },
  props: [
    "posts",
    "fetchPosts",
    "postsLoading",
    "postCategories",
    "fetchPostCategories",
    "postCategoriesLoading",
    "authors",
    "fetchAuthors",
    "authorsLoading",
    "postAuthorsLoading",
    "fetchPost"
  ],
  mounted() {
    this.fetchPosts(false, false);
    this.fetchPostCategories();
    this.fetchAuthors();
  }
};
</script>

<style scoped>
.home__content {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
@media (max-width: 576px) {
  .home__content {
    display: block;
  }
}
</style>
