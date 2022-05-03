// element toggle function
const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// navbar variables
const navbar = document.querySelector("[data-navbar]");
const navbarToggleBtn = document.querySelector("[data-navbar-toggle-btn]");

navbarToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});
