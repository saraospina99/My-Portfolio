const iconMenu = document.querySelector(".icon_menu_toggle");
const menu = document.querySelector(".menu");

function checkClass() {
    menu.classList.toggle("show_toggle");
}

iconMenu.addEventListener("click", checkClass);
