"use strict";
/* =============== ===== toggle icon navbar  ============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* =============== ===== scroll active link ============*/
let sections= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');
let scr =document.querySelector(".icon-top");
let scr2 =document.querySelector(".whats-icon");
    

window.onscroll = ()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

        if(this.scrollY>=600){
            scr.classList.add("show");
            }
            else{
                scr.classList.remove("show");
            };
        if(this.scrollY>=550){
            scr2.classList.add("show");
            }
            else{
                scr2.classList.remove("show");
            };
            
    });

    }
    scr.onclick = function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    

    /* =============== ===== sticky navbar ============*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);

    /* =============== ===== remove toggle icon and navbar when click navbar link (scroll)  ============*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
}; 


/* =============== ===== scroll reveal ============*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/* =============== ===== typed js ============*/

const typed = new Typed('.multiple-text',{
    strings:['Back-End Developer','PHP Developer', 'Laravel Developer' , 'Database Design and Optimizatin'],
    typeSpeed:100,
    backSpeed:100, 
    backDelay:1000,
    loop:true
});


/* =============== ===== read more ============*/

function more(){
    let moreText = document.querySelector('.more');
    let btn = document.getElementById('btn');

    moreText.classList.toggle('show');

    if (moreText.classList.contains('show')) {
        btn.innerHTML = 'Read Less';
    } else {
        btn.innerHTML = 'Read More';
    }
}
const container = document.querySelector(".particles");

if (container) {
  for (let i = 0; i < 40; i++) {
    let span = document.createElement("span");

    span.style.left = Math.random() * 100 + "%";
    span.style.animationDuration = (Math.random() * 5 + 5) + "s";
    span.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(span);
  }
}
// document.querySelector('.whats-icon').classList.add('show');