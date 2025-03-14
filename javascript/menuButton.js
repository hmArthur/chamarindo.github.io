
const menu = document.querySelector(".menu");
const openMenu = document.querySelector(".open-menu");
let menuState = false;

menu.addEventListener("click", () => {
    if(!menuState) {
        openMenu.style.display = "block";
        menuState = true;
        return
    } 
    
    if(menuState) openMenu.style.display = "none";
    menuState = false;
})



