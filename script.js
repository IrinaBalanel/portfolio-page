var menu = document.getElementById("menu");
var toggle = document.getElementById("header-navigation");
menu.addEventListener("click", function(){
    toggle.classList.add("show-small");
    event.stopPropagation(); //used chat GPT to get this line because my reset on click didn't work at all
});

// to reset the menu
var resetClick = document.body;
resetClick.addEventListener("click", function(){
    toggle.classList.remove("show-small");
});