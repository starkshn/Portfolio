'use strict';

// make navbar when it is on the top 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll' , () => {
    // console.log(window.scrollY);
    // console.log(`naverbarHeight: ${navbarHeight}`);
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }

    
});
// arrow function 아무런 인자를 받지않고 블럭{}을 실행해줘 라는뜻

const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click' , (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});
});
// Handle scrolling when tapping on the navbar

// const item = document.querySelector("navbar_menu_items");
// const move = 

// document.addEventListener('click' , () =>{
    
// })

