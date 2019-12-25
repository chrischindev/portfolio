let div_top;

$(window).resize(function() {
  div_top = $("#sticky-anchor").offset().top;
});

function sticky_relocate() {
  let window_top = $(window).scrollTop();
  if (window_top > div_top - 10) {
    $("#sticky").addClass("stick");
  } else {
    $("#sticky").removeClass("stick");
  }
}

if ($(window).width() >= 600) {
  $(function() {
    div_top = $("#sticky-anchor").offset().top;
    $(window).scroll(sticky_relocate);
  });
}

$(function() {
  div_top = $("#sticky-anchor").offset().top;
  $(window).scroll(sticky_relocate);
});
AOS.init({
  duration: 1000,
  easing: "ease",
  mirror: false,
  disable: false
});

const buttonAboutMe = document.getElementById("buttonAboutMe");
// const buttonSkills = document.getElementById("buttonSkills");
const buttonProjects = document.getElementById("buttonProjects");
const buttonResume = document.getElementById("buttonResume");
const buttonContact = document.getElementById("buttonContact");
const buttonRecipix = document.getElementById("buttonRecipix");
const buttonRaceHopper = document.getElementById("buttonRaceHopper");
const buttonBotBuddies = document.getElementById("buttonBotBuddies");

const aboutMe = document.getElementById("aboutMe");
// const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const recipix = document.getElementById("recipix");
const racehopper = document.getElementById("racehopper");
const botbuddies = document.getElementById("botbuddies");
const resume = document.getElementById("resume");
const contact = document.getElementById("contact");

buttonAboutMe.addEventListener("click", () =>
  aboutMe.scrollIntoView({ behavior: "smooth" })
);
// buttonSkills.addEventListener("click", () =>
//   skills.scrollIntoView({ behavior: "smooth" })
// );
buttonProjects.addEventListener("click", () =>
  projects.scrollIntoView({ behavior: "smooth" })
);
buttonResume.addEventListener("click", () =>
  resume.scrollIntoView({ behavior: "smooth" })
);
buttonContact.addEventListener("click", () =>
  contact.scrollIntoView({ behavior: "smooth" })
);
buttonRecipix.addEventListener("click", () => {
  recipix.scrollIntoView({ behavior: "smooth" });
});
buttonRaceHopper.addEventListener("click", () =>
  racehopper.scrollIntoView({ behavior: "smooth" })
);
buttonBotBuddies.addEventListener("click", () =>
  botbuddies.scrollIntoView({ behavior: "smooth" })
);
