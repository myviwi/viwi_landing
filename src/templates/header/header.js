$("#early_access_header").click(function() {
  $('html, body').animate({
    scrollTop: $('.early_access').offset().top - 400
  }, 1000);
  $('#mce-EMAIL').focus();

});
