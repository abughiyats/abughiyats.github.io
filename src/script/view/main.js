import "../component/app-bar.js";

const main = function () {
  const appBar = document.querySelector("app-bar");

  const objmatches = function matches() {
    var cvButton = document.getElementById("cv");
    cvButton.innerHTML = window.matchMedia("(max-width: 600px)").matches
      ? "My CV"
      : "Curriculum Vitae";
  };
  window.onresize = function (event) {
    objmatches();
  };
  objmatches();

  const hamburgerBar = function (event) {
    const ul_menu = appBar.firstChild.lastElementChild;
    const hamburger = ul_menu.previousElementSibling.firstChild;
    const eclicked = event.target;
    if (eclicked.id === hamburger.id) {
      ul_menu.classList.toggle("slide")
        ? (eclicked.classList = "bx bx-x")
        : (eclicked.classList = "bx bx-menu");
    } else if (eclicked.classList.contains("navlink")) {
      if (ul_menu.classList.contains("slide")) {
        ul_menu.classList.remove("slide");
        hamburger.classList = "bx bx-menu";
      }
    } else if (eclicked.id === "brand-link") {
      hamburger.classList = "bx bx-menu";
      ul_menu.classList.remove("slide");
    }
  };

  appBar.clickEvent = hamburgerBar;

  // const waterfall = ScrollReveal({
  //   origin: "top",
  //   distance: "80px",
  //   duration: 2000,
  //   reset: true,
  // });

  // /*SCROLL HEADER*/
  // waterfall.reveal("nav", {});
  // waterfall.reveal(".head-title", {});
  // waterfall.reveal("#cv", { delay: 200 });
  // waterfall.reveal(".social-link", { delay: 400 });
  // waterfall.reveal(".head-image", { interval: 200 });

  // /*SCROLL ABOUT*/
  // waterfall.reveal(".title", {});
  // waterfall.reveal(".aboutme-tumbnail", { delay: 400 });
  // waterfall.reveal(".aboutme-subtitle", { delay: 200 });
  // waterfall.reveal(".aboutme-btn", { interval: 200 });

  // // /*SCROLL SKILLS*/
  // waterfall.reveal(".title", {});
  // waterfall.reveal(".skills-box", { interval: 200 });

  // // /*SCROLL PROJECT*/
  // waterfall.reveal(".title", {});
  // waterfall.reveal(".project-wrapper", { interval: 200 });

  // // /*SCROLL FOOTER*/
  // waterfall.reveal(".content-foot", {});
  // waterfall.reveal(".fsocial", { interval: 400 });
  // waterfall.reveal(".copyright", { interval: 400 });
};
export default main;
