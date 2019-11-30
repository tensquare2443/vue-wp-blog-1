export default function(filter) {
  if (filter) {
    this.filtering = filter;
  } else this.filtering = false;
}