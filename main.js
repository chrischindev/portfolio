AOS.init({
  duration: 1000,
  easing: "ease",
  mirror: false,
  disable: "mobile",
  once: true
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinksLi = document.querySelectorAll(".nav-links li");
  const navLinksA = document.querySelectorAll(".nav-links a");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinksLi.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 15 +
          0.5}s`;
      }
    });
    // Burger Animation
    burger.classList.toggle("toggle");
  });

  navLinksA.forEach(link =>
    link.addEventListener("click", () => {
      if (nav.classList.contains("nav-active")) {
        // Close Navbar when Anchor tags are clicked
        nav.classList.remove("nav-active");

        burger.classList.toggle("toggle");

        // Remove Style for each link
        navLinksLi.forEach(link => {
          link.style.animation = "";
        });
      }
    })
  );
};

navSlide();

// index of each deck, initialized to first slide for each deck
let slideIndex = [1, 1, 1];

let slideId = ["recipixSlides", "raceSlides", "botSlides"];
let dotId = ["recipixDots", "raceDots", "botDots"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

// Next/previous controls
function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

// Thumbnail image controls
function currentSlide(n, no) {
  showSlides((slideIndex[no] = n), no);
}

function showSlides(n, no) {
  let x = document.getElementsByClassName(slideId[no]);
  let dots = document.getElementsByClassName(dotId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  x[slideIndex[no] - 1].style.display = "block";
  dots[slideIndex[no] - 1].className += " active";
}

let date = new Date();
let year = date.getFullYear();
let yearSpan = document.getElementById("year");
yearSpan.textContent = year;
