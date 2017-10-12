(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    var pathName = window.location.pathname;
    if (pathName == '/about.html') {
      $('nav, footer').addClass('white-copy');
    } else {
      $('nav, footer').removeClass('white-copy');
    }

  });

})(jQuery, window, document);
