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

  function bindDiffCardEvents() {
    var $cards = $('.comp-card');

    console.log($cards);

    // Убираем все предыдущие обработчики, чтобы не дублировались при ресайзе
    $cards.off('mouseenter mouseleave click');

    if ($(window).width() > 992) {
      // На больших экранах — hover по наведению
      $cards
        .on('mouseenter', function () {
          $(this).addClass('hover');
        })
        .on('mouseleave', function () {
          $(this).removeClass('hover');
        });
    } else {
      $cards.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);

        if (!$this.hasClass('hover')) {
          $cards.removeClass('hover');
          $this.addClass('hover');
        } else {
          $this.removeClass('hover');
        }
      });
    }
  }

  bindDiffCardEvents();
});
