let y = window.scrollY;
let nav = document.querySelector(".nav-bar")
let openMenuScroll = document.querySelector(".open-menu")

document.addEventListener("scroll", () => {
    y = window.scrollY;

    if (window.scrollY > 10) {
        nav.classList.add("sticky")
        openMenuScroll.style.top = "5rem";
        menu.style.filter = "invert(1)"
    } else {
        nav.classList.remove("sticky")
        openMenuScroll.style.top = "6rem";
         menu.style.filter = "invert(0)"
    }
})