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

  //file upload
  if ( $('.file-upload').length != 0 ) {
    var wrapper = $('.file-upload'),
        input   = wrapper.find('input'),
        button  = wrapper.find('.file-upload__btn'),
        label   = wrapper.find('.file-upload__file-name');

    button.on('click', function(event) {
      input.click();
    });

    input.on('focus', function() {
        wrapper.addClass('focus');
    }).blur(function() {
        wrapper.removeClass('focus');
    });

    var fileAPI = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    input.on('change', function() {
      var fileName;
      if ( fileAPI && input[ 0 ].files[ 0 ] ) {
          fileName = input[ 0 ].files[ 0 ].name;
          label.text( fileName );
      } else {
        fileName = input.val().replace( "C:\\fakepath\\", '' );
      };
    });
  };

  //accordion
  $('.accordion__header').on('click', function(event) {
    event.preventDefault();
    var section = $(this).parents('.accordion__section');
    var content = $(this).siblings('.accordion__content');
    if ( !section.hasClass('is-active') ) {
      $('.accordion__section').removeClass('is-active');
      $('.accordion__content').slideUp();
      section.addClass('is-active');
      content.slideDown();
    } else {
      section.removeClass('is-active');
      content.slideUp();
    };

    var closeBtn = content.find('.opinion__close');
    if ( closeBtn.length != 0 ) {
      closeBtn.on('click', function(event) {
        event.preventDefault();
        section.removeClass('is-active');
        content.slideUp();
      });
    };
  });

});