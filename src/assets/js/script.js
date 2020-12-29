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


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HEADER*/
sr.reveal('.head-title',{}); 
sr.reveal('#cv',{delay: 200}); 
sr.reveal('.social-link',{delay: 400}); 
sr.reveal('.head-image',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.title',{}); 
sr.reveal('.aboutme-tumbnail',{delay: 400}); 
sr.reveal('.aboutme-subtitle',{delay: 400}); 

// /*SCROLL SKILLS*/
sr.reveal('.title',{}); 
sr.reveal('.skills-box',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

// /*SCROLL PROJECT*/
sr.reveal('.title',{}); 
sr.reveal('.project-img',{interval: 200}); 

// /*SCROLL FOOTER*/
sr.reveal('footer h1',{}); 
sr.reveal('footer a',{delay: 400}); 
sr.reveal('footer h4',{delay: 400}); 






