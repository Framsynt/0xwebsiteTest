import anime from "animejs";
import helpers from "./helpers.js";
import getProfiles from "./twitter.js";

var animationsxV = (function () {
  const video = document.querySelector(".back-video");
  const sections = document.querySelectorAll(".js-section");
  const navButtons = document.querySelectorAll(".js-nav-btn");
  const navWrapper = document.querySelector(".side-nav-wrapper");
  var loading = true;


  // hide sections
  sections.forEach(section => {
    section.style.display = "none";
  });

  navWrapper.style.display = "none";

  // add listeners
  video.addEventListener("play", (event) => {
    addProfileImages();
    playIntroAnimation();
  });

  navWrapper.addEventListener("click", (event) => {
    resolveNavClick(event);
  });


  function playIntroAnimation() {
    if (loading === false) {
      return;
    }
    const loadingScreen = document.querySelector(".loading-screen");
    console.log("Play");

    anime({
      targets: loadingScreen,
      delay: 200,
      opacity: [1, 0],
      duration: 400,
      easing: "cubicBezier(0.4, 0.0, 1, 1)",
      complete() {
        loadingScreen.style.display = "none";
        loading = false;
        // open nav
        navAnimation();
        // open first section
        sectionAnimation("ventures");
      },
    });
  }

  function navAnimation() {
    navWrapper.style.display = "flex";
    anime({
      targets: navButtons,
      delay: anime.stagger(100),
      translateX: [-100, 0],
    });
  }

  function sectionAnimation(sectionId) {
    if (sectionId === null) {
      return;
    }

    const section = document.querySelector("#" + sectionId);

    var timeline = anime.timeline({
      easing: "easeOutExpo",
      duration: 750,
    });

  }

  async function addProfileImages() {
    const membersWrapper = document.querySelector(".js-members");
    const membersImages = await getProfiles();
    var membersInner = document.createElement("div");
    membersInner.classList.add('members-inner');

    var memberNodes = [];
    membersImages.forEach((member, src) => {
      var div = document.createElement('div');
      div.classList.add("member");
      var img = document.createElement('img');
      img.classList.add("member__img");
      img.src = src;
      var span = document.createElement('span');
      span.classList.add("member__name");
      span.innerHTML = member;
      div.appendChild(img);
      div.appendChild(span);
      membersInner.appendChild(div);
    });

    membersWrapper.appendChild(membersInner);

  }

  function resolveNavClick(event) {
    console.log(event.target);
  }


})();

// maybe?
// var sectionAnimation = (function () {});

