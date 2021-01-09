class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<a class="fsocial" href="https://fb.com/anggaprabes/"><i class="fab fa-facebook-square"></i></a>
                      <a class="fsocial" href="https://instagram.com/abughiyaats/"><i class="fab fa-instagram"></i></a>
                      <a class="fsocial" href="https://twitter.com/angginho/"><i class="fab fa-twitter"></i></a>
                      <h3 class="content-foot">| Abu Ghiyats</h3>
                      <h4 class="copyright">&#169; 2020 copyright all right reserved</h4>`;
  }
}

customElements.define("footer-bar", FooterBar);
