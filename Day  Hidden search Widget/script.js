const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");

  //search.classList.add("active");
  input.focus();
});

// When you use forms

// Click outside to hide bar
// document.addEventListener("click", (e) => {
//   if (e.target.nodeName === "BODY") {
//     search.classList.remove("active");
//   }
// });

// Submit function on button
search.addEventListener("submit", (e) => {
  e.preventDefault();
  input.value && console.log("submit", input.value);
});
