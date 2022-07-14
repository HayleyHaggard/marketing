$(function () {

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