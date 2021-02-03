//DOM ELEMENTS
var asideLeft = document.querySelector(".aside-left");
var main = document.querySelector(".main");
var spanArray = document.querySelectorAll(".span");
var wrapper = document.querySelector(".wrapper");
var imageContainer = document.querySelector(".image-container");

//TOGGLE SIDE-BAR
function toggleSidebar(){
    asideLeft.classList.toggle("active");
    main.classList.toggle("active");
    spanArray.forEach(function(item){
        item.classList.toggle("active");
    });
    wrapper.classList.toggle("active");
    imageContainer.classList.toggle("active");
}