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

};
export default main;
