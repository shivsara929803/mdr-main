let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');
let HomeToggle = document.querySelector('.home-toggle');
let AboutToggle = document.querySelector('.about-toggle');
let ServiceToggle = document.querySelector('.service-toggle');
let PortfolioToggle = document.querySelector('.portfolio-toggle');
let TestimionialToggle = document.querySelector('.testimonial-toggle');
let ContactToggle = document.querySelector('.contact-toggle');


Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};

HomeToggle.onclick = () =>{
  Navbar.classList.toggle("active")
};

AboutToggle.onclick = () =>{
  Navbar.classList.toggle("active")
};

ServiceToggle.onclick = () =>{
  Navbar.classList.toggle("active")
};

PortfolioToggle.onclick = () =>{
  Navbar.classList.toggle("active")
};

TestimionialToggle.onclick = () =>{
  Navbar.classList.toggle("active")
};

ContactToggle.onclick = () =>{
  Navbar.classList.toggle("active")
};

var swiper = new Swiper(".home-slid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});



var swiper = new Swiper(".team-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      "0": {
        slidesPerView: 1,
        autoplay:{
            delay:700,
            disableOnInteraction:false,
        },
      },
      "768": {
        slidesPerView: 2,
          
      },
      "1020": {
        slidesPerView: 3,
          
      },
    },
  });

 