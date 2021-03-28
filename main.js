const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// To add active class to side nav bars

const side__nav__components = document.querySelectorAll("#nav__components");
console.log(side__nav__components);

side__nav__components.forEach((component) => {
    component.addEventListener('click', ()=> {
        removeActiveClasses();
        console.log("Removed",component);
        component.classList.add('active');
    })
})

const removeActiveClasses = () => {
    side__nav__components.forEach(component => {
        component.classList.remove('active');

    })
}
