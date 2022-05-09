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

// wishlist functionality

const whishlistBtn = document.querySelectorAll("[data-whishlist-btn]");
for (let i = 0; i < whishlistBtn.length; i++) {
  whishlistBtn[i].addEventListener("click", function () {
    elemToggleFunc(this);
  });
}


// go to top functionality

const goTopBtn = document.querySelector("[data-go-top]");
// console.log(goTopBtn);
window.addEventListener("scroll", function () {
  if (this.window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});