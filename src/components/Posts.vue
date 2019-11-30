<template>
  <div>
    <LargeLoader v-if="postsLoading" />
    <div v-else-if="posts && posts.length === 0" class="posts__no-posts">
      There haven't been any posts yet.
    </div>
    <div v-else>
      <div
        v-for="(post, index) in posts"
        class="posts__post"
        :class="{ 'posts__post--last': index === posts.length - 1 }"
      >
        <router-link :to="`/post/${post.id}_${post.slug}`" class="post__title-link">
          <h1
            @click="fetchPost(post.id)"
            class="post__title-txt"
            :data-id="post.id"
          >
            {{ post.title }}
          </h1>
        </router-link>
        <p v-if="postAuthorsLoading" class="post__author">&nbsp;</p>
        <p v-else class="post__author">
          <router-link to="/all-posts" class="post__author-link"
            ><span
              @click="
                fetchPosts(`author ${post.author.id}`, 'date-ascending')
              "
              >{{ post.author.name }}</span
            ></router-link
          >
        </p>
        <p class="post__date-and-time">{{ formatDateAndTime(post.date) }}</p>
        <p v-html="post.excerpt" class="post__excerpt"></p>
      </div>
    </div>
  </div>
</template>

<script>
import formatDateAndTime from "../functions/formatDateAndTime";
import LargeLoader from "./loading-icons/LargeLoader";

export default {
  components: {
    LargeLoader
  },
  props: [
    "posts",
    "postsLoading",
    "postAuthorsLoading",
    "fetchPosts",
    "fetchPost"
  ],
  methods: {
    formatDateAndTime
  }
};
</script>

<style scoped>
.posts__no-posts {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.posts__post {
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #ddd;
}
.posts__post--last {
  border-bottom: none;
}
.post__title-link {
  text-decoration: none;
  color: black;
}
.post__title-link:hover {
  text-decoration: underline;
}
.post__title-txt {
  margin-bottom: 12px;
}
.post__author {
  margin-top: 12px;
  margin-bottom: 2px;
}
.post__date-and-time {
  margin-top: 2px;
}
.post__author-link {
  color: black;
  text-decoration: none;
}
.post__author-link:hover {
  text-decoration: underline;
}
</style>
