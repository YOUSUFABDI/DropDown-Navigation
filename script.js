const dropdownLink = document.querySelectorAll('.dropdown-link');
const dropdown = document.querySelector('.dropdown-list-features');
const dropdownLinkFeatures = document.querySelector('.dropdown-link-features');


const dropdownLinkCompany = document.querySelector('.dropdown-link-company');
const dropdownCompany = document.querySelector('.dropdown-list-company');

const arrowFeature = document.querySelector('.arrow-feature img');
const arrowCompany = document.querySelector('.arrow-company img');

const navLinks = document.querySelector('.navlinks');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const overlay = document.querySelector('.overlay');

openMenu.addEventListener('click', openNav);
closeMenu.addEventListener('click', closeNav);

dropdownLink.forEach(element => {
    element.addEventListener('click', () => {
        if(element === dropdownLink[0]) {
            dropdown.toggleAttribute('data-visiable');
            if(dropdown.hasAttribute('data-visiable')) {
                dropdown.classList.add('dropdown-open');
                dropdownLinkFeatures.setAttribute("aria-expanded", true);
                arrowFeature.classList.add('rotate');
            }else{
                dropdown.classList.remove('dropdown-open');
                dropdownLinkFeatures.setAttribute("aria-expanded", false);
                arrowFeature.classList.remove('rotate');
            }
        }else{
            dropdownCompany.toggleAttribute('data-visiable');
            if(dropdownCompany.hasAttribute('data-visiable')){
                dropdownCompany.classList.add('dropdown-open');
                dropdownLinkCompany.setAttribute("aria-expanded", true);
                arrowCompany.classList.add('rotate');
            }else{
                dropdownCompany.classList.remove('dropdown-open');
                dropdownLinkCompany.setAttribute("aria-expanded", false);
                arrowCompany.classList.remove('rotate');
            }
        }
    });
});

function openNav() {
    navLinks.classList.add('nav-open');
    overlay.classList.add('add');
}

function closeNav() {
    navLinks.classList.remove('nav-open');
    overlay.classList.remove('add');
}