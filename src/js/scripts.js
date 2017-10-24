(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    // About Page Nav -- white text
    var pathName = window.location.pathname;
    pathName == '/about.html' ? $('nav, footer').addClass('white-copy') : $('nav, footer').removeClass('white-copy');

    // Homepage project list
    var listItem = $('.project-list > li');
    $(listItem).mouseenter(function() {
      $(listItem).each(function() {
        $( this ).removeClass('active');
      });
      $(this).addClass('active');
    });


  });

})(jQuery, window, document);
