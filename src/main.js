jQuery(document).ready(function ($) {
  const reviewsSwiper = new Swiper('.reviews-slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    initialSlide: 1,
    loopAdditionalSlides: 1,
    navigation: {
      nextEl: '.navigation__button--next',
      prevEl: '.navigation__button--prev',
    },
    pagination: {
      el: '.reviews__pagination',
      clickable: true,
    },
    breakpoints: {
      992: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      580: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
    },
  });
});
