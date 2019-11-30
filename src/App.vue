<template>
  <div id="app">
    <div @click="removeAnyDropdown">
      <div class="app__content">
        <Nav :fetchPosts="fetchPosts"></Nav>
        <div class="app__main-content">
          <router-view
            :posts="posts"
            :postCategories="postCategories"
            :authors="authors"
            :post="post"
            :fetchPosts="fetchPosts"
            :fetchPostCategories="fetchPostCategories"
            :fetchAuthors="fetchAuthors"
            :fetchPost="fetchPost"
            :postsLoading="postsLoading"
            :postCategoriesLoading="postCategoriesLoading"
            :authorsLoading="authorsLoading"
            :postAuthorsLoading="postAuthorsLoading"
            :postLoading="postLoading"
            :filter="filter"
            :filtering="filtering"
            :toggleFiltering="toggleFiltering"
            :sort="sort"
            :sorting="sorting"
            :toggleSorting="toggleSorting"
          />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

import fetchPosts from "./functions/fetch-data/fetchPosts";
import fetchPostCategories from "./functions/fetch-data/fetchPostCategories";
import fetchAuthors from "./functions/fetch-data/fetchAuthors";
import fetchPost from "./functions/fetch-data/fetchPost";
import formatPostAuthors from "./functions/formatPostAuthors";
import removeAnyDropdown from "./functions/removeAnyDropdown";
import toggleFiltering from "./functions/toggleFiltering";
import toggleSorting from "./functions/toggleSorting";

export default {
  components: {
    Nav,
    Footer
  },
  name: "App",
  data() {
    return {
      posts: [],
      postsLoading: false,
      postCategories: [],
      postCategoriesLoading: false,
      authors: [],
      authorsLoading: false,
      postAuthorsLoading: false,
      sort: false,
      sorting: false,
      filter: false,
      filtering: false,
      post: false,
      postLoading: false
    };
  },
  methods: {
    fetchPosts,
    fetchPostCategories,
    fetchAuthors,
    fetchPost,
    toggleFiltering,
    toggleSorting,
    removeAnyDropdown
  }
};
</script>

<style>
.app__content {
  width: 800px;
  margin: auto;
  max-width: 100%;
}
@media (max-width: 830px) {
  .app__main-content {
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>
