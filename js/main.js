// alert("Hi");
let nav = document.getElementById("navbar");
let hTag = document.querySelectorAll("h3");
let pTag = document.querySelectorAll("p");
let darkThem = document.getElementById("darkTheme");
let lightThem = document.getElementById("lightTheme");

// Set Theme Body Dark/Light //
darkThem.addEventListener('click', function(){
    document.body.style.background = "#343a40";
    nav.style.background = "#343a40";
    hTag.forEach((item, index) => item.style.color = "#f8f9fa");
    pTag.forEach((item, index) => item.style.color = "#f8f9fa");
        //console.log("Set Dark Theme ok");
});
lightThem.addEventListener('click', function(){
    document.body.style.background = "#f8f9fa";
    nav.style.background = "#6f42c1";
    hTag.forEach((item, index) => item.style.color = "#343a40");
    pTag.forEach((item, index) => item.style.color = "#343a40");
        //console.log("Set Light Theme ok");
});



