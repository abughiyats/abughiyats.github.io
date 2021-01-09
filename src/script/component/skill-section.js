class SkillSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<section id="skills" class="bg-calm">
                        <h1 class="title">Skills</h1>
                        <div class="container skills-container dgrid">
                          <div class="skills-box">
                            <i class="bx bxl-javascript skills-icon"></i>
                            <span class="skills-name">JAVASCRIPT</span>
                          </div>
                          <div class="skills-box">
                            <i class="fab fa-php skills-icon"></i>
                            <span class="skills-name">PHP & CODEIGNITER</span>
                          </div>
                          <div class="skills-box">
                            <i class="bx bx-refresh skills-icon"></i>
                            <span class="skills-name">AJAX</span>
                          </div>
                          <div class="skills-box">
                            <i class="bx bxs-devices skills-icon"></i>
                            <span class="skills-name">FLUTTER</span>
                          </div>
                          <div class="skills-box">
                            <i class="bx bxl-git skills-icon"></i>
                            <span class="skills-name">GIT & GITHUB</span>
                          </div>
                          <div class="skills-box">
                            <i class="bx bx-code-curly skills-icon"></i>
                            <span class="skills-name">REST API</span>
                          </div>
                        </div>
                      </section>`;
  }
}

customElements.define("skill-section", SkillSection);
