document.getElementById("open-automation").onclick = function () {
    let automation = document.getElementById("automation");
    automation.classList.toggle("container-information-automation-activate");
};

// function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <=
//             (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <=
//             (window.innerWidth || document.documentElement.clientWidth)
//     );
// }
// var products = document.querySelector(".products");
// var contact = document.getElementById("contactWraper");

// window.addEventListener("scroll", function () {
//     // if (isElementInViewport(products)) {
//     //     products.style.animation = "moveLeft 0.5s ease-out 0.8s backwards";
//     //     products.style.display = "block";
//     // }
//     if (isElementInViewport(contact)) {
//         contact.style.animation = "moveDown 0.5s ease-out 0.8s backwards";
//         contact.style.display = "block";
//     }
// });

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
}

var products = document.querySelector(".products");
var contact = document.querySelector(".contact-us-wrapper");
var productsAnimated = false;
var contactAnimated = false;

window.addEventListener("scroll", function () {
    if (!productsAnimated && isElementInViewport(products)) {
        products.classList.remove("hidden");
        products.classList.add("animate-left");
        productsAnimated = true;
    }
    if (contact && !contactAnimated && isElementInViewport(contact)) {
        contact.classList.remove("hidden");
        contact.classList.add("animate-down");
        contactAnimated = true;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    if (products) products.classList.add("hidden");
    if (contact) contact.classList.add("hidden");
});

// !!
// var mySwiper = new Swiper(".swiper-container", {
//     // Параметры Swiper
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     scrollbar: {
//         el: ".swiper-scrollbar",
//     },
// });

const sliderMain = new Swiper(".slider_main", {
    // freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // centerdSlides: true,
    mousewheel: true,
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    // effect: fade,
});
