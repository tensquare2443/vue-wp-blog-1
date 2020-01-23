## Summary  
This Vue.js-built blog template is fully manageable through the WordPress back-end admin area. So, if a writer without any technical experience wants to create a new blog post, category, etc., he or she must only log in to the WordPress admin area, write the post, and publish it.  

The template is connected to its WordPress site using the 'wpSiteLocation' environment variable set in Lambda, and can be simply connected to any WordPress site by resetting that variable.  

## Build Details  
The front-end was built in Vue.js, and also relies on Vue Router.  

The WordPress data is fetched from the browser. Depending on what WordPress data is needed, an Amazon API Gateway endpoint is called, which points to a Lambda function. A WordPress JSON endpoint is then called from this Lambda function.  

## GitHub Repos  
[This Lambda function fetches blog posts.](https://github.com/tensquare2443/fetch-posts_lambda-function)  
[This Lambda function fetches a single blog post.](https://github.com/tensquare2443/fetch-post_lambda-function)  
[This Lambda function fetches blog post categories.](https://github.com/tensquare2443/fetch-post-categories_lambda-function)  
[This Lambda function fetches blog post authors.](https://github.com/tensquare2443/fetch-users_lambda-function)  
