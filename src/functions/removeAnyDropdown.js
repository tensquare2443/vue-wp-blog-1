export default function(e) {
  if (!e.target.getAttribute("dd-element")) {
    if (this.filtering) {
      this.filtering = false;
    }
    if (this.sorting) {
      this.sorting = false;
    }
  }
}