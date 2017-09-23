(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    var pathName = window.location.pathname;
    if (pathName == '/about.html') {
      $('header, footer').addClass('white-copy');
    } else {
      $('header, footer').removeClass('white-copy');
    }

  });

})(jQuery, window, document);
