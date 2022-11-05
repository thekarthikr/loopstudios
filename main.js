const navToggle = document.getElementById('menu-btn'),
      navMenu = document.getElementById('nav-menu'),
      navLink = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click' ,function(){

     navToggle.classList.toggle('active');
     navMenu.classList.toggle('flex');
     navMenu.classList.toggle('hidden');
     
    

})
function activeLink(){
navMenu.classList.toggle('hidden');
navMenu.classList.toggle('flex');
navToggle.classList.remove('active');
}

navLink.forEach(n => n.addEventListener('click', activeLink));

