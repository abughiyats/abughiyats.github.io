class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `<div class="container nav-container dflex">
                        <div id="brand"><a id="brand-link" href="#home">Abu Ghiyats</a></div>
                        <div id="hamburger"><i id="ihamburger" class="bx bx-menu"></i></div>
                        <ul class="ul-menu dflex">
                          <li class="li-menu">
                            <a class="navlink" href="#aboutme">About Me</a>
                          </li>
                          <li class="li-menu"><a class="navlink" href="#skills">Skills</a></li>
                          <li class="li-menu">
                            <a class="navlink" href="#project">Project</a>
                          </li>
                          <!-- <li class="li-menu"><a class="navlink" href="#services">Services</a></li> -->
                        </ul>
                      </div>`;

    if (window.matchMedia("(max-width: 600px)")) {
      document
        .querySelector(".nav-container")
        .addEventListener("click", this._clickEvent);
    }
  }
}

customElements.define("app-bar", AppBar);
