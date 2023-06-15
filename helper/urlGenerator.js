export const urlGenerator = {
  blogPost: (title, id) => {
    let url = `/blog/${title.replaceAll(" ", "-")}-${id}`;

    return url;
  },
};
