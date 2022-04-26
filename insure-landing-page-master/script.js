const iconHamburger = document.getElementById("icon-hamburger");
const menu = document.getElementById("menu");

iconHamburger.addEventListener('click', () => {
    iconHamburger.classList.toggle("show");
    menu.classList.toggle("show");
});