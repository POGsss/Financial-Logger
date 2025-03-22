// Getting Nav Elements
const hamburger = document.getElementById("hamburger") as HTMLElement;
const navLinks = document.getElementById("navLinks") as HTMLElement;

// Adding Event Listener To Nav Elements
hamburger.addEventListener('click', function() {
    navLinks.classList.toggle("active");
});
navLinks.addEventListener('click', function() {
    navLinks.classList.toggle("active");
});
