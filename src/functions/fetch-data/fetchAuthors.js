import { apiKey } from "./getKey";

export default function() {
  this.authorsLoading = true;

  fetch(
    "https://0ilwfe0343.execute-api.us-east-1.amazonaws.com/default/fetchUsers",
    {
      headers: {
        "x-api-key": apiKey
      }
    }
  )
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

      this.authors = authors;
      this.authorsLoading = false;
    })
    .catch(e => {
      console.log(e);
      this.authorsLoading = false;
    });
}
