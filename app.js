const menu = document.querySelector(".hamburger");
const showMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close");
const returN =document.querySelector(".menu-content")


menu.addEventListener("click", function(){
    showMenu.style.transform = "translate(0%)"
    // hero.style.add(".bgOpacity");
});
closeMenu.addEventListener("click", function(){
    showMenu.style.transform = "translate(100%)"
})

returN.addEventListener("click", function(){
    showMenu.style.transform = "translate(100%)"
})