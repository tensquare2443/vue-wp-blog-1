import { apiKey } from "./getKey";

export default function() {
  this.postCategoriesLoading = true;

  fetch(
    "https://o25hhf9l6l.execute-api.us-east-1.amazonaws.com/default/fetchPostCategories",
    {
      headers: {
        "x-api-key": apiKey
      }
    }
  )
    .then(response => response.json())
    .then(json => {
      let postCategories = [];

      json.forEach(postCategory => {
        if (!postCategories.includes(postCategory)) {
          postCategories.push({
            id: postCategory.id,
            name: postCategory.name,
            slug: postCategory.slug
          });
        }
      });

      this.postCategories = postCategories;
      this.postCategoriesLoading = false;
    })
    .catch(e => {
      console.log(e);
      this.postCategoriesLoading = false;
    });
}
