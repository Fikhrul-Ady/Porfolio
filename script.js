var typed = new Typed(".input", {
    strings: ["Fullstack Developer", "Desaigner", "Student"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
})

// sticky-header-js
const header = document.querySelector('.header');

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
})