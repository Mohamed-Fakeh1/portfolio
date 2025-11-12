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
            
    });

    scr.onclick = function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }

    /* =============== ===== sticky navbar ============*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.screenY > 100);

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
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/* =============== ===== typed js ============*/

const typed = new Typed('.multiple-text',{
    strings:[ 'Full-Stack Developer', 'Front-End Developer', 'Back-End Developer', 'Web-Sites Developer', 'Designer'],
    typeSpeed:100,
    backSpeed:100, 
    backDelay:1000,
    loop:true
});


/* =============== ===== read more ============*/

function more(){
    let more = document.querySelector('.more');
    let btn = document.getElementById('btn');

    if(more.style.display == 'none'){
        more.style.display = 'inline';
        btn.innerHTML = 'Read Less';
    }else{
        more.style.display = 'none';
        btn.innerHTML = 'Read More';
    }
}