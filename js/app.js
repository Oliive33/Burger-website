let searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector(".header .search-form");

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchForm.classList.toggle("active");
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
});

let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  searchBtn.classList.remove("fa-times");
  searchForm.classList.remove("active");
});
window.addEventListener("click", () => {
  searchBtn.classList.remove("fa-times");
  searchForm.classList.remove("active");
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
});
