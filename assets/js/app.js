// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburgerburger selections

const burger_index = document.querySelector("#burger-menu");
const burger_project = document.querySelector("#burger-menu-project");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger_project.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

  burger_index.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

  