// hero section animation
var typed = new Typed('.input', {
    strings:["Zul Fadli"],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true
});


// toggle navbar animation
const menuToggle = document.querySelector('.hamburger input');
// const nav = document.querySelector('nav ul');
const nav = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
    // nav.classList.toggle('dflex');
});