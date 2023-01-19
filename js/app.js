/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.querySelector('.navbar__menu');
const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const header = document.querySelector('.page__header');
const footer = document.querySelector('footer');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
//...................................................................
// build the nav
function buildNav(){
    sections.forEach(function (section) {
            // creating Li elements
            const navBtn = document.createElement('li');
            //insreting text inside li elements 
            navBtn.insertAdjacentHTML('beforeend', `<a class="menu__link">${section.dataset.nav}</a>`);
            // Append li to ul
            navList.appendChild(navBtn);
            scrolling(navBtn,section)
        });
    //append ul to nav

}

//invoke building the nav function
buildNav();
//...................................................................



// Add class 'active' to section when near top of viewport

function makeActive(){
    //selecting all <a> elements using the class we created
    sections.forEach(function (section, i) {
        const navActivated = document.querySelectorAll(".menu__link");
        //getting the boundingrect
        const sectionBound = section.getBoundingClientRect();
        // check if section in viewport 
        if (sectionBound.top <= 150 && sectionBound.bottom >= 150) {
            // adding active class to section & adding active button class to thw nav button
            section.classList.add('activeOne');
            navActivated[i].classList.add('activeBtn');
        } else {
            //removing sections and button of active when section is not seen
            section.classList.remove('activeOne');
            navActivated[i].classList.remove('activeBtn');
        }
    })
    }
//...................................................................
// Scroll to anchor ID using scrollTO event
function scrolling(navBtn,section){
    navBtn.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop - 50,
            behavior:"smooth"
        });
    })
}
//...................................................................

// start toggling the navBar and setting time out 
function toggleNavBar(){
    let clientScroll;
    //Default setting 
    header.style.cssText = 'opacity: 1; display:block; transition: ease 0.3s ;'
    //clearTimeOut 
    window.clearTimeout(clientScroll);
    // setting timeout after scrolling ends
   clientScroll = setTimeout(function(){
        // setting after timeout finioshed 
        header.style.cssText = 'opacity: 0 ; display:none; transition: ease 0.3s ;'
    },2500);
}

//...................................................................

// Scroll to section on link click && creating top button

/*
1) create div return top
2) default display none
3) change to display block when scroll below first fold
*/
let topBtn = document.getElementById('topBtn')
document.addEventListener('scroll',function () {
    let offsetY = window.pageYOffset;
    if(offsetY > 550){
        topBtn.classList.remove('d-none')
    }
    else{
        topBtn.classList.add('d-none')
    }
})

// scrolling to the top 
topBtn.addEventListener('click',function(){
window.scrollTo({
    top:0,
    behavior:"smooth"
});
});

//...................................................................
// Set sections as active
document.addEventListener('scroll',function () {
        makeActive();
        toggleNavBar();
    })
//...................................................................