let header = document.getElementById("amde-header");
let cover = document.getElementById("amde-cover");

// Posición
let coverPosition = cover.getBoundingClientRect().bottom;

// Header Fixed
window.onscroll = () => {

    if (window.pageYOffset >= coverPosition){
        header.classList.add("header-fixed");
        cover.style.height ="100vh";
    }

}


