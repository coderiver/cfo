(function($) {

  $.fn.menuFlex = function() {

    $(this).each(function() {

      var menu             = $(this),
          menuWidth        = menu.width(),
          nemuItems,
          menuItemsInPopup,
          menuPopup,
          menuMoreBtn,
          itemsWidths      = [],
          i;

      function counItemsWidth() {
        var sum = 0;
        menu.find('> li').each(function() {
          sum += $(this).width();
        });
        return sum;
      };

      function addToPopup() {
        menuItems = menu.find('> li:not(.menuFlexBtn)');
        if (menu.find('.menuFlexBtn').length == 0 && counItemsWidth() > menuWidth) {
          createMenuMore();
        };
        for ( i = menuItems.length-1; i >= 0; i-- ) {
          if ( counItemsWidth() > menuWidth) {
            itemsWidths.unshift($(menuItems[i]).width());
            $(menuItems[i]).prependTo(menuPopup);
          };
        };
      };

      function removeFromPopup() {
        if (menuPopup !== undefined && menuPopup.length) {
          menuItemsInPopup = menuPopup.find('> li');
          btnWidth = menu.find('.menuFlexBtn').width();
          for ( i = 0; i <= menuItemsInPopup.length-1; i++ ) {
            //check if item is last in popup
            if ( itemsWidths.length == 1 && counItemsWidth() - btnWidth + itemsWidths[0] < menuWidth ) {
                $(menuItemsInPopup[i]).insertBefore(menuMoreBtn);
                itemsWidths.shift(0);
                menuMoreBtn.remove();
                menu.removeClass('menuFlex');
            };
            //if not last
            if ( counItemsWidth() + itemsWidths[0] < menuWidth ) {
              $(menuItemsInPopup[i]).insertBefore(menuMoreBtn);
              itemsWidths.shift(0);
            };
          };
        };
      };

      function createMenuMore() {
        menu.append('<li class="menuFlexBtn"><span class="menuFlexBtnText">•••</span><ul class="menuFlexPopup"></ul></li>');
        menuPopup = menu.find('.menuFlexPopup');
        menuMoreBtn = menu.find('.menuFlexBtn');
        menu.addClass('menuFlex');

        menuMoreBtn.on('click', function(event) {
          event.preventDefault();
          event.stopPropagation();
          if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            menuPopup.slideUp(100);
          } else {
            $('.menuFlexPopup').slideUp(100);
            $('.menuFlexBtn').removeClass('active');
            $(this).addClass('active');
            menuPopup.slideDown(100);
          };
        });

        menuPopup.on('click', function(event) {
          event.stopPropagation();
        });

        $(window).on('click', function(event) {
          $('.menuFlexPopup').slideUp(100);
          $('.menuFlexBtn').removeClass('active');
        });
      };

      if ( counItemsWidth() > menuWidth ) {
        addToPopup();
      };

      $(window).on('resize', function() {
        if (menu.width() < menuWidth) {
          menuWidth = menu.width();
          addToPopup();
        };
        if (menu.width() > menuWidth) {
          menuWidth = menu.width();
          setTimeout(function() {
            removeFromPopup();
          }, 50);
        };
      });

    });

  };

})(jQuery);