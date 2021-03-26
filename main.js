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
// -------------------------------------------------


//---------------------------------------------
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
// 엘리가 한거끝 
// -------------------------------------------------



// -------------------------------------------------
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
// 아까는 #Home 으로 하면 전체다가 tranparent 됬는데 html 파일에 home__container 만들어서 그안에 원래 있던거 다넣고
// querySelector(.home__container) 로 바꿔줌으로써 home 안에있는 contents들만 투명히게 만들어 줬다.

// -------------------------------------------------


// ------------------------------------------
// make arrow button when scroll down 내가 한거임
// const Arrow = document.querySelector("#Arrow");
// window.addEventListener('scroll' , () => {
//     if(this.scrollY > 300) {
//         Arrow.classList.add('ArrowOn');
//     } else {
//         Arrow.classList.remove('ArrowOn');
//     }
    
// })

// Arrow.addEventListener('click' , () => {
//     scrollIntoView("#Home");
// })
// 내가 한거 끝

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll' , () => {
    if (window.scrollY > homeHeight / 2 ) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
})

// Handle clcik on the "arrow up" button
arrowUp.addEventListener('click' , () => {
    scrollIntoView("#Home");
})




// --------------------------------------------