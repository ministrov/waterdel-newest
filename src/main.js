jQuery(document).ready(function ($) {
  $('#mobile-menu-burger').on('click', function () {
    $(this).toggleClass('active');
    $('#mobile-menu').toggleClass('active');
  });

  function closeMobileMenu() {
    $(this).removeClass('active');
    $('#mobile-menu').removeClass('active');
  }

  $('.mobile-menu__close').on('click', function () {
    closeMobileMenu();
  });

  // Close mobile menu when clicking on links inside
  $('#mobile-menu a').on('click', function () {
    closeMobileMenu();
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('#mobile-menu, #mobile-menu-burger').length) {
      closeMobileMenu();
    }
  });

  // Faq accordion

  $('.faq__question-top').on('click', function () {
    var self = $(this);
    var isActive = self.hasClass('open');

    $('.faq__question-top').removeClass('open');
    $('.faq__question-answer').slideUp(300);

    if (!isActive) {
      self.addClass('open');
      self.next().slideDown(300);
    }
  });

  // Reviews swiper slider initialisation

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

  // Components dynamic hovering

  function bindDiffCardEvents() {
    var items = $('.components__item');

    // Убираем все предыдущие обработчики, чтобы не дублировались при ресайзе
    items.off('mouseenter mouseleave click');

    if ($(window).width() > 992) {
      // На больших экранах — hover по наведению
      items
        .on('mouseenter', function () {
          $(this).addClass('hover');
        })
        .on('mouseleave', function () {
          $(this).removeClass('hover');
        });
    } else {
      items.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);

        if (!$this.hasClass('hover')) {
          items.removeClass('hover');
          $this.addClass('hover');
        } else {
          $this.removeClass('hover');
        }
      });
    }
  }

  bindDiffCardEvents();
});

// Progressbar realisation

const progessBar = document.querySelector('.progressbar');
const windowHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  const windowScroll = window.pageYOffset;
  const progressBarWidth = (windowScroll / windowHeight).toFixed(2);

  progessBar.setAttribute('style', `transform: scaleX(${progressBarWidth})`);
});
