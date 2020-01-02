const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 +
          0.5}s`;
      }
    });
    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// let div_top;

// $(window).resize(function() {
//   div_top = $("#sticky-anchor").offset().top;
// });

// function sticky_relocate() {
//   let window_top = $(window).scrollTop();
//   if (window_top > div_top - 10) {
//     $("#sticky").addClass("stick");
//   } else {
//     $("#sticky").removeClass("stick");
//   }
// }

// if ($(window).width() >= 600) {
//   $(function() {
//     div_top = $("#sticky-anchor").offset().top;
//     $(window).scroll(sticky_relocate);
//   });
// }

// $(function() {
//   div_top = $("#sticky-anchor").offset().top;
//   $(window).scroll(sticky_relocate);
// });
AOS.init({
  duration: 1000,
  easing: "ease",
  mirror: false,
  disable: false,
  once: true
});

// const linkAboutMe = document.getElementById("linkAboutMe");
// const linkProjects = document.getElementById("linkProjects");
// const linkResume = document.getElementById("linkResume");
// const linkContact = document.getElementById("linkContact");
// const linkRecipix = document.getElementById("linkRecipix");
// const linkRaceHopper = document.getElementById("linkRaceHopper");
// const linkBotBuddies = document.getElementById("linkBotBuddies");

const aboutMe = document.getElementById("aboutMe");
const projects = document.getElementById("projects");
const recipix = document.getElementById("recipix");
const racehopper = document.getElementById("racehopper");
const botbuddies = document.getElementById("botbuddies");
const resume = document.getElementById("resume");
const contact = document.getElementById("contact");

logo.addEventListener("click", () =>
  aboutMe.scrollIntoView({ behavior: "smooth" })
);
// linkAboutMe.addEventListener("click", () =>
//   aboutMe.scrollIntoView({ behavior: "smooth" })
// );

// linkProjects.addEventListener("click", () =>
//   projects.scrollIntoView({ behavior: "smooth" })
// );
// linkResume.addEventListener("click", () =>
//   resume.scrollIntoView({ behavior: "smooth" })
// );
// linkContact.addEventListener("click", () =>
//   contact.scrollIntoView({ behavior: "smooth" })
// );
// linkRecipix.addEventListener("click", () => {
//   recipix.scrollIntoView({ behavior: "smooth" });
// });
// linkRaceHopper.addEventListener("click", () =>
//   racehopper.scrollIntoView({ behavior: "smooth" })
// );
// linkBotBuddies.addEventListener("click", () =>
//   botbuddies.scrollIntoView({ behavior: "smooth" })
// );
