const swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  loop: true,
  speed: 700,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    860: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1070: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

///////////////////////////button-to-top//////////////////////////////

const btnTop = document.querySelector(".top");
const mainBlock = document.querySelector(".page__main-block ");

const buttonToTop = () => {
  document.documentElement.scrollTop > mainBlock.getBoundingClientRect().height
    ? btnTop.classList.add("top--active")
    : btnTop.classList.remove("top--active");
};

window.addEventListener("scroll", buttonToTop);

const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

btnTop.addEventListener("click", backToTop);

//////////////////////////burger-button///////////////////////////

const burger = document.querySelector(".hamburger");
const navPosition = document.querySelector(".nav__list");
const body = document.body;

const clickBurger = (e) => {
  e.stopPropagation();
  navPosition.classList.toggle("nav__list--active");
  body.classList.toggle("lock");
  burger.classList.toggle("is-active");
};

burger.addEventListener("click", clickBurger);

////////////////////////////close-menu/////////////////////////////////

const clickNav = (e) => {
  if (
    e.target != burger &&
    e.target != navPosition &&
    navPosition.classList.contains("nav__list--active")
  ) {
    navPosition.classList.remove("nav__list--active");
    body.classList.remove("lock");
    burger.classList.remove("is-active");
  }
};

document.addEventListener("click", clickNav);

////////////////////////////wow.js/////////////////////////////////

new WOW().init();
