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





//  navbar hilight (my work) 21.04.03
// const option = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.9
// };

// const callback = (entries , observer) => {
//     entries.forEach(entry => {
//         const navbarMenuItems = document.querySelectorAll('.navbar_menu_items');
//         if(entry.isIntercting) {
//             if (entry.target.dataset.filter == navbarMenuItems.dataset.link) {
//                 entry.target.dataset.filter.add('active');
//             }
            
//         } else {
//             if (entry.target.dataset.filter == navbarMenuItems.dataset.link) {
//                 entry.target.dataset.filter.remove('avtive'); 
//         }
//     }})
// };

// const navbarObserver = new IntersectionObserver(callback , option);

// const sections = document.querySelectorAll('.section');

// sections.forEach(section => navbarObserver.observe(section));
//  못하겟다 꾀꼬리






// 21.03.30 
// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar_toggle-button');
navbarToggleBtn.addEventListener('click' , () => {
    navbarMenu.classList.toggle('open');
});


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

workBtnContainer.addEventListener('click' , (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }
    
    const active = document.querySelector('.catagory_btn.selected');
    active.classList.remove('selected')
    const target = 
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected')
    projectContainer.classList.add('anim-out'); 
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

// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고온다.
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
const sectionIds = 
['#Home' , '#about' , '#skills' , '#work' , '#testimonials' , '#contact'];

const sections = sectionIds.map(id => document.querySelector(id));
const navItems = 
sectionIds.map(id => document.querySelector(`[data-link = "${id}"]`));


let selectedNavItme = navItems[0];
function selectNavItem(selected) {
    selectedNavItme.classList.remove('active');
    selectedNavItme = selected;
    selectedNavItme.classList.add('active');
}

const observerOption = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

let selectedNavIndex = 0;

const observerCallback = (entries , observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting && entry.intersectionRatio > 0) {
            const index = sectionIds.indexOf(`#${entry.target.id}`);
            // 스크롤링이 아래로 되어서 페이지가 올라옴 
            if(entry.boundingClientRect.y < 0) {
                selectedNavIndex = index + 1;
                
            } else {
                selectedNavIndex = index - 1;
            }
            
        } 
    })
};


window.addEventListener('wheel' , () => {
    if(window.scrollY === 0) {
        selectedNavIndex = 0;
    } else if (window.scrollY + window.innerHeight === 
        document.body.clientHeight) {
            selectedNavIndex = navItems.length - 1;
        }
        selectNavItem(navItems[selectedNavIndex]);
});

const observer = new IntersectionObserver(observerCallback , observerOption);

sections.forEach(section => observer.observe(section));
