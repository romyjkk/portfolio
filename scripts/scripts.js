/* opening and closing hamburger menu */

var hamburgerMenu = document.querySelector("header nav ul:nth-of-type(2)")
var buttonHamburgerMenu = document.querySelector("header nav ul:first-of-type li:last-of-type button")

function showMenu() {
    hamburgerMenu.classList.toggle("menu");
}

buttonHamburgerMenu.addEventListener("click", showMenu);