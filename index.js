let navbar = document.getElementsByClassName("nav")[0];
let circle = document.getElementsByClassName("container")[0];

function show() {
    navbar.classList.add('show_navbar');
    circle.classList.add('show_navbar');
}

function hide() {
    navbar.classList.remove('show_navbar');
    circle.classList.remove('show_navbar');
}