head.ready(function() {

  // $(document).on("click", function(){
  // 	$(".js-popup").hide();
  // });

  $('.menu-flex').menuFlex();

  $('.nav__icons .icon_search').on('click', function(event) {
    event.preventDefault();
    $('.nav__search').addClass('is-visible');
  });

  $('.nav__search-close').on('click', function(event) {
    event.preventDefault();
    $('.nav__search').removeClass('is-visible');
  });

  // $('.js-cycle').cycle({
  //   slides: '> .slider__slide',
  //   prev: '.slider__prev',
  //   next: '.slider__next',
  //   fx: 'scrollHorz'
  // });

  $('.slider__list').slick({
    slide: '.slider__slide',
    prevArrow: '.slider__prev',
    nextArrow: '.slider__next',
    autoplay: true,
    autoplaySpeed: 8000
  });

  $('.carousel__slides').slick({
    slide: 'li',
    prevArrow: '.carousel__prev',
    nextArrow: '.carousel__next',
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 10000,
    // responsive: [
    //     {
    //       breakpoint: 900,
    //       settings: {
    //         slidesToShow: 3,
    //         prevArrow: '.carousel__prev',
    //         nextArrow: '.carousel__next'
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         prevArrow: '.carousel__prev',
    //         nextArrow: '.carousel__next'
    //       }
    //     },
    //   ]
  });

  $('.select select').on('change', function(event) {
    $(this).siblings('.select__value').text(this.value);
  });

});