/** @format */

// toggle icon navbar

const menu = document.querySelector(".bx-menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) || navbar.contains(e.target)) {
    navbar.classList.remove("show");
  }
});

// scroll section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(function (section) {
    let top = window.scrollY;
    let offset = section.offsetTop - 10;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    console.log(top);

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach(function (link) {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }

    // ABOUT

    const toast = document.querySelector(".toast");
    if (top >= 640) {
      toast.classList.add("alert");
    }
    setTimeout(() => {
      toast.classList.add("alnone");
    }, 2000);
  });
  // sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 10);
};

// experience

function toggleDetail(e) {
  const target = $(e.target);

  if ($(target).hasClass("active")) {
    $(target).html("More Detail").removeClass("active");
  } else {
    $(target).html("Less Detail").addClass("active");
  }

  const item = $(target).parents(".about-exp-item");
  const detail = $(item).children(".about-exp-item-detail");
  $(detail).slideToggle();
}

// const buttons = document.querySelectorAll(".button")

// btnText.addEventListener("click", function () {
//   const moreText = document.querySelector(".about-exp-item-detail");

//   if (moreText.style.display === "none") {
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "inline";
//   } else {
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "none";
//   }
// });
