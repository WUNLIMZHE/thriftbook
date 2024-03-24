$("#view-blog-button").click(function() {
  $('html, body').animate({
    scrollTop: $('.blog-container').offset().top
  }, 'slow');
});