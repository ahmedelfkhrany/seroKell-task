const hamburger = document.getElementById("hamburger");
const navbar__items = document.getElementById("navbar__items");
const navbar = document.getElementById("navbar");
const title = document.getElementById("title");
hamburger.addEventListener("click", () => {
  navbar__items.classList.toggle("show");
  navbar.classList.toggle("max");
  title.classList.toggle("inc");
});
const submit = document.getElementById("submit");
const first = document.getElementById("first");
const second = document.getElementById("second");
const comment = document.getElementById("comment");
submit.addEventListener("click", () => {
  console.log(
    "First input is : " +
      first.value +
      " Second input is : " +
      second.value +
      " Third input is : " +
      comment.value
  );
});
