"use strict";
// Getting Nav Elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
// Adding Event Listener To Nav Elements
hamburger.addEventListener('click', function () {
    navLinks.classList.toggle("active");
});
navLinks.addEventListener('click', function () {
    navLinks.classList.toggle("active");
});
