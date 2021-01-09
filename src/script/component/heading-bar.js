class HeadingBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="container header-container dgrid">
                        <div class="head-title">
                          <h1>Hello World,</h1>
                          <h1>Welcome here</h1>
                          <h2>I'm Angga Prabowo</h2>
                        </div>
                        <div class="head-social">
                          <a class="btn" id="cv" href="./src/docs/CV_AnggaPrabowo.pdf">Curriculum Vitae</a>
                          <a class="social-link" href="https://github.com/abughiyats/"><i class="bx bxl-github isoc"></i></a>
                          <a class="social-link" href="https://linkedin.com/in/anggaprabes/"><i class="bx bxl-linkedin-square isoc"></i></a>
                          <a class="social-link" href="https://behance.net/abughiyats"><i class="bx bxl-behance isoc"></i></a>
                        </div>
                        <div class="head-image"><img src="src/img/ag.png"/></div>
                      </div>`;
  }
}

customElements.define("heading-bar", HeadingBar);
