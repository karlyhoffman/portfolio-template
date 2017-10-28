(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    // About Page Nav -- white text
    var pathName = window.location.pathname;
    if (pathName == '/projects.html') {
      $('.navbar-brand').addClass('white-copy');
      $('.nav-link').addClass('dk');
    } else if (pathName == '/about.html') {
      $('.navbar-brand, footer').addClass('white-copy');
    } else if (pathName == '/contact.html') {
      $('.nav-link, .navbar-brand').addClass('dk');
    } else {
      $('.navbar-brand, footer').removeClass('white-copy');
      $('.nav-link, .navbar-brand').removeClass('dk');
    }


    // pathName == '/about.html' ? $('.navbar-brand, footer').addClass('white-copy') : $('.navbar-brand, footer').removeClass('white-copy');
    // pathName == '/contact.html' ? $('.nav-link, .navbar-brand').addClass('dk') : $('.nav-link, .navbar-brand').removeClass('dk');

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
