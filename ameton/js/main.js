var swiper = new Swiper(".faq__swiper", {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});