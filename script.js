const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",() => {
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu When the close button is clicked
menuCloseButton.addEventListener("click",() => menuOpenButton.click
());

// Close menu When the nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click() );
});


//Initialize Swiper
const swiper = new Swiper('.slide-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  // Responsive breakpoints
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});

const header = document.querySelector("header");
const aboutSection = document.getElementById("about");

// Set default state
header.classList.add("nav-home");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + header.offsetHeight;

  if (scrollPosition >= aboutSection.offsetTop) {
    header.classList.remove("nav-home");
    header.classList.add("nav-about");
  } else {
    header.classList.remove("nav-about");
    header.classList.add("nav-home");
  }
});