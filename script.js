// dropdown vars
const arrowDownImg1 = document.querySelector('.arrown-img1');
const arrowDownImg2 = document.querySelector('.arrown-img2');
const dropDownDiv = document.querySelector('.drop-down-list-one');
const dropDownDiv2 = document.querySelector('.com');

// menu toggle vars
const menuOpen = document.querySelector('.menu-open');
const navbar = document.querySelector('nav');
const logAndReg = document.querySelector('.log-reg');
const closeMenu = document.querySelector('.menu-close');
const overlayDiv = document.querySelector('.overlay');


arrowDownImg1.addEventListener('click', closeDropDown);
arrowDownImg2.addEventListener('click', closeDropDown2);

menuOpen.addEventListener('click', openNav);
closeMenu.addEventListener('click', closeNav);

function closeDropDown() {
    dropDownDiv.classList.toggle('drop-down-list-close');
    arrowDownImg1.classList.toggle('close');
}

function closeDropDown2() {
    dropDownDiv2.classList.toggle('drop-down-list-close2');
    arrowDownImg2.classList.toggle('close');
}

function openNav() {
    navbar.classList.add('open');
    logAndReg.classList.add('log-reg-open');
    overlayDiv.classList.add('overlay-open');
}

function closeNav() {
    navbar.classList.remove('open');
    logAndReg.classList.remove('log-reg-open');
    overlayDiv.classList.remove('overlay-open');
}