(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    // About Page Nav -- white text
    var pathName = window.location.pathname;
    pathName == '/about.html' ? $('nav, footer').addClass('white-copy') : $('nav, footer').removeClass('white-copy');

    // Homepage project list
    var listItem = $('.project-list > li');
    $(listItem).mouseenter(function() {
      // Navigation Animation
      $(listItem).each(function() {
        $( this ).removeClass('active');
      });
      $(this).addClass('active');
      // Image Change
      for (var i = 1; i < listItem.length + 1; i++) {
        if ($(this).hasClass('proj-' + i )) {
          $('.img-cont').css('background-image', 'url(../assets/img/temp' + i + '.jpg)');
          $('.bg-color').attr('class', 'bg-color').addClass('proj--' + i );
        }
      }
    });


  });

})(jQuery, window, document);
