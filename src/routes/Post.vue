<template>
  <div>
    <LargeLoader v-if="postLoading" />
    <div v-else-if="post">
      <h1 class="post__title">{{ post.title }}</h1>
      <p v-if="post.author.name" class="post__author">
        <router-link to="/all-posts" class="post__author-link">
          <span
            @click="fetchPosts(`author ${post.author.id}`, 'date-ascending')"
            >{{ post.author.name }}</span
          >
        </router-link>
      </p>
      <p v-else class="post__author">&nbsp;</p>
      <p class="post__date-and-time">{{ formatDateAndTime(post.date) }}</p>
      <p v-html="post.content" class="post__content"></p>
    </div>
  </div>
</template>

<script>
import formatDateAndTime from "../functions/formatDateAndTime";
import LargeLoader from "../components/loading-icons/LargeLoader";

export default {
  components: {
    LargeLoader
  },
  created() {
    if (!this.postLoading) {
      const postId = window.location.href.split("/")[5].split("_")[0];
      this.fetchPost(postId);
    }
  },
  props: ["postLoading", "post", "fetchPosts", "fetchPost"],
  methods: {
    formatDateAndTime
  }
};
</script>

<style scoped>
.post__title {
  text-align: center;
  font-size: 3em;
  margin-bottom: 16px;
}
@media (max-width: 576px) {
  .post__title {
    font-size: 2.5em;
  }
}
.post__author {
  text-align: center;
  margin-bottom: 2px;
}
.post__author-link {
  text-decoration: none;
  color: black;
}
.post__author-link:hover {
  text-decoration: underline;
}
.post__date-and-time {
  text-align: center;
  margin-top: 2px;
}
.post__content {
  width: 533px;
  margin: auto;
  max-width: 100%;
}
</style>
