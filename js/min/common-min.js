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

  $('.js-cycle').cycle({
    slides: '> div',
    prev: '.slider__prev',
    next: '.slider__next',
    fx: 'scrollHorz'
  });

  // $('.js-slick').slick({
  //   prevArrow: '.slider__prev',
  //   nextArrow: '.slider__next',
  //   autoplay: true,
  //   autoplaySpeed: 8000
  // });

});

