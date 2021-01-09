class ProjectSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<section id="project" class="bg-dark">
                        <h1 class="title"><span>Project</span></h1>
                        <div class="container project-container">
                          <div class="project-wrapper">
                            <img src="src/img/p1.jpg" alt="" />
                            <div class="project-quote">
                              <h3>Seminar App</h3>
                              <h5>Features: Payment Gateway Simulate, RSA Criptography</h5>
                              <h5>
                                Tech used: PHP - Codeigniter, Bootstrap, Mysql & Midtrans API
                              </h5>
                            </div>
                          </div>
                          <div class="project-wrapper">
                            <img src="src/img/p2.jpg" alt="" />
                            <div class="project-quote">
                              <h3>Calculator App</h3>
                              <h5>Tech used: Dart (Flutter)</h5>
                            </div>
                          </div>
                        </div>
                      </section>`;
  }
}

customElements.define("project-section", ProjectSection);
