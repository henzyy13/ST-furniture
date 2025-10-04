const toggle = document.querySelector('.toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

toggle.addEventListener('click', function() {
    if (menuOpen == false) {
        nav.style.display = "block";
        menuOpen = true;
    }
     else if (menuOpen == true) {
        nav.style.display = "none";
        menuOpen = false;
     }
});

