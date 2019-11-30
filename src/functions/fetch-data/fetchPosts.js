import { apiKey } from "./getKey";
import formatPostAuthors from "../formatPostAuthors";

console.log('fetchPosts');
console.log(apiKey);

export default function(filter, sort) {
  this.postsLoading = true;

  if (sort !== this.sort) this.sort = sort;
  if (filter !== this.filter) this.filter = filter;

  let headers = {
    "x-api-key": apiKey
  };

  const sortParams = {
    "alph-ascending": "orderby=title&order=asc",
    "alph-descending": "orderby=title&order=desc"
  };

  if (sort && sort.includes("alph")) {
    headers["sort-params"] = sortParams[sort];
  }

  const filterParams = {
    author: "author=",
    postCategory: "categories="
  };

  if (filter) {
    headers["filter-params"] = `${filterParams[filter.split(" ")[0]]}${
      filter.split(" ")[1]
    }`;
  }

  fetch(
    "https://1ykge6pj5b.execute-api.us-east-1.amazonaws.com/default/fetchPosts",
    {
      headers
    }
  )
    .then(response => response.json())
    .then(json => {
      let posts = [];

      json.forEach(post => {
        post = {
          date: post.date,
          modified: post.modified,
          title: post.title.rendered,
          content: post.content.rendered,
          excerpt: post.excerpt.rendered,
          author: post.author,
          slug: post.slug,
          id: post.id
        };

        if (sort && sort === "date-descending") {
          posts.unshift(post);
        } else posts.push(post);
      });

      this.posts = posts;
      this.postsLoading = false;

      this.postAuthorsLoading = true;

      return fetch(
        "https://0ilwfe0343.execute-api.us-east-1.amazonaws.com/default/fetchUsers",
        {
          headers: {
            "x-api-key": apiKey
          }
        }
      );
    })
    .then(response => response.json())
    .then(authors => {
      this.posts = formatPostAuthors(
        authors,
        JSON.parse(JSON.stringify(this.posts))
      );

      this.postAuthorsLoading = false;
    })
    .catch(e => {
      console.log(e);
      this.postsLoading = false;
      this.postAuthorsLoading = false;
    });
}
