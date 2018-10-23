let header = document.getElementById("amde-header");
let cover = document.getElementById("amde-cover");

// Posición
let coverPosition = cover.getBoundingClientRect().bottom;

// Header Fixed
window.onscroll = () => {

    if (window.pageYOffset >= coverPosition) {
        header.classList.add("header-fixed");
        cover.style.height = "100vh";
    }
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

