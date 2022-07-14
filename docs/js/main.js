$(function () {

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    document.querySelectorAll('.section').forEach((el, i) => {
      if (el.offsetTop - document.querySelector('.menu').clientHeight <= scrollDistance) {
        document.querySelectorAll('.menu a').forEach((el) => {
          if (el.classList.contains('active')) {
            el.classList.remove('active');
          }
        });
        document.querySelectorAll('.menu li')[i].querySelector('a').classList.add('active');
      }
    });
  });

  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1200);
  });

  AOS.init({
    disable: function () {
      let maxWidth = 1200;
      return window.innerWidth < maxWidth;
    },
    startEvent: 'DOMContentLoaded',
    offset: 100,
    delay: 100,
    duration: 1000,
    once: true
  });

  $('.slider__blog-inner').slick({
    dots: true,

    prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-right.svg"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false
        }
      },
    ]
  });

  $('.menu__btn').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active');

  });

  var mixer = mixitup('.portfolio__content');

});