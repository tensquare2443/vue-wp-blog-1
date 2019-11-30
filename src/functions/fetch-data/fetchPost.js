import { key } from "./getKey";
import formatPostAuthors from "../formatPostAuthors";

export default function(postId) {
  this.postLoading = true;

  const headers = {
    "x-api-key": key,
    "post-id": postId
  };

  fetch(
    "https://25ihpxsml3.execute-api.us-east-1.amazonaws.com/default/fetchPost",
    {
      headers
    }
  )
    .then(response => response.json())
    .then(json => {
      const post = {
        date: json.date,
        modified: json.modified,
        title: json.title.rendered,
        content: json.content.rendered,
        author: json.author,
        slug: json.slug,
        id: json.id
      };

      this.post = post;
      this.postLoading = false;

      this.postAuthorsLoading = true;

      return fetch(
        "https://0ilwfe0343.execute-api.us-east-1.amazonaws.com/default/fetchUsers",
        {
          headers: {
            "x-api-key": key
          }
        }
      );
    })
    .then(response => response.json())
    .then(json => {
      let authors = [];

      json.forEach(author => {
        authors.push({
          id: author.id,
          name: author.name,
          slug: author.slug
        });
      });

      this.post = formatPostAuthors(authors, [
        JSON.parse(JSON.stringify(this.post))
      ])[0];
      this.postAuthorsLoading = false;
    })
    .catch(e => {
      this.postLoading = false;
      this.postAuthorsLoading = false;
      this.$router.push('/');
    });
}