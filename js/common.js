head.ready(function() {

    $('.menu-flex').menuFlex();

    $('.nav__icons .icon_search').on('click', function(event) {
        event.preventDefault();
        $('.nav__search').addClass('is-visible');
    });

    $('.nav__search-close').on('click', function(event) {
        event.preventDefault();
        $('.nav__search').removeClass('is-visible');
    });

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
        autoplaySpeed: 10000
    });

    $('.select select').on('change', function(event) {
        var selectedOptionText = $(this).find('option:checked').text();
        $(this).siblings('.select__value').text(selectedOptionText);
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
        if ( !$(this).hasClass('is-link') ) {
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
        };
    });


    //showing left/right shadow when scrolling table when screen width < table width
    $('.table-wrap').each(function(index, el) {
        var inner = $(this);
        inner.wrap('<div class="table-wrap-shadow"></div>')
        var wrapper = $(this).parent();
        wrapper.append('<div class="left-shadow"></div><div class="right-shadow"></div>')
        var leftShadow = wrapper.find('.left-shadow');
        var rightShadow = wrapper.find('.right-shadow');
        var table = $(this).find('.table');
        var showShadow = function() {
            inner.on('scroll', function(event) {
                $(this).scrollLeft() > 0 ? leftShadow.show() : leftShadow.hide();
                $(this).scrollLeft() + wrapper.width() >= table.width() ? rightShadow.hide() : rightShadow.show();
            });
        };
        if (table.width() > wrapper.width()) {
            rightShadow.show();
        };
        $(window).on('resize', function(event) {
            if (table.width() > wrapper.width()) {
                rightShadow.show();
                showShadow();
            } else {
                rightShadow.hide();
                leftShadow.hide();
            }
        });
    });

    // $('.regions-list_tooltip > ul > li').on('click', function(event) {
    //     event.preventDefault();
    //     $(this).toggleClass('is-active');
    // });
    //custom scroll
    $('.js-scroll').each(function() {
        $(this).jScrollPane();
        var api = $(this).data('jsp');
        var throttleTimeout;

        $(window).resize(function() {
            if (!throttleTimeout) {
                throttleTimeout = setTimeout( function() {
                    api.reinitialise();
                    throttleTimeout = null;
                }, 50);
            }
        });
    });
});