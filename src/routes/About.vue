<template>
  <div>
    <h1>About This Blog</h1>
    <h2 class="about__subtitle">Summary</h2>
    <p style="margin-top: 10px;">
      This Vue.js-built blog template is fully manageable through the WordPress
      back-end admin area. So, if a writer without any technical experience
      wants to create a new blog post, he or she must only log in to the
      WordPress admin area, write the post, and publish it.
    </p>
    <p>
      The template is connected to its WordPress site using the 'wpSiteLocation'
      environment variable set in Lambda, and can be simply connected to any
      WordPress site by resetting that variable.
    </p>
    <h2 class="about__subtitle">Build Details</h2>
    <p style="margin-top: 10px;">
      The front-end was built in Vue.js, and also relies on Vue Router.
    </p>
    <p>
      The WordPress data is fetched from the browser. Depending on what
      WordPress data is needed, an Amazon API Gateway endpoint is called, which
      points to a Lambda function. A WordPress JSON endpoint is then called from
      this Lambda function.
    </p>
    <h2 class="about__subtitle">GitHub Repositories</h2>
    <p style="margin-top: 10px;margin-bottom: 0;">
      <a href="https://github.com/tensquare2443/vue-wp-blog-1" target="_blank">All application code (minus Lambda functions) is here.</a>
    </p>
    <p class="about__repository-txt">
      <a href="https://github.com/tensquare2443/fetch-posts_lambda-function" target="_blank">This Lambda function fetches blog posts.</a>
    </p>
    <p class="about__repository-txt">
      <a href="https://github.com/tensquare2443/fetch-post_lambda-function" target="_blank">This Lambda function fetches a single blog post.</a>
    </p>
    <p class="about__repository-txt">
      <a href="https://github.com/tensquare2443/fetch-post-categories_lambda-function" target="_blank">This Lambda function fetches blog post categories.</a>
    </p>
    <p class="about__repository-txt">
      <a href="https://github.com/tensquare2443/fetch-users_lambda-function" target="_blank">This Lambda function fetches blog post authors.</a>
    </p>
  </div>
</template>

<style>
.about__subtitle {
  margin-bottom: 0;
}
.about__repository-txt {
  margin-top: 1px;
  margin-bottom: 1px;
}
</style>
