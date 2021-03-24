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
    scrollIntoView(link);
})
// Handle scrolling when tapping on the navbar

// const item = document.querySelector("navbar_menu_items");
// const move = 

// document.addEventListßner('click' , () =>{
    
// })


// Hnadle click on "contact me" button on home

// 내가 한거
// const contactMe = document.querySelector(".home_contact");
// contactMe.addEventListener('click' , (event) => {
//     console.log('good');
//     const link = event.target.dataset.link;
//     const moveContact = document.querySelector(link);
//     moveContact.scrollIntoView({behavior: 'smooth'});
// });
// 내가 한거 끝

// 엘리가 한거
const homeContactBtn = document.querySelector(".home_contact")
homeContactBtn.addEventListener('click' , () => {
    scrollIntoView("#contact");
})

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector)
    scrollTo.scrollIntoView({behavior: 'smooth'}); 
}
// 끝 


// Make home slowly fade to transparent as the window scrolls down

//내가 한거
// const homeBody = document.querySelector("#Home");
// const homeHeight = homeBody.getBoundingClientRect().height;
// document.addEventListener('scroll' , () => {
//     if (window.scrollY >= (homeHeight * 0.5)) {
//         homeBody.classList.add("homeBody--transparent1");
//     }
//     if (window.scrollY === homeHeight) {
//         homeBody.classList.add("homeBody--transparent2");
//     }
//     if (window.scrollY < (homeHeight * 0.5)) {
//         homeBody.classList.remove("homebody--transparent1");
//         homeBody.classList.remove("homebody--transparent2");
//     }
// })
// 내가 한거 끝

// 엘리가 한거
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll' , () => {
    // console.log(1 - window.scrollY / homeHeight) 맞다
    home.style.opacity = 1 - (window.scrollY / homeHeight);
})


