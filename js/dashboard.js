//DOM ELEMENTS
var asideLeft = document.querySelector(".aside-left");
var main = document.querySelector(".main");
var spanArray = document.querySelectorAll(".span");

//TOGGLE SIDE-BAR
function toggleSidebar(){
    asideLeft.classList.toggle("active");
    main.classList.toggle("active");
    spanArray.forEach(function(item){
        item.classList.toggle("active");
    });
}