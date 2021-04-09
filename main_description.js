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
    navbarMenu.classList.add('open');
    scrollIntoView(link);
})
//-----------------------------------
// 21.03.31 navbar hilight 내가 한 작업 
const scrollHeight = window.scrollY;
const HilightHeight = document.querySelectorAll('section').getBoundingClientRect().height;

console.log(HilightHeight);
scrollHeight.addEventListener('scroll' , () => {
    let Height = HilightHeight.dataset.filter.getBoundingClientRect().height;

    if (scrollHeight < Height) {
        navbarMenu.add('hilight');
    } else {
        navbarMenu.remove('hilight');
    }
    
});
// 내가 한 작업 끝 (못하겟다.)
// ---------------------------------



// 21.03.30 
// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar_toggle-button');
navbarToggleBtn.addEventListener('click' , () => {
    navbarMenu.classList.toggle('open');
});


// 내가 해본거 21.03.29 navbar_toggle_btn + 21.03.30 
// if (window.matchMedia("screen and (max-width: 769px)").matches) {
//     const toggleBtn = document.querySelector(".navbar_toggle-button");
//     toggleBtn.addEventListener('click' , (event) => {
//         const spread = event.target;
//         if (event.target == '.fa-bars') {
//             spread = event.target.parentNode;
//         }
//         spread.classList.add("spread");
//     })
// }
// 이까지 내가 해본거 21.03.30 navbar_toggle_btn


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

// click My Work Park //

// Projects
const workBtnContainer = document.querySelector('.work_catagories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');
// const projects 해가지고 work_projects에 있는 애들을 전부 배열로 받겠다.

workBtnContainer.addEventListener('click' , (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    // event안에있는 target안에 있는 dataset안에있는 filter의값들을 받아 올게
    // || e에 있는 target에 있는 parentNode에 있는 dataset을 받아올게이다.
    if(filter == null) {
        return;
    }

    // 21.03.28 
    // Remove Selection from the previous item and select the new one
    const active = document.querySelector('.catagory_btn.selected');
    active.classList.remove('selected')
    const target = 
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    // e.targe의 nodeName이 ,지금 클릭된 target의 nodeName이 BUTTON이라면 e.target이거 그대로 쓰고 만약 BUTTON이 아니라면
    //  e.target의 parentNode로 지정해줄꺼다 
    // 이렇게 target을 정확하게 지정한다음에 항상 target에는 button 만 지정이된다.
    
    // e.target.classList.add('selected'); 그래서 이렇게가 아니라
    target.classList.add('selected')
    // 근데 여기서 이대로 포트폴리오에서 숫자 노란색 누르면 에러뜨는데 이것은 span이다.
    // 우리가 span 에다가 클래스 selected를 헐당하고있던거였다.
    // 그냥 target에다가 selected를 할당하는것이 아니였던것이다.

    // console.log(filter);
    projectContainer.classList.add('anim-out'); //  이상태로 놔두면 css에서 opacity가 0으로 계속 남아있는다. 그래서 어느정도의 시간이 지나면 class의 anim-out을 없애 줘야한다.
    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if(filter === "*" || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    },300)
});

// 여기에서 중요한게 모든 코드는 동기적으로 처리가 됩니다. 그래서 class에서 anim-out을 추가하자마자 모든 projects의 DOM element에 필요없는 project들을 다 filtering 한다음에 코드가 완료되면 브라우져에서 업데이트(css에서의 anim-out 효과) 되기 떄문이다. 그래서 뭔가 민망한 anim-out이 발생한다.
// 그래서 우리가 원하는것은 anim-out이 된다음에(보여진 다음에) filtering 된애들이 적용되게 해줘야 한다. 그래서 이렇게 

//즉 아까 앞에서는 anim-out이라는 클래스를 추가하고
// projects.forEach((project) => {
//     console.log(project.dataset.type);
//     if(filter === "*" || filter === project.dataset.type) {
//         project.classList.remove('invisible');
//     } else {
//         project.classList.add('invisible');
//     }
// });
// 이런 코드가 다 완료된 다음에 브라우져에서 업데이트 되서 사용자에게 보여졌다면
// 지금은 anim-out이 클래스를 추가한다음에 이 코드는 끝이난다.

// 그래서 
// setTimeout(() => {
//     projects.forEach((project) => {
//         console.log(project.dataset.type);
//         if(filter === "*" || filter === project.dataset.type) {
//             project.classList.remove('invisible');
//         } else {
//             project.classList.add('invisible');
//         }
//     });
//     projectContainer.classList.remove('anim-out');
// },300)

// 그래서 이 setTimeout() 함수는 300ms 후에 호출되어진다 누구로부터? 브라우져로부터 왜냐하면 setTimeout()은 브라우져에서 제공하는 api이기 떄문에 그래서 위에 setTimeout() => 이 코드는 "브라우져야 이 setTimeout() 코들ㄹ 0.3초 후에 실행햐줘" 라고 전달만 해놓고
// setTimeout(() => {
//     projects.forEach((project) => {
//         console.log(project.dataset.type);
//         if(filter === "*" || filter === project.dataset.type) {
//             project.classList.remove('invisible');
//         } else {
//             project.classList.add('invisible');
//         }
//     });
//     projectContainer.classList.remove('anim-out');
// },300)
// 이 블록을 끝내는 거다

// navbar active 수정 21.03.28
// const active = document.querySelector(".navbar_menu");
// active.addEventListener('click' , (e) => {
//     const menu = e.target
//     if(menu === )
//     menu.classList.add("active");
// })

