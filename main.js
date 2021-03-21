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
// arrow function 아무런 인자를 받지않고 블럭{}을 실행해줘 라는뜻`