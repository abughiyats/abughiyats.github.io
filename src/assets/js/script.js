function matches()
{
  var cvButton = document.getElementById("cv");
  cvButton.innerHTML = window.matchMedia("(max-width: 600px)").matches ? "My CV" : "Curriculum Vitae";
    
}
window.onresize = function(event) {
  matches();
};
matches();

if(window.matchMedia("(max-width: 600px)")){
  document.addEventListener('click', function(e){
    const ul_menu = document.querySelector('.ul-menu')
    const hamburger = ul_menu.previousElementSibling.firstChild;
    t = e.target
    if(t.id === hamburger.id){
      ul_menu.classList.toggle('slide')? t.classList = 'bx bx-x' : t.classList = 'bx bx-menu';
    }else if(t.classList.contains('navlink')){
      if(ul_menu.classList.contains('slide')){
        ul_menu.classList.remove('slide');
        hamburger.classList = 'bx bx-menu';
      }
    } else if(t.id === 'brand-link'){
      hamburger.classList = 'bx bx-menu';
      ul_menu.classList.remove('slide');
    }
  })
}

const waterfall = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});



/*SCROLL HEADER*/
waterfall.reveal('nav',{}); 
waterfall.reveal('.head-title',{}); 
waterfall.reveal('#cv',{delay: 200}); 
waterfall.reveal('.social-link',{delay: 400}); 
waterfall.reveal('.head-image',{ interval: 200}); 

/*SCROLL ABOUT*/
waterfall.reveal('.title',{}); 
waterfall.reveal('.aboutme-tumbnail',{delay: 400}); 
waterfall.reveal('.aboutme-subtitle',{delay: 200}); 
waterfall.reveal('.aboutme-btn',{interval: 200}); 

// /*SCROLL SKILLS*/
waterfall.reveal('.title',{}); 
waterfall.reveal('.skills-box',{interval: 200}); 

// /*SCROLL PROJECT*/
waterfall.reveal('.title',{}); 
waterfall.reveal('.project-wrapper',{interval: 200}); 

// /*SCROLL FOOTER*/
waterfall.reveal('.content-foot',{}); 
waterfall.reveal('.fsocial',{interval: 400}); 
waterfall.reveal('.copyright',{interval: 400}); 






