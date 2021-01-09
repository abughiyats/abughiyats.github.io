class AboutMe extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<section id="aboutme" class="bg-dark">
                        <h1 class="title"><span>About Me</span></h1>
                        <div class="container aboutme-container dflex">
                          <div class="aboutme-tumbnail">
                            <img src="src/img/ag-blazer.jpg" alt="" />
                          </div>

                          <div class="aboutme-subtitle">
                            <h2>Angga Prabowo <span>(Abu Ghiyats)</span></h2>
                            <p>
                              Saya menguasai PHP diantaranya tentang OOP, MVC serta codeigniter
                              framework. Saya juga menguasai Javascript dari ES6, callback,
                              asynchronous, ajax, promise, fetch dan async await. Sedangkan
                              lingkungan pengembangan frontend side, saya dapat menggunakan
                              module & web component (custom element, shadow DOM), npm, webpack,
                              API dan nodejs. Saat ini saya terus memperdalam skill saya untuk
                              mempelajari framework.
                            </p>
                            <a
                              class="aboutme-btn bg-calm dinblock btn"
                              href="src/docs/CV_AnggaPrabowo.pdf"
                              class="button"
                              >Curriculum Vitae</a
                            >
                          </div>
                        </div>
                      </section>`;
  }
}

customElements.define("about-me", AboutMe);
