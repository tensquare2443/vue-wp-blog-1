export default function(authors, posts) {
  let postsWithoutAuthorNames = posts;
  let postsWithAuthorNames = [];

  postsWithoutAuthorNames.forEach(post => {
    for (var i = 0; i < authors.length; i++) {
      if (authors[i].id === post.author) {
        post.author = {
          name: authors[i].name,
          id: post.author
        };
        postsWithAuthorNames.push(post);
        break;
      }
    }
  });

  return postsWithAuthorNames;
};
